import React from 'react';
import AddIcon from '@material-ui/icons/Add';

function AddVehicle() {
    return (
        <div className="vehicles">
            <div className="vehicleBody">
                <div className="vehicleTitle">Register your vehicle</div>
                <div className="vehicleAdd">
                    <form className="vehicleAddForm">
                        <div className="vehicleAddLeft">
                            <div className="vehicleAddItem">
                                <label className="vehicleShowTitle">Vehicle Owner Name</label>
                                <input type="text" placeholder="Vikrant Shrestha" className="vehicleAddInput" />
                            </div>
                            <div className="vehicleAddItem">
                                <label className="vehicleShowTitle">Vehicle Type</label>
                                <input type="text" placeholder="Two Wheeler" className="vehicleAddInput" />
                            </div>
                            <div className="vehicleAddItem">
                                <label className="vehicleShowTitle">Vehicle Registration Date</label>
                                <input type="date" className="vehicleAddInput" />
                            </div>
                        </div>

                        <div className="vehicleAddRight">
                            <div className="vehicleAddItem">
                                <label className="vehicleShowTitle">Vehicle Number</label>
                                <input type="text" placeholder="Ba.49Pa.5" className="vehicleAddInput" />
                            </div>
                            <div className="vehicleAddItem">
                                <label className="vehicleShowTitle">Engine Capacity</label>
                                <input type="text" placeholder="150" className="vehicleAddInput" />
                            </div>
                            <div className="vehicleAddItem">
                                <label className="vehicleShowTitle">Latest Payment Date</label>
                                <input type="date" className="vehicleAddInput" />
                            </div>
                        </div>
                        <div className="vehicleAddBottom">
                            <AddIcon />
                            <button className="vehicleAddButton">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddVehicle;
