import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { get, pickBy } from 'lodash'
import permissions from './permissions'
// import {updateToken}  from './request'

const getArr = (obj, ltr) => get(obj, ltr) || []

const getUser = () => {
    const storedUser = localStorage.getItem('user')
    if (!storedUser) return null

    return JSON.parse(storedUser)
}

const getPaymentCategories = () => ['ADMISSION_FEE', 'MONTHLY_FEE', 'EXAM_FEE']

const getAccessToken = () => get(getUser(), 'token')

// const updateAccessToken = () => updateToken(get(getUser(), 'token')/*getAccessToken()*/)

const getGroups = () => getArr(getUser(), 'groups')

const isStudent = () => getGroups().findIndex(_item => _item === 'STUDENT') !== -1

const isManagement = () => getGroups().findIndex(_item => _item === 'MANAGEMENT') !== -1

const isLibrarian = () => getGroups().findIndex(_item => _item === 'LIBRARIAN') !== -1

const isTeacher = () => getGroups().findIndex(_item => _item === 'TEACHER') !== -1
const isAccountant = () => getGroups().findIndex(_item => _item === 'ACCOUNTANT') !== -1

const getPermissions = (group = get(getGroups(), '0')) => {
    return get(permissions, group)
}

const month = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']

const getMonth = (i) => month[i]


const cleanObject = object =>  pickBy(object, (value, key) => !(value === undefined || value === '' || value === null))

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                !!getAccessToken() ? <Component {...props} /> : <Redirect to="/login"/>
            }
        />
    )
}

// This component can be extracted to a separate file later in the development process

class ProtectedComponents extends Component {

    render () {
        // If the user is not already logged in redirect him to the /login
        // For now I'm using getAccessToken() to check if the user is authenticated or not.
        return !!getAccessToken() ? this.props.children : <Redirect to="/login"/>
    }
}

export {
    getArr,
    month,
    getAccessToken,
    PrivateRoute,
    getGroups,
    isStudent,
    isTeacher,
    isManagement,
    isLibrarian,
    getPermissions,
    getUser,
    isAccountant,
    ProtectedComponents,
    getPaymentCategories,
    cleanObject,
    getMonth
}
