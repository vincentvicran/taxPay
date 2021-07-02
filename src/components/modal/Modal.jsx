import React from 'react';
import { createPortal } from 'react-dom';
import Login from '../auth/components/Login';
import './modal.css';

function Modal(props) {
    return createPortal(
        <div className="modal">
            <div className="modalContainer">
                <div className="modalHeader">
                    <h1 className="modalTitle">Header</h1>
                    <div className="modalTopRight">Close</div>
                </div>
                {props.login && <Login />}
            </div>
        </div>,
        document.querySelector('#modal')
    );
}

export default Modal;
