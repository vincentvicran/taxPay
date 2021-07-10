import React, { Fragment, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getVehicles } from '../../../actions/vehicleActions';
import { useAlert } from 'react-alert';

import VehicleItem from '../components/VehicleItem';
import '.././shared/styles/vehicles.css';

import Loader from '../../.././Loader';
import {getDatas} from '../action'
import {get} from "lodash"
const VehicleList = () => {
    let vehicles = [];
    const alert = useAlert();
    const dispatch = useDispatch();

    // const { loading, error } = useSelector((state) => state.vehicles);
const {readState,data} = useSelector(state=> state.VehicleReducer);
    useEffect(async() => {
        // if (error) {
        //     alert.success('Success!');
        //     return alert.error(error);
        // }

   const res = await   dispatch(getDatas());
   const status = get(res,"value.status");
   if(status === 200){
    console.log("my response",res);
   }else{

   }
  

    }, [dispatch]);
    console.log("read",readState,data);
    return (
        <Fragment>
            {/* {loading ? (
                <h1>
                    <Loader />
                </h1>
            ) : (
                vehicles.map((vehicle) => {
                    return <VehicleItem key={vehicle._id} vehicle={vehicle} />;
                })
            )} */}
            <h1>Hello</h1>
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
