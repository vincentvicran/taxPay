import axios from 'axios';

export default axios.create({
    baseURL: 'https://tax-pay.herokuapp.com/',
    headers: {
        'Content-type': 'application/json',
    },
});
