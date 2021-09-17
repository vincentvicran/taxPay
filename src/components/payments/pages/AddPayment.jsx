import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import { Publish } from '@material-ui/icons';
import paymentImage from '../../.././assets/images/payment.jpg';

import { useHistory } from 'react-router-dom';
import Loader from '../../../Loader';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

import { getPayments, clearErrors, addPayment } from '../../../actions/paymentAction';

function AddPayment() {
    //* make a insurance state using useState
    const [paymentAmount, setPaymentAmount] = useState('');
    const [vehicles, setVehicles] = useState([]);
    const [vehicleId, setVehicleId] = useState(null);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    //* history, dispatch, alert initialization
    const history = useHistory();
    const dispatch = useDispatch();
    const alert = useAlert();

    //* calling insurances and vehciles store from store.js using useSelector
    const { loading, error } = useSelector((state) => state.payments);

    //* useEffect for showing error
    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await axios.get('api/v1/vehicles');
            // console.log(response.data.vehicles);
            setVehicles(response.data.vehicles);
        }
        fetchData();
        if (error) {
            alert.error(error);
            history.push('/addpayment');
            dispatch(clearErrors());
        }
    }, [dispatch, alert, history, error]);

    //* submitHandler function definition
    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(addPayment(vehicleId, paymentAmount));

        if (error) {
            alert.error(error);
            history.push('/addpayment');
        } else {
            alert.success('Payment added successfully!');
            setPaymentAmount([]);
            dispatch(getPayments());
        }
    };

    //* onChange function definition using setInsurance
    const onChange = (e) => {
        setPaymentAmount({ [e.target.name]: [e.target.value] });
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
                    <div className="payments">
                        <div className="paymentBody">
                            <div className="paymentTitle">Register your payment</div>
                            <div className="paymentContainer">
                                <div className="paymentAdd">
                                    <form className="paymentAddForm">
                                        <div className="paymentAddLeft">
                                            <div className="paymentAddItem">
                                                <label className="paymentShowTitle">Vehicle Number</label>
                                                <input
                                                    type="text"
                                                    placeholder="Ba.48Pa.23"
                                                    className="paymentAddInput"
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
                                            <div className="paymentAddItem">
                                                <label className="paymentShowTitle">Payment Amount</label>
                                                <input
                                                    type="text"
                                                    placeholder="Rs.4000"
                                                    className="paymentAddInput"
                                                    name="paymentAmount"
                                                    value={paymentAmount}
                                                    onChange={onChange}
                                                />
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
                </Fragment>
            )}
        </Fragment>
    );
}

export default AddPayment;
