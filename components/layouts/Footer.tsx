import React from "react";

interface FooterProps {
    
}
 
const Footer: React.FC<FooterProps> = () => {
    return ( 
        <div>
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2023 Your Company. All rights reserved.</p>
                    <p className="mt-2">Follow us on social media!</p>
                </div>
            </footer>
        </div> 
    );
}
 
export default Footer;