import React from 'react';
import './vehicles.css';
import { CalendarToday, ClosedCaption, Commute, PermIdentity, Ballot, EventAvailable } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

export function Vehicles() {
    return (
        <div className="vehicles">
            <div className="vehicleBody">
                <div className="vehicleTitle">Vehicles</div>
                <div className="vehicleContainer">
                    <div className="vehicleShow">
                        <span className="vehicleShowTitle">Vehicle Owner Name</span>
                        <div className="vehicleShowInfo">
                            <PermIdentity className="vehicleShowIcon" />
                            <span className="vehicleShowInfoTitle">Vikrant Shrestha</span>
                        </div>

                        <span className="vehicleShowTitle">Vehicle Type</span>
                        <div className="vehicleShowInfo">
                            <Commute className="vehicleShowIcon" />
                            <span className="vehicleShowInfoTitle">Two Wheeler</span>
                        </div>

                        <span className="vehicleShowTitle">Vehicle Registration Date</span>
                        <div className="vehicleShowInfo">
                            <CalendarToday className="vehicleShowIcon" />
                            <span className="vehicleShowInfoTitle">10.10.2072</span>
                        </div>

                        <span className="vehicleShowTitle">Vehicle Number</span>
                        <div className="vehicleShowInfo">
                            <Ballot className="vehicleShowIcon" />
                            <span className="vehicleShowInfoTitle">Ba.49Pa.5</span>
                        </div>

                        <span className="vehicleShowTitle">Engine Capacity</span>
                        <div className="vehicleShowInfo">
                            <ClosedCaption className="vehicleShowIcon" />
                            <span className="vehicleShowInfoTitle">150</span>
                        </div>

                        <span className="vehicleShowTitle">Latest Payment Date</span>
                        <div className="vehicleShowInfo">
                            <EventAvailable className="vehicleShowIcon" />
                            <span className="vehicleShowInfoTitle">10.12.2077</span>
                        </div>
                    </div>
                    <Link to="/addvehicle" className="vehicleAddNew">
                        <AddIcon />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export function AddVehicle() {
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
                            <button className="vehicleAddButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Vehicles;
