import React, { Fragment, useState, useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';

import { useHistory } from 'react-router-dom';
import Loader from '../../../Loader';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

function AddInsurance() {
    // //* make a insurance state using useState
    // const [insurance, setInsurance] = useState({
    //     insuranceType: '',
    //     insuranceDOI: '',
    //     insuranceDOE: '',
    // });

    // //* destructuring initialization of insurance state
    // const { insuranceType, insuranceDOI, insuranceDOE } = insurance;

    // //* history, dispatch, alert initialization
    // const history = useHistory();
    // const dispatch = useDispatch();
    // const alert = useAlert();

    // //* calling insurances store from the store.js using useSelector
    // const { loading, error } = useSelector((state) => state.insurances);

    // //* useEffect for showing error
    // useEffect(() => {
    //     if (error) {
    //         alert.error(error);

    //         dispatch(clearErrors());
    //     }
    // }, []);

    // //* submitHandler function definition
    // const submitHandler = (e) => {
    //     e.preventDefault();

    //     dispatch(addInsurance());
    // };

    //* onChange function definition using setInsurance

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
