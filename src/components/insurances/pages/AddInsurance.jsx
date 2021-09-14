import React from 'react';
import AddIcon from '@material-ui/icons/Add';

function AddInsurance() {
    return (
        <div className="insurances">
            <div className="insuranceBody">
                <div className="insuranceTitle">Register your insurance</div>
                <div className="insuranceContainer">
                    <div className="insuranceAdd">
                        <form className="insuranceAddForm">
                            <div className="insuranceAddLeft">
                                <div className="insuranceAddItem">
                                    <label className="insuranceShowTitle">Payor</label>
                                    <input type="text" placeholder="Vikrant Shrestha" className="insuranceAddInput" />
                                </div>
                                <div className="insuranceAddItem">
                                    <label className="insuranceShowTitle">Vehicle Number</label>
                                    <input type="text" placeholder="Ba.48Pa.23" className="insuranceAddInput" />
                                </div>
                                <div className="insuranceAddItem">
                                    <label className="insuranceShowTitle">Insurance Type</label>
                                    <input type="text" placeholder="Third Party" className="insuranceAddInput" />
                                </div>
                                <div className="insuranceAddItem">
                                    <label className="insuranceShowTitle">Date of Issue</label>
                                    <input type="date" className="insuranceAddInput" />
                                </div>
                                <div className="insuranceAddItem">
                                    <label className="insuranceShowTitle">Date of Expiry</label>
                                    <input type="date" className="insuranceAddInput" />
                                </div>
                            </div>
                            <div className="insuranceAddBottom">
                                <AddIcon />
                                <button className="insuranceAddButton">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddInsurance;
