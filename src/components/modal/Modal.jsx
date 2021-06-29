import React from 'react';
import { createPortal } from 'react-dom';

function Modal() {
    return createPortal(
        <div className="modal">
            <div className="modalContainer">
                <div className="modalHeader">
                    <h1 className="modalTitle">Header</h1>
                    <div className="modalTopRight">Close</div>
                </div>
                <div className="modalBody">Body</div>
                <div className="modalFooter">Footer</div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
}

export default Modal;
