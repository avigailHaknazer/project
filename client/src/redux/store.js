import produce from "immer"
import { applyMiddleware, createStore } from "redux";
import crudFunctions from './middleware/crud'

const initialState = {
    currentUser:{},
    users: []
}

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SAVE_DATA':
            { state.users.push(action.payload) }
            break;
        case 'GET_ALL_DATA':
            { return state.users }
        default:
            break;
    }
}, initialState)


const store=createStore(reducer,applyMiddleware(crudFunctions))
window.store=reducer 
export default store