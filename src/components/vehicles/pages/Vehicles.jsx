import React from 'react';
import '.././shared/styles/vehicles.css';
import AddIcon from '@material-ui/icons/Add';

import { Link } from 'react-router-dom';
import VehicleList from '../components/VehicleList';

export function Vehicles() {
    return (
        <div className="vehicles">
            <div className="vehicleBody">
                <div className="vehicleTitle">Vehicles</div>
                <div className="vehicleContainer">
                    <VehicleList />
                    <Link to="/gov/addvehicle" className="vehicleAddNew">
                        <AddIcon />
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Vehicles;
