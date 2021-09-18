import React, { Fragment, useEffect } from 'react';

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

import Loader from '../../.././Loader';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { loadVehicle, clearErrors } from '../../../actions/vehicleActions';

import '.././shared/styles/vehicles.css';

import VehicleItem from '../components/VehicleItem';

export function Vehicle() {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, error, vehicle } = useSelector((state) => state.vehicleDetail);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        alert.success('Success!');
        // console.log(match.params);
        dispatch(loadVehicle(id));
    }, [dispatch, alert, error, id]);

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <div className="vehicles">
                        <div className="vehicleBody">
                            <div className="vehicleTitle">Vehicle</div>
                            <div className="vehicleContainer">
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
                                    {/* <div className="vehicleShowInfo">
                                        <PermIdentityRounded className="vehicleShowIcon" />
                                        <span className="vehicleShowInfoTitle">{vehicle.uploadedBy}</span>
                                    </div> */}
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
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
}
export default Vehicle;
