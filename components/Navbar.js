import React from "react";
//import logo from "../../public/images/logo.png";+
export default function Navbar() {
    return (
        <div>
            <nav>
                <div className="brandlogo">
                    <img src="/favicon.png" alt="notseen" className="logo"/>
                    <h1>Travel Journal</h1>
                </div>
                <ul>
                    <li className="active">Home</li>
                    <li>About</li>
                    <li>Travel Journals</li>
                </ul>

        </nav>
        
        </div>
    );
}





