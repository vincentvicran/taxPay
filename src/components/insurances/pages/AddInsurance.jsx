import React, { Fragment, useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import AddIcon from '@material-ui/icons/Add';

import { useHistory } from 'react-router-dom';
import Loader from '../../../Loader';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

import { clearErrors, addInsurance } from '../../../actions/insuranceAction';
import { getVehicles } from '../../../actions/vehicleActions';

function AddInsurance() {
    //* make a insurance state using useState
    const [insurance, setInsurance] = useState({
        insuranceType: '',
        insuranceDOI: '',
        insuranceDOE: '',
    });
    const [vehicleId, setVehicleId] = useState(null);

    //* destructuring initialization of insurance state
    const { insuranceType, insuranceDOI, insuranceDOE } = insurance;

    //* history, dispatch, alert initialization
    const history = useHistory();
    const dispatch = useDispatch();
    const alert = useAlert();

    //* calling insurances and vehciles store from store.js using useSelector
    const { loading, error } = useSelector((state) => state.insurances);
    const { vehicles } = useSelector((state) => state.vehicles);

    //* useEffect for showing error
    useEffect(() => {
        async function fetchData() {
            // You can await here
            await dispatch(getVehicles());
        }
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        fetchData();
    }, [dispatch, alert, error]);

    var options = vehicles.map(function (vehicles, vehicle, i) {
        vehicles[i] = vehicle;
        return vehicles;
    });

    const defaultOption = options[0];
    console.log(options);

    //* submitHandler function definition
    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(addInsurance(vehicleId, insurance));
    };

    //* onChange function definition using setInsurance
    const onChange = (e) => {
        setInsurance({ ...insurance, [e.target.name]: e.target.value });
    };

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <div className="insurances">
                        <div className="insuranceBody">
                            <div className="insuranceTitle">Register your insurance</div>
                            <div className="insuranceContainer">
                                <div className="insuranceAdd">
                                    <form className="insuranceAddForm">
                                        <div className="insuranceAddLeft">
                                            <div className="insuranceAddItem">
                                                <label className="insuranceShowTitle">Vehicle Number</label>

                                                <Dropdown
                                                    options={options.vehicleNumber}
                                                    name="vehicleNumber"
                                                    onChange={(e) => {
                                                        setVehicleId({
                                                            ...vehicleId,
                                                            [e.target.name]: [e.target.value],
                                                        });
                                                    }}
                                                    value={defaultOption.vehicleId}
                                                    placeholder="Select any vehicle number..."
                                                />
                                            </div>
                                            <div className="insuranceAddItem">
                                                <label className="insuranceShowTitle">Insurance Type</label>
                                                <input
                                                    type="text"
                                                    placeholder="Third Party"
                                                    className="insuranceAddInput"
                                                    name="insuranceType"
                                                    value={insuranceType}
                                                    onChange={onChange}
                                                />
                                            </div>
                                            <div className="insuranceAddItem">
                                                <label className="insuranceShowTitle">Date of Issue</label>
                                                <input
                                                    type="date"
                                                    className="insuranceAddInput"
                                                    name="insuranceDOI"
                                                    value={insuranceDOI}
                                                    onChange={onChange}
                                                />
                                            </div>
                                            <div className="insuranceAddItem">
                                                <label className="insuranceShowTitle">Date of Expiry</label>
                                                <input
                                                    type="date"
                                                    className="insuranceAddInput"
                                                    name="insuranceDOE"
                                                    value={insuranceDOE}
                                                    onChange={onChange}
                                                />
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
                </Fragment>
            )}
        </Fragment>
    );
}

export default AddInsurance;
