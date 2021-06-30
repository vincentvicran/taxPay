import axios from 'axios';

export default axios.create({
    baseURL: 'https://vehicle-tax-system.herokuapp.com/',
    headers: {
        'Content-type': 'application/json',
    },
});
