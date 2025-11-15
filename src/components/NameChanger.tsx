import {useState} from "react";
const NameChanger = () => {

    const [input, setInput] = useState("");



    return (
        <div className="text-center">
            <h1 className="font-bold">Hello, {input}</h1>

            <input
            type="text"
            placeholder="Enter Name..."
            className="border border-gray-300 px-4 py-2 leading-tight focus:border-indigo-500 "
            onChange={(e) => setInput(e.target.value)}
            />
        </div>
    );
};

export default NameChanger;