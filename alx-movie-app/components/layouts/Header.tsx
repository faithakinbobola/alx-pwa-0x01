import React from "react";

interface HeaderProps {
    
}
 
const Header: React.FC<HeaderProps> = () => {
    return ( 
        <div>
            <header className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-2xl font-bold">Welcome to Our Website</h1>
                    <p className="mt-2">Your one-stop solution for all your needs.</p>
                </div>
            </header>
        </div>
     );
}
 
export default Header;