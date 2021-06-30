import React from 'react';
import { EventAvailableOutlined, EventBusyOutlined, EditSharp, Receipt } from '@material-ui/icons';
import '.././shared/styles/insurances.css';

function InsuranceItem({ insurance }) {
    if (insurance.length !== 0) {
        return (
            <div className="insuranceShow">
                <span className="insuranceShowTitle">Insurance Type</span>
                <div className="insuranceShowInfo">
                    <Receipt className="insuranceShowIcon" />
                    <span className="insuranceShowInfoTitle">{insurance.insuranceType}</span>
                </div>
                <span className="insuranceShowTitle">Date of Issue</span>
                <div className="insuranceShowInfo">
                    <EventAvailableOutlined className="insuranceShowIcon" />
                    <span className="insuranceShowInfoTitle">{insurance.insuranceDOI}</span>
                </div>
                <span className="insuranceShowTitle">Date of Expiry</span>
                <div className="insuranceShowInfo">
                    <EventBusyOutlined className="insuranceShowIcon" />
                    <span className="insuranceShowInfoTitle">{insurance.insuranceDOE}</span>
                </div>
                <div className="insuranceEditBottom">
                    <EditSharp />
                    <button className="insuranceEditButton">Edit</button>
                </div>
            </div>
        );
    }
}

export default InsuranceItem;
