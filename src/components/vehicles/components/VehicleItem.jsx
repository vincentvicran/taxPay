import React from 'react';
import {
    CalendarToday,
    ClosedCaption,
    Commute,
    PermIdentity,
    Ballot,
    EventAvailable,
    EditSharp,
    Delete,
    PermIdentityRounded,
} from '@material-ui/icons';
import '.././shared/styles/vehicles.css';

function VehicleItem({ vehicle }) {
    if (vehicle.length !== 0) {
        return (
            <div className="vehicleShow">
                <span className="vehicleShowTitle">Owner Name</span>
                <div className="vehicleShowInfo">
                    <PermIdentity className="vehicleShowIcon" />
                    <span className="vehicleShowInfoTitle">{vehicle.ownerName}</span>
                </div>
                <span className="vehicleShowTitle">Type</span>
                <div className="vehicleShowInfo">
                    <Commute className="vehicleShowIcon" />
                    <span className="vehicleShowInfoTitle">{vehicle.vehicleType}</span>
                </div>
                <span className="vehicleShowTitle">Registration Date</span>
                <div className="vehicleShowInfo">
                    <CalendarToday className="vehicleShowIcon" />
                    <span className="vehicleShowInfoTitle">{vehicle.vehicleRegistrationDate}</span>
                </div>
                <span className="vehicleShowTitle">Vehicle Number</span>
                <div className="vehicleShowInfo">
                    <Ballot className="vehicleShowIcon" />
                    <span className="vehicleShowInfoTitle">{vehicle.vehicleNumber}</span>
                </div>
                <span className="vehicleShowTitle">Engine Capacity</span>
                <div className="vehicleShowInfo">
                    <ClosedCaption className="vehicleShowIcon" />
                    <span className="vehicleShowInfoTitle">{vehicle.engineCapacity}</span>
                </div>
                <span className="vehicleShowTitle">Latest Payment Date</span>
                <div className="vehicleShowInfo">
                    <EventAvailable className="vehicleShowIcon" />
                    <span className="vehicleShowInfoTitle">{vehicle.latestPaymentDate}</span>
                </div>
                <span className="vehicleShowTitle">Registered By</span>
                <div className="vehicleShowInfo">
                    <PermIdentityRounded className="vehicleShowIcon" />
                    <span className="vehicleShowInfoTitle">{vehicle.user}</span>
                </div>
                <div className="vehicleBottom">
                    <div className="vehicleEdit">
                        <EditSharp className="vehicleShowIcon" />
                        <button className="vehicleEditButton">Edit</button>
                    </div>

                    <div className="vehicleDelete">
                        <Delete className="vehicleShowIcon" />
                        <button className="vehicleDeleteButton">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default VehicleItem;
