//pure java script
const redux = require('redux')
const { createStore, applyMiddleware } = require('redux')
const thunkMiddleware = require('redux-thunk').thunk
const axios = require('axios')
const initialState = {
    loading: false,
    users: [],
    error: ''
}
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'
//action
const fetchUsersRequests = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        data: users
    }
}
const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        data: error
    }
}

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequests())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                dispatch(fetchUsersSuccess())
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error.message))
            })

    }
}
//reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return { ...state, loading: true }
        case FETCH_USERS_SUCCESS:
            return { loading: false, users: action.data, error: '' }
        case FETCH_USERS_FAILURE:
            return { loading: false, users: [], error: action.data }
        default:
            return false
    }
}


//store
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(fetchUsers())
