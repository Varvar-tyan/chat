import { promiseGetUsersTHC, promiseUserByIdTHC } from "../queries/queries"

export const usersReducer = (state={}, action) => {
    if (action.type === 'SET_USERS') {
        return {
            ...state,
            users: action.users
        }
    }
    if (action.type === 'SET_MY_PROFILE') {
        return {
            ...state,
            myProfile: action.myProfile
        }
    }
    return state
}

export const setUsersAC = (users) => ({type: 'SET_USERS', users})
const setMyProfileAC = (myProfile) => ({type: 'SET_MY_PROFILE', myProfile})

export const setUsersTHC = () => {
    return async (dispatch) => {
        let users = await dispatch(promiseGetUsersTHC())
        if(users) {
            dispatch(setUsersAC(users))
        }
    }
}

export const setMyProfileTHC = (myId) => {
    return async (dispatch) => {
        let myProfile = await dispatch(promiseUserByIdTHC(myId))

        if (myProfile) {
            dispatch(setMyProfileAC(myProfile))
        }
    }
}
