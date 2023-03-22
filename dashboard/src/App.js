import React, {useEffect, useState} from 'react';
import "./spinner.css";

function App() {
    const [inputValue, setInputValue] = useState('');
    const [someProp, setSomeProp] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [code, setCode] = useState('');

    const handleButtonClick = async () => {
        setIsLoading(true);
        try {
            await fetch(`http://localhost:8080?component=${inputValue}`).then(function(response) {
                return response.text();
            }).then(function(data) {
                setSomeProp(0);
                setCode(data)
            });
            setIsLoading(false)
        } catch (error) {
            console.error(error);
            setIsLoading(false)
        }
    };

    const useChecksum = (value) => {
        const [checksum, setChecksum] = useState(0);
        useEffect(() => {
            setChecksum(checksum => checksum + 1);
        }, [value]);
        return checksum;
    }

    const checksum = useChecksum(someProp);

    return (
            <div className="grid h-screen flex justify-center items-center bg-gray-900">
                <div className="justify-center mt-40 flex">
                    <input type="text"
                           value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}
                           className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                           placeholder="Generate component..."/>
                        <button className="px-5 mx-5 text-white rounded-lg bg-red-500 hover:bg-red-600"
                                onClick={handleButtonClick} disabled={isLoading}>Generate
                        </button>
                </div>
                {isLoading ? <div className="justify-center flex">
                        <div className="spinner-container">
                            <div className="loading-spinner">
                            </div>
                        </div></div> :
                    <div className="flex items-stretch">
                        <iframe key={checksum} src="http://localhost:3001" height="500" width="500" className="bg-gray-100 rounded-lg"/>
                        <div className="overflow-auto h-[500px] w-[500px] p-5 ml-5 rounded-lg z-0 focus:shadow focus:outline-none whitespace-pre-line bg-gray-100">
                            {code}
                        </div>
                    </div>
                }

        </div>
    );
}

export default App;