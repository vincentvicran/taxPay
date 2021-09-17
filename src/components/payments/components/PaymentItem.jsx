import React, { useState, useEffect } from 'react';
import { PermIdentity, Ballot, EventAvailable, Image, AttachMoney } from '@material-ui/icons';
import '.././shared/styles/payments.css';

import { Modal } from 'react-bootstrap';

import axios from 'axios';

function PaymentItem({ payment }) {
    const [image, setImage] = useState(undefined);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        async function fetchData() {
            await axios.get(payment.voucherImage, { responseType: 'blob' }).then((res) => {
                var imageUrl = URL.createObjectURL(res.data);
                setImage(imageUrl);
            });
        }
        fetchData();
    }, [payment.voucherImage]);

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
                    <img src={image} alt="" className="paymentShowImg" onClick={handleShow} />
                    <Modal show={show} onClick={handleClose} className="modalBootstrap">
                        <Modal.Header className="modalHeader">
                            <Modal.Title className="modalTitle">Voucher Image</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className="modalBody">
                            <img src={image} alt="" className="modalShowImg" />
                        </Modal.Body>

                        <Modal.Footer>
                            <div className="modalFooter">Click anywhere to close!</div>
                        </Modal.Footer>
                    </Modal>
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
