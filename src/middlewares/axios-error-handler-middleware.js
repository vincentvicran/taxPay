import isPromise from 'is-promise';
// import _ from 'lodash'

const isAxiosRequest = function (action) {
    return action.payload && action.type;
};

const errorHandler = function (error) {
    // if(error.response.status > 200){ // Not an OK Response
    //
    //
    // } else
    if (error.response) {
        // TODO add some way to notify users, like toast or notification
        // The request was made and the server responded with a status code
        if (error.response.status === 401) {
            console.log('Unauthenticated response');
            // TODO Somehow redirect to logging page and clear the local storage
            // localStorage.clear()
        } else if (error.response.status >= 500) {
            console.log('Internal Server Error');
        }
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        // Probbly HTTP Error, Internet connection lost or some kind of scenario
        console.error('Error', error.message);
    }
    return error;
};

export default function axiosErrorHandlerMiddleware() {
    return (next) => (action) => {
        // TODO Types that we want to allow
        // This can narrow down
        // const types = {
        // TODO Somehow import all of the action types
        //     FOO: true,
        // }

        // If not a promise, continue on
        if (!isPromise(action.payload)) {
            return next(action);
        }

        /*
         * Another solution would would be to include a property in `meta`
         * and evaluate that property.
         *
         * if (action.meta.globalError === true) {
         *   // handle error
         * }
         *
         * The error middleware serves to dispatch the initial pending promise to
         * the promise middleware, but adds a `catch`.
         */
        // TODO uncomment the following lines to check the types
        if (isAxiosRequest(action) /* && _.has(types, action.type)*/) {
            // Dispatch initial pending promise, but catch any errors
            return next(action).catch((error) => errorHandler(error));
        }

        return next(action);
    };
}
