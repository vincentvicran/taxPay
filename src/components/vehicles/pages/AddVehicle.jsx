import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

import Loader from '../../../Loader';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { addVehicle, clearErrors, getVehicles } from '../../../actions/vehicleActions';

function AddVehicle() {
    const [vehicle, setVehicle] = useState({
        ownerName: '',
        vehicleRegistrationDate: '',
        vehicleType: '',
        vehicleNumber: '',
        engineCapacity: '',
        latestPaymentDate: '',
    });

    const { ownerName, vehicleRegistrationDate, vehicleType, vehicleNumber, engineCapacity, latestPaymentDate } =
        vehicle;

    const history = useHistory();
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error } = useSelector((state) => state.vehicles);

    useEffect(() => {
        if (error) {
            alert.error(error);

            dispatch(clearErrors());
        }
    }, [dispatch, alert, error]);

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(addVehicle(vehicle));

        if (error) {
            alert.error(error);
            history.push('/gov/addvehicle');
        } else {
            alert.success('Vehicle added successfully!');
            setVehicle([]);
            dispatch(getVehicles());
        }
    };

    const onChange = (e) => {
        console.log(e.target.name);
        setVehicle({ ...vehicle, [e.target.name]: e.target.value });
    };

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <div className="vehicles">
                        <div className="vehicleBody">
                            <div className="vehicleTitle">Register your vehicle</div>
                            <div className="vehicleContainer">
                                <div className="vehicleAdd">
                                    <form className="vehicleAddForm">
                                        <div className="vehicleAddLeft">
                                            <div className="vehicleAddItem">
                                                <label className="vehicleShowTitle">Vehicle Owner Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="Vikrant Shrestha"
                                                    className="vehicleAddInput"
                                                    name="ownerName"
                                                    value={ownerName}
                                                    onChange={onChange}
                                                />
                                            </div>
                                            <div className="vehicleAddItem">
                                                <label className="vehicleShowTitle">Vehicle Type</label>
                                                <input
                                                    type="text"
                                                    placeholder="Two Wheeler"
                                                    className="vehicleAddInput"
                                                    name="vehicleType"
                                                    value={vehicleType}
                                                    onChange={onChange}
                                                />
                                            </div>
                                            <div className="vehicleAddItem">
                                                <label className="vehicleShowTitle">Vehicle Registration Date</label>
                                                <input
                                                    type="date"
                                                    className="vehicleAddInput"
                                                    name="vehicleRegistrationDate"
                                                    value={vehicleRegistrationDate}
                                                    onChange={onChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="vehicleAddRight">
                                            <div className="vehicleAddItem">
                                                <label className="vehicleShowTitle">Vehicle Number</label>
                                                <input
                                                    type="text"
                                                    placeholder="Ba.49Pa.5"
                                                    className="vehicleAddInput"
                                                    name="vehicleNumber"
                                                    value={vehicleNumber}
                                                    onChange={onChange}
                                                />
                                            </div>
                                            <div className="vehicleAddItem">
                                                <label className="vehicleShowTitle">Engine Capacity</label>
                                                <input
                                                    type="text"
                                                    placeholder="150"
                                                    className="vehicleAddInput"
                                                    name="engineCapacity"
                                                    value={engineCapacity}
                                                    onChange={onChange}
                                                />
                                            </div>
                                            <div className="vehicleAddItem">
                                                <label className="vehicleShowTitle">Latest Payment Date</label>
                                                <input
                                                    type="date"
                                                    className="vehicleAddInput"
                                                    name="latestPaymentDate"
                                                    value={latestPaymentDate}
                                                    onChange={onChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="vehicleAddBottom">
                                            <AddIcon />
                                            <button className="vehicleAddButton" onClick={submitHandler}>
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
export default AddVehicle;
