import React from 'react';
import { PermIdentity, Ballot, EventAvailable, Image, AttachMoney } from '@material-ui/icons';
import '.././shared/styles/payments.css';

function PaymentItem({ payment }) {
    if (payment.length !== 0) {
        return (
            <div className="paymentShow">
                <span className="paymentShowTitle">Payor</span>
                <div className="paymentShowInfo">
                    <PermIdentity className="paymentShowIcon" />
                    <span className="paymentShowInfoTitle">{payment.payor.userName}</span>
                </div>
                <span className="paymentShowTitle">Vehicle Number</span>
                <div className="paymentShowInfo">
                    <Ballot className="paymentShowIcon" />
                    <span className="paymentShowInfoTitle">{payment.vehicle.vehicleNumber}</span>
                </div>
                <span className="paymentShowTitle">Amount</span>
                <div className="paymentShowInfo">
                    <AttachMoney className="paymentShowIcon" />
                    <span className="paymentShowInfoTitle">{payment.paymentAmount}</span>
                </div>

                <span className="paymentShowTitle">Bank Voucher Image</span>
                <div className="paymentShowInfo">
                    <Image className="paymentShowIcon" />
                    <img src={payment.voucherImage} alt="" className="paymentShowImg" />
                </div>
                <span className="paymentShowTitle">Payment Date</span>
                <div className="paymentShowInfo">
                    <EventAvailable className="paymentShowIcon" />
                    <span className="paymentShowInfoTitle">{payment.paymentDate}</span>
                </div>
                {/* <div className="paymentEditBottom">
                    <EditSharp />
                    <button className="paymentEditButton">Edit</button>
                </div> */}
            </div>
        );
    }
}

export default PaymentItem;
