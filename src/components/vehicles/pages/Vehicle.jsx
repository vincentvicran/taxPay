import React, { Fragment, useEffect } from 'react';

import Loader from '../../.././Loader';

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { getVehicleDetails, clearErrors } from '../../../actions/vehicleActions';

import '.././shared/styles/vehicles.css';

import VehicleItem from '../components/VehicleItem';

export function Vehicle({ match }) {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, vehicle } = useSelector((state) => state.vehicleDetails);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getVehicleDetails(match.params.id));
    }, [dispatch, alert, error, match.params.id]);

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
                                <VehicleItem edit vehicle={vehicle} />
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
}
export default Vehicle;
