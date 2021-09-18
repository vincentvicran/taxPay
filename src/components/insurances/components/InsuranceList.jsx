import React, { Fragment, useEffect } from 'react';
import InsuranceItem from '../components/InsuranceItem';
import '.././shared/styles/insurances.css';

import { useDispatch, useSelector } from 'react-redux';
import { getInsurances } from '../../../actions/insuranceAction';
import { useAlert } from 'react-alert';

import Loader from '../../.././Loader';

function InsuranceList() {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, insurances } = useSelector((state) => state.insurances);

    useEffect(() => {
        if (error) {
            return alert.error(error);
        }

        alert.success('Insurances loaded successfully!');
        dispatch(getInsurances());
    }, [dispatch, alert, error]);

    //! condition?true:false
    return (
        <Fragment>
            {loading ? (
                <div style={{ padding: '90px 50% 400px' }}>
                    <Loader />
                </div>
            ) : (
                insurances.map((insurance) => {
                    return <InsuranceItem insurance={insurance} key={insurance._id} />;
                })
            )}
        </Fragment>
    );
}

export default InsuranceList;
