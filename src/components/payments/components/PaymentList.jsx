import React, { Fragment, useEffect } from 'react';
import PaymentItem from '../components/PaymentItem';
import '.././shared/styles/payments.css';

import { useDispatch, useSelector } from 'react-redux';
import { getPayments } from '../../../actions/paymentAction';
import { useAlert } from 'react-alert';
import Loader from '../../.././Loader';

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

    //! condition?true:false
    return (
        <Fragment>
            {loading ? (
                <div style={{ padding: '90px 50% 400px' }}>
                    <Loader />
                </div>
            ) : (
                payments.map((payment) => {
                    return <PaymentItem payment={payment} key={payment._id} />;
                })
            )}
        </Fragment>
    );
}

export default PaymentList;
