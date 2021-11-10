import { promiseGetUsersTHC } from "../queries/queries"

export const usersReducer = (state={}, action) => {
    if (action.type === 'SET_USERS') {
        return {
            ...state,
            users: action.users
        }
    }
    return state
}

export const setUsersAC = (users) => ({type: 'SET_USERS', users})

export const setUsersTHC = () => {
    return async (dispatch) => {
        let users = await dispatch(promiseGetUsersTHC())
        if(users) {
            dispatch(setUsersAC(users))
        }
    }
}

