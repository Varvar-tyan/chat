import { promiseChangeAvatarTHC, promiseGetUsersTHC, promiseUploadFile, promiseUserByIdTHC } from "../queries/queries"

export const usersReducer = (state={usersSkip: 0}, action) => {
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
    if (action.type === 'SET_USERS_SKIP') {
        return {
            ...state,
            usersSkip: action.skip
        }
    }
    if (action.type === 'SET_TOTAL_USERS_COUNT') {
        return {
            ...state,
            totalUsersCount: action.count
        }
    }
    return state
}

export const setUsersAC = (users) => ({type: 'SET_USERS', users})
export const setMyProfileAC = (myProfile) => ({type: 'SET_MY_PROFILE', myProfile})
export const setUsersSkip = (skip) => ({type: 'SET_USERS_SKIP', skip})
export const setTotalUsersCount = (count) => ({type: 'SET_TOTAL_USERS_COUNT', count})

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

export const setAvatarTHC = (file, myId)=> {
    return async (dispatch) => {
      let result = await dispatch(promiseUploadFile(file))
  
      if (result?._id) {
        await dispatch(promiseChangeAvatarTHC(result._id, myId))
        await dispatch(setMyProfileTHC(myId))
      }
    }
  }
