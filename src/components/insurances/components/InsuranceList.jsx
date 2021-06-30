import React from 'react';
import InsuranceItem from '../components/InsuranceItem';
import '.././shared/styles/insurances.css';

const insurances = [
    {
        __id: '1',
        insuranceDOI: '2019-11-22',
        insuranceType: 'TwoWheeler',
        insuranceDOE: '2020-12-22',
    },
    {
        __id: '2',
        insuranceDOI: '2020-08-22',
        insuranceType: 'TwoWheeler',
        insuranceDOE: '2021-08-31',
    },
];

function InsuranceList() {
    return insurances.map((insurance) => {
        return <InsuranceItem insurance={insurance} />;
    });
}

export default InsuranceList;
