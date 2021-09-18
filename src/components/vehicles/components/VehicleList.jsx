import React, { Fragment, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getVehicles } from '../../../actions/vehicleActions';
import { useAlert } from 'react-alert';

import VehicleItem from '../components/VehicleItem';
import '.././shared/styles/vehicles.css';

import Loader from '../../.././Loader';

const VehicleList = () => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, vehicles } = useSelector((state) => state.vehicles);

    useEffect(() => {
        if (error) {
            return alert.error(error);
        }

        alert.success('Vehicles loaded successfully!');
        dispatch(getVehicles());
    }, [dispatch, alert, error]);

    return (
        <Fragment>
            {loading ? (
                <div style={{ padding: '90px 50% 400px' }}>
                    <Loader />
                </div>
            ) : (
                vehicles.map((vehicle) => {
                    //* for each loop for vehicles array
                    return <VehicleItem key={vehicle._id} vehicle={vehicle} />;
                })
            )}
        </Fragment>
    );
};

export default VehicleList;

// const vehicles = [
//     {
//         __id: '1',
//         ownerName: 'Vikrant Shrestha',
//         vehicleRegistrationDate: '2020-01-22',
//         vehicleType: 'TwoWheeler',
//         vehicleNumber: 'Ba.99Pa.11',
//         engineCapacity: '150cc',
//         latestPaymentDate: '2015-02-22',
//     },
//     {
//         __id: '2',
//         ownerName: 'Vincent Vicran',
//         vehicleRegistrationDate: '2010-11-27',
//         vehicleType: 'FourWheeler',
//         vehicleNumber: 'Ba.67Pa.1291',
//         engineCapacity: '1800cc',
//         latestPaymentDate: '2017-02-22',
//     },
// ];
