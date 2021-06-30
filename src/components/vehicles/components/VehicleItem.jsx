import React from 'react';
import {
    CalendarToday,
    ClosedCaption,
    Commute,
    PermIdentity,
    Ballot,
    EventAvailable,
    EditSharp,
} from '@material-ui/icons';
import '.././shared/styles/vehicles.css';

function VehicleItem({ vehicle }) {
    if (vehicle.length !== 0) {
        return (
            <div className="vehicleShow">
                <span className="vehicleShowTitle">Vehicle Owner Name</span>
                <div className="vehicleShowInfo">
                    <PermIdentity className="vehicleShowIcon" />
                    <span className="vehicleShowInfoTitle">{vehicle.ownerName}</span>
                </div>
                <span className="vehicleShowTitle">Vehicle Type</span>
                <div className="vehicleShowInfo">
                    <Commute className="vehicleShowIcon" />
                    <span className="vehicleShowInfoTitle">{vehicle.vehicleType}</span>
                </div>
                <span className="vehicleShowTitle">Vehicle Registration Date</span>
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
                <div className="vehicleEditBottom">
                    <EditSharp />
                    <button className="vehicleEditButton">Edit</button>
                </div>
            </div>
        );
    }
}

export default VehicleItem;
