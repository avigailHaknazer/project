import {saveData} from '../actions'

 const crudFunctions = ({ dispatch, getState }) => next => action => {
    switch (action.type) {
        case 'SAVE_DATA':
            debugger
            fetch('http://localhost:3000/saveData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload)
            })
                .then((response) => {
                    return response.json()
                })
                .then((result) => {
                    dispatch(saveData(result.data))
                })
            break;

        case 'GET_ALL_DATA':
            fetch('http://localhost:3000/getAllData',
                { method: 'GET' }
            ).then((response) => {
                console.log(response);
                return response.json()
            }).then((result) => {
                console.log(result);
                return result
            }).catch((error) => {
                console.log(error);
            })
            break;
        default:
            break;
    }
    return next(action);
}

export default crudFunctions