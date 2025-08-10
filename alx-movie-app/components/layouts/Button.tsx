import React from "react";

interface ButtonProps {

}

const Button: React.FC<ButtonProps> = () => {
    return (
        <div>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                Click Me
            </button>
            <p className="mt-2 text-gray-700">This is a button component.</p>
        </div>
    );
}

export default Button;