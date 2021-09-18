import React, { Fragment } from 'react';
import {
    CalendarToday,
    ClosedCaption,
    Commute,
    PermIdentity,
    Ballot,
    EventAvailable,
    Delete,
    PermIdentityRounded,
} from '@material-ui/icons';
import '.././shared/styles/vehicles.css';
import { deleteVehicle, getVehicles } from '../../../actions/vehicleActions';
import { useHistory } from 'react-router';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

function VehicleItem({ vehicle, edit }) {
    const history = useHistory();
    const alert = useAlert();
    const dispatch = useDispatch();

    const { error } = useSelector((state) => state.vehicles);

    const delVehicle = () => {
        dispatch(deleteVehicle(vehicle._id));
        if (error) {
            alert.error(error);
        } else {
            alert.success('Requested Vehicle Deleted Successfully!');
            dispatch(getVehicles());
            history.push('/gov/vehicles');
        }
    };

    if (vehicle.length !== 0) {
        return (
            <div className="vehicleShow">
                {!edit && (
                    <Fragment>
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
                            <span className="vehicleShowInfoTitle">{vehicle.uploadedBy.userName}</span>
                        </div>

                        <div className="vehicleBottom">
                            <div className="vehicleDelete" onClick={delVehicle}>
                                <Delete className="vehicleShowIcon" />
                                <button className="vehicleDeleteButton">Delete</button>
                            </div>
                        </div>
                    </Fragment>
                )}
                {/* {edit && (
                    <Fragment>
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
                    </Fragment>
                )} */}
            </div>
        );
    }
}

export default VehicleItem;
