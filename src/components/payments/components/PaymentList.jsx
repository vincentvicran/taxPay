import React from 'react';
import PaymentItem from '../components/PaymentItem';
import '.././shared/styles/payments.css';

const payments = [
    {
        __id: '1',
        payor: 'vincy07',
        vehicle: 'Ba.49Pa.5',
        paymentAmount: '5045',
        voucherImage: './src/assets/images/payment.jpg',
        paymentDate: '2021.12.20',
    },
    {
        __id: '2',
        payor: 'danielkreig12',
        vehicle: 'Ba.89Pa.785',
        paymentAmount: '103232',
        voucherImage: './src/assets/images/payment.jpg',
        paymentDate: '2020.02.02',
    },
];

function PaymentList() {
    return payments.map((payment) => {
        return <PaymentItem payment={payment} />;
    });
}

export default PaymentList;
