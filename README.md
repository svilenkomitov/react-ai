# react-ai

The idea behind the project is to generate React components using AI technologies.


## Components 

* dashboard - UI to generate React components and see the visual representation and the generated code.
* example - store and serve the generated React components.
* platform - API to generate the React components.

## Prerequisites

* add your OpenAI API_KEY in ```platform/script.py```

## Setup

* start the dashboard component - http://localhost:3000
  ```shell
  $ cd dashboard
  $ npm start
  ```

* start the example component - http://localhost:3001
  ```shell
  $ cd example
  $ PORT=3001 npm start
  ```

* start the platform component - http://localhost:8080?component=button
  ```shell
  $ cd platform
  $ python script.py
  ```