import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

export default function Home() {
    const { isAuthenticated } = useSelector((state) => state.auth);

    return (
        <div className="home">
            <div className="homeGreeting">Namaste!</div>
            <div className="homeTitle">taxPay</div>
            {isAuthenticated ? (
                <ol className="homeFunctions">
                    <Link to="/gov/addvehicle">
                        <li className="homeFunctionItems">Register your vehicles.</li>
                    </Link>
                    <Link to="/gov/addinsurance">
                        <li className="homeFunctionItems">Include the insurance papers.</li>
                    </Link>
                    <Link to="/gov/addpayment">
                        <li className="homeFunctionItems">Pay the required taxes.</li>
                    </Link>
                </ol>
            ) : (
                <ol className="outFunctions">
                    <li className="outFunctionItems">Register your vehicles.</li>
                    <li className="outFunctionItems">Include the insurance papers.</li>
                    <li className="outFunctionItems">Pay the required taxes.</li>
                </ol>
            )}
            <div className="homeTaxrates">
                <Link to="/gov/taxrates" className="taxrates">
                    Tax Rates
                </Link>
            </div>
        </div>
    );
}
