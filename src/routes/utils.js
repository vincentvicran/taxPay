import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://tax-pay.herokuapp.com/api/v1',
});
