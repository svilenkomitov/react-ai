import openai
import re
import os
from psutil import process_iter
from signal import SIGKILL  # or SIGKILL
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, parse_qs

openai.api_key = "<OPEN_AI_API_KEY>"


def extract_code_snippets(content):
    code_snippets = []
    pattern = re.compile(r'```(\w+)?\n(.*?)```', re.DOTALL)
    matches = pattern.findall(content)
    for match in matches:
        language, code = match
        code_snippets.append((language, code))
    return code_snippets


def generate_code(lang, component):
    messages = [
        {"role": "system", "content": f"You are a {lang} developer."},
        {"role": "user",
         "content": f"Create a reusable {component} component using tailwindss"},
    ]

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        max_tokens=1024,
        messages=messages,
        temperature=0)

    content = response.choices[0].message.content

    code_snippets = extract_code_snippets(content)
    code = code_snippets[0][1]
    usage = code_snippets[1][1]

    return code, usage


def save_file(name, content):
    file = open(name, "w")
    file.write(content)
    file.close()


def create_app(component_name, component_code, app_code):
    app_name = f"ai-{component_name.lower()}"
    os.system(f"npx create-react-app {app_name}")
    os.chdir(app_name)

    os.system("npm install tailwindcss postcss autoprefixer")

    os.system(f"touch src/{component_name}.js")
    with open(f"src/{component_name}.js", "w") as f:
        f.write(component_code)

    with open("src/App.js", "w") as f:
        f.write(app_code)

    os.system("PORT=3001 npm start")


def kill(port):
    for proc in process_iter():
        for conns in proc.connections(kind='inet'):
            if conns.laddr.port == port:
                proc.send_signal(SIGKILL)  # or SIGKILL


class MyHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed_path = urlparse(self.path)
        query_components = parse_qs(parsed_path.query)
        if 'component' in query_components:
            component_name = ''.join([word.capitalize() for word in query_components['component'][0].split("-")])
            print(component_name)
            component_code, app_code = generate_code("react", component_name)

            os.system(f"touch ../example/src/{component_name}.js")
            with open(f"../example/src/{component_name}.js", "w") as f:
                f.write(component_code)

            with open("../example/src/App.js", "w") as f:
                f.write(app_code)

            self.send_response(200)
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(component_code.encode())
        else:
            self.send_response(400)
            self.send_header('Content-type', 'text/html')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(b'Missing component parameter')


def run_server(port):
    # kill(3001)

    server_address = ('', port)
    httpd = HTTPServer(server_address, MyHandler)
    print(f'Starting server on port {port}')
    httpd.serve_forever()


run_server(8080)
