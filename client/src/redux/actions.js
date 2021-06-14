export function saveData(newUser) {
    return { type: 'SAVE_DATA', payload: newUser }
}

export function getAllData() {
    return {type:'GET_ALL_DATA'}
}