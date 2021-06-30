import React from 'react';
import VehicleItem from '../components/VehicleItem';
import '.././shared/styles/vehicles.css';

const vehicles = [
    {
        __id: '1',
        ownerName: 'Vikrant Shrestha',
        vehicleRegistrationDate: '2020-01-22',
        vehicleType: 'TwoWheeler',
        vehicleNumber: 'Ba.99Pa.11',
        engineCapacity: '150cc',
        latestPaymentDate: '2015-02-22',
    },
    {
        __id: '2',
        ownerName: 'Vincent Vicran',
        vehicleRegistrationDate: '2010-11-27',
        vehicleType: 'FourWheeler',
        vehicleNumber: 'Ba.67Pa.1291',
        engineCapacity: '1800cc',
        latestPaymentDate: '2017-02-22',
    },
];

function VehicleList() {
    return vehicles.map((vehicle) => {
        return <VehicleItem vehicle={vehicle} />;
    });
}

export default VehicleList;
