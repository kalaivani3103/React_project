//pure java script reducer code
const { createStore, combineReducers } = require('redux')

const BUY_BOOK = 'BUY_BOOK'
const BUY_PEN = 'BUY_PEN'

//we can combine the initial state like inside combination of numberof books and number of pen.
//store
const initialBookState = {
    numOfBooks: 100
}

const initialPenState = {
    numOfPen: 100
}

//action
const buyBook = () => {
    return {
        type: BUY_BOOK
    }
}
const buyPen = () => {
    return {
        type: BUY_PEN
    }
}

//reducer
const bookReducer = (state = initialBookState, action) => {
    switch (action.type) {
        case BUY_BOOK:
            return {
                numOfBooks: state.numOfBooks - 1
            }
        default:
            return state
    }
}

const penReducer = (state = initialPenState, action) => {
    switch (action.type) {
        case BUY_PEN:
            return {
                numOfPen: state.numOfPen - 1
            }
        default:
            return state
    }
}
//single reducer
// const store = createStore(bookReducer)
// console.log(store)

//multiple reducer
const rootReducer = combineReducers({ bookReducer, penReducer })
const store = createStore(rootReducer)

store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(buyBook())
store.dispatch(buyBook())
store.dispatch(buyBook())
store.dispatch(buyPen())
store.dispatch(buyPen())
//above simple pure java script redux code.