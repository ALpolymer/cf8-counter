import * as React from "react";
type buttonProps = {
    text: string;
}

const CustomButton = ({text} : buttonProps) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const name  = "Alex"

        console.log("coordinates",  e.clientX, e.clientY)
        console.log(`Hey ${name} you clicked ${text}!`)


    }
    return (
        <button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
                onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default CustomButton;