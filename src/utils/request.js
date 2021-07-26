import axios from 'axios';

const url = {
    base: 'http://localhost:3300/api/v1',
};

const headers = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
    },
};

const axiosFormDataConfig = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
    },
};

const updateToken = (token) => (headers.headers.token = token);

function getConfig(header = {}) {
    //*To add custom header for some request
    const config = { ...headers }; //!:TODO when redo check file upload also
    config.headers = { ...config.headers, ...header };
    return config;
}

const request = {
    get: (path, header = {}) => axios.get(url.base + path, getConfig(header)),

    delete: (path, header = {}) => axios.delete(url.base + path, getConfig(header)),

    post: (path, data, header = {}) => axios.post(url.base + path, data, getConfig(header)),

    patch: (path, data, header = {}) => axios.patch(url.base + path, data, getConfig(header)),

    put: (path, data, header = {}) => axios.put(url.base + path, data, getConfig(header)),

    // postFormData: function (url, data) {
    //     return axios.post(`${config.apiEndpoint + url}`, data, axiosFormDataConfig);
    // },

    putFormData: function (path, data) {
        return axios.put(url.base + path, data, axiosFormDataConfig);
    },
};

export { request, updateToken };
