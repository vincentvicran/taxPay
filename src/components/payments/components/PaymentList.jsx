import React, { Fragment, useEffect } from 'react';
import PaymentItem from '../components/PaymentItem';
import '.././shared/styles/payments.css';

import { useDispatch, useSelector } from 'react-redux';
import { getPayments } from '../../../actions/paymentAction';
import { useAlert } from 'react-alert';
import Loader from '../../.././Loader';

// const payments = [
//     {
//         __id: '1',
//         payor: 'vincy07',
//         vehicle: 'Ba.49Pa.5',
//         paymentAmount: '5045',
//         voucherImage: './src/assets/images/payment.jpg',
//         paymentDate: '2021.12.20',
//     },
//     {
//         __id: '2',
//         payor: 'danielkreig12',
//         vehicle: 'Ba.89Pa.785',
//         paymentAmount: '103232',
//         voucherImage: './src/assets/images/payment.jpg',
//         paymentDate: '2020.02.02',
//     },
// ];

function PaymentList() {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, payments } = useSelector((state) => state.payments);

    useEffect(() => {
        if (error) {
            return alert.error(error);
        }

        alert.success('Payments loaded successfully!');
        dispatch(getPayments());
    }, [dispatch, alert, error]);

    return (
        <Fragment>
            {loading ? (
                <div style={{ padding: '90px 50% 400px' }}>
                    <Loader />
                </div>
            ) : (
                payments.map((payment) => {
                    return <PaymentItem payment={payment} />;
                })
            )}
        </Fragment>
    );
}

export default PaymentList;
