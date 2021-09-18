import React, { Fragment, useState, useEffect } from 'react';
import { axiosInstance } from '../../../routes/utils';
import AddIcon from '@material-ui/icons/Add';

import { useHistory } from 'react-router-dom';
import Loader from '../../../Loader';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

import { clearErrors, addInsurance, getInsurances } from '../../../actions/insuranceAction';

function AddInsurance() {
    //* make a insurance state using useState
    const [insurance, setInsurance] = useState({
        insuranceType: '',
        insuranceDOI: '',
        insuranceDOE: '',
    });
    const [vehicles, setVehicles] = useState([]);
    const [vehicleId, setVehicleId] = useState(null);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    //* destructuring initialization of insurance state
    const { insuranceType, insuranceDOI, insuranceDOE } = insurance;

    //* history, dispatch, alert initialization
    const history = useHistory();
    const dispatch = useDispatch();
    const alert = useAlert();

    //* calling insurances and vehciles store from store.js using useSelector
    const { loading, error } = useSelector((state) => state.insurances);
    // const { vehicles } = useSelector((state) => state.vehicles);

    //* useEffect for showing error
    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await axiosInstance.get('/vehicles');
            // console.log(response.data.vehicles);
            setVehicles(response.data.vehicles);
        }
        fetchData();
        if (error) {
            alert.error(error);
            history.push('/gov/addinsurance');
            dispatch(clearErrors());
        }
    }, [dispatch, alert, history, error]);

    //* submitHandler function definition
    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(addInsurance(vehicleId, insurance));

        if (error) {
            alert.error(error);
            history.push('/addinsurance');
        } else if (error === null) {
            alert.success('Insurance added successfully!');
            setInsurance([]);
            dispatch(getInsurances());
        }
    };

    //* onChange function definition using setInsurance
    const onChange = (e) => {
        setInsurance({ ...insurance, [e.target.name]: e.target.value });
    };

    const onChangeHandler = (text) => {
        let matches = [];

        if (text.length > 0) {
            matches = vehicles.filter((veh) => {
                const regex = new RegExp(`${text}`, 'gi');
                return veh.vehicleNumber.match(regex);
            });
        }

        setSuggestions(matches);
        setText(text);
    };

    const onSuggestHandler = (text, vehicleInfo) => {
        setText(text);
        setVehicleId(vehicleInfo);
        setSuggestions([]);
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
                                                <input
                                                    type="text"
                                                    placeholder="Third Party"
                                                    className="insuranceAddInput"
                                                    name="vehicleNumber"
                                                    value={text}
                                                    onChange={(e) => onChangeHandler(e.target.value)}
                                                />
                                                {suggestions &&
                                                    suggestions.map((suggestions, i) => (
                                                        <div
                                                            key={i}
                                                            className="suggestions"
                                                            onClick={() =>
                                                                onSuggestHandler(
                                                                    suggestions.vehicleNumber,
                                                                    suggestions._id
                                                                )
                                                            }
                                                        >
                                                            {suggestions.vehicleNumber}
                                                        </div>
                                                    ))}
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
                                            <button className="insuranceAddButton" onClick={submitHandler}>
                                                Add
                                            </button>
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
