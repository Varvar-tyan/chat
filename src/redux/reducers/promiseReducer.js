export function promiseReducer(state={}, action) {
    if (action.type === 'PROMISE') {
        return {
            ...state,
            [action.name]:{status: action.status, payload: action.payload, error: action.error}
        }
    }
    return state
}

const pendingAC = name => ({type: 'PROMISE', status: 'PENDING', name})
const resolvedAC = (name, payload) => ({type: 'PROMISE', status: 'RESOLVED', name, payload})
const rejectedAC = (name, error) => ({type: 'PROMISE', status: 'REJECTED', name, error})

export const promiseTHC = (name, promise) => {
    return async (dispatch) => {
        dispatch(pendingAC(name))
        try {
            let payload = await promise
            dispatch(resolvedAC(name, payload))
            return payload
        }
        catch(error){
            dispatch(rejectedAC(name, error))
        }
    }
}
