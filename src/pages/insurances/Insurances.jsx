import React from 'react';
import './insurances.css';
import { CalendarToday, ClosedCaption, Commute, PermIdentity, Ballot, EventAvailable } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

export function Insurances() {
    return (
        <div className="insurances">
            <div className="insuranceBody">
                <div className="insuranceTitle">insurances</div>
                <div className="insuranceContainer">
                    <div className="insuranceShow">
                        <span className="insuranceShowTitle">insurance Owner Name</span>
                        <div className="insuranceShowInfo">
                            <PermIdentity className="insuranceShowIcon" />
                            <span className="insuranceShowInfoTitle">Vikrant Shrestha</span>
                        </div>

                        <span className="insuranceShowTitle">insurance Type</span>
                        <div className="insuranceShowInfo">
                            <Commute className="insuranceShowIcon" />
                            <span className="insuranceShowInfoTitle">Two Wheeler</span>
                        </div>

                        <span className="insuranceShowTitle">insurance Registration Date</span>
                        <div className="insuranceShowInfo">
                            <CalendarToday className="insuranceShowIcon" />
                            <span className="insuranceShowInfoTitle">10.10.2072</span>
                        </div>

                        <span className="insuranceShowTitle">insurance Number</span>
                        <div className="insuranceShowInfo">
                            <Ballot className="insuranceShowIcon" />
                            <span className="insuranceShowInfoTitle">Ba.49Pa.5</span>
                        </div>

                        <span className="insuranceShowTitle">Engine Capacity</span>
                        <div className="insuranceShowInfo">
                            <ClosedCaption className="insuranceShowIcon" />
                            <span className="insuranceShowInfoTitle">150</span>
                        </div>

                        <span className="insuranceShowTitle">Latest Payment Date</span>
                        <div className="insuranceShowInfo">
                            <EventAvailable className="insuranceShowIcon" />
                            <span className="insuranceShowInfoTitle">10.12.2077</span>
                        </div>
                    </div>
                    <Link to="/addinsurance" className="insuranceAddNew">
                        <AddIcon />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export function AddInsurance() {
    return (
        <div className="insurances">
            <div className="insuranceBody">
                <div className="insuranceTitle">Register your insurance</div>
                <div className="insuranceAdd">
                    <form className="insuranceAddForm">
                        <div className="insuranceAddLeft">
                            <div className="insuranceAddItem">
                                <label className="insuranceShowTitle">insurance Owner Name</label>
                                <input type="text" placeholder="Vikrant Shrestha" className="insuranceAddInput" />
                            </div>
                            <div className="insuranceAddItem">
                                <label className="insuranceShowTitle">insurance Type</label>
                                <input type="text" placeholder="Two Wheeler" className="insuranceAddInput" />
                            </div>
                            <div className="insuranceAddItem">
                                <label className="insuranceShowTitle">insurance Registration Date</label>
                                <input type="date" className="insuranceAddInput" />
                            </div>
                        </div>

                        <div className="insuranceAddRight">
                            <div className="insuranceAddItem">
                                <label className="insuranceShowTitle">insurance Number</label>
                                <input type="text" placeholder="Ba.49Pa.5" className="insuranceAddInput" />
                            </div>
                            <div className="insuranceAddItem">
                                <label className="insuranceShowTitle">Engine Capacity</label>
                                <input type="text" placeholder="150" className="insuranceAddInput" />
                            </div>
                            <div className="insuranceAddItem">
                                <label className="insuranceShowTitle">Latest Payment Date</label>
                                <input type="date" className="insuranceAddInput" />
                            </div>
                        </div>
                        <div className="insuranceAddBottom">
                            <button className="insuranceAddButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Insurances;
