import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Publish } from '@material-ui/icons';
import paymentImage from '../../.././assets/images/payment.jpg';

function AddPayment() {
    return (
        <div className="payments">
            <div className="paymentBody">
                <div className="paymentTitle">Register your payment</div>
                <div className="paymentContainer">
                    <div className="paymentAdd">
                        <form className="paymentAddForm">
                            <div className="paymentAddLeft">
                                <div className="paymentAddItem">
                                    <label className="paymentShowTitle">Payor</label>
                                    <input type="text" placeholder="Vikrant Shrestha" className="paymentAddInput" />
                                </div>
                                <div className="paymentAddItem">
                                    <label className="paymentShowTitle">Vehicle Number</label>
                                    <input type="text" placeholder="Ba.48Pa.23" className="paymentAddInput" />
                                </div>
                                <div className="paymentAddItem">
                                    <label className="paymentShowTitle">Payment Amount</label>
                                    <input type="text" placeholder="Rs.4000" className="paymentAddInput" />
                                </div>
                            </div>
                            <div className="paymentAddRight">
                                <div className="paymentUploadImg">
                                    <label className="paymentShowTitle">Bank Voucher</label>

                                    <img src={paymentImage} alt="" className="paymentShowImg" />
                                    <label htmlFor="file">
                                        <Publish className="paymentUploadIcon" />
                                    </label>
                                    <input type="file" id="file" style={{ display: 'none' }} />
                                </div>
                            </div>
                            <div className="paymentAddBottom">
                                <AddIcon />
                                <button className="paymentAddButton">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPayment;
