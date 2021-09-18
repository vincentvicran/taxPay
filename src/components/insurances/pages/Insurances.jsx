import React from 'react';
import '.././shared/styles/insurances.css';
import AddIcon from '@material-ui/icons/Add';

import { Link } from 'react-router-dom';
import InsuranceList from '../components/InsuranceList';

export function Insurances() {
    return (
        <div className="insurances">
            <div className="insuranceBody">
                <div className="insuranceTitle">Insurances</div>
                <div className="insuranceContainer">
                    <InsuranceList />
                    <Link to="/gov/addinsurance" className="insuranceAddNew">
                        <AddIcon />
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Insurances;
