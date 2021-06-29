import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home">
            <div className="homeGreeting">Namaste!</div>
            <div className="homeTitle">Vehicle Tax Collection System</div>
            <ol className="homeFunctions">
                <Link to="/addvehicle">
                    <li className="homeFunctionItems">Register your vehicles.</li>
                </Link>
                <Link to="/addinsurance">
                    <li className="homeFunctionItems">Include the insurance papers.</li>
                </Link>
                <Link to="/addpayment">
                    <li className="homeFunctionItems">Pay the required taxes.</li>
                </Link>
            </ol>
            <div className="homeTaxrates">
                <Link to="/taxrates" className="taxrates">
                    Tax Rates
                </Link>
            </div>
        </div>
    );
}
