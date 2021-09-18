import React from 'react';
import '.././shared/styles/payments.css';
import AddIcon from '@material-ui/icons/Add';

import { Link } from 'react-router-dom';
import PaymentList from '../components/PaymentList';

export function Payments() {
    return (
        <div className="payments">
            <div className="paymentBody">
                <div className="paymentTitle">Payments</div>
                <div className="paymentContainer">
                    <PaymentList />
                    <Link to="/gov/addpayment" className="paymentAddNew">
                        <AddIcon />
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Payments;
