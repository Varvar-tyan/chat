import { promiseChangeAvatarTHC, promiseGetTotalUsersCount, promiseGetUsersTHC, promiseUploadFile, promiseUserByIdTHC } from "../queries/queries"

export const usersReducer = (state={usersSkip: 0}, action) => {
    if (action.type === 'SET_USERS') {
        return {
            ...state,
            users: action.users
        }
    }
    if (action.type === 'LOAD_MORE_USERS') {
        return {
            ...state,
            users: [...state.users, ...action.users]
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
export const setUsersSkipAC = (skip) => ({type: 'SET_USERS_SKIP', skip})
export const setTotalUsersCountAC = (count) => ({type: 'SET_TOTAL_USERS_COUNT', count})
export const loadMoreUsersAC = (users) => ({type: 'LOAD_MORE_USERS', users})

export const setUsersTHC = (skip) => {
    return async (dispatch) => {
        let users = await dispatch(promiseGetUsersTHC(skip))
        if(users) {
            dispatch(setUsersAC(users))
            dispatch(setUsersSkipAC(users.length))
        }
    }
}

export const setTotalUsersCountTHC = () => {
    return async (dispatch) => {
        let usersCount = await dispatch(promiseGetTotalUsersCount())
        if (usersCount) {
            dispatch(setTotalUsersCountAC(usersCount))
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

export const setAvatarTHC = (file, myId) => {
    return async (dispatch) => {
      let result = await dispatch(promiseUploadFile(file))
  
      if (result?._id) {
        await dispatch(promiseChangeAvatarTHC(result._id, myId))
        await dispatch(setMyProfileTHC(myId))
      }
    }
}

export const loadMoreUsersTHC = (usersSkip) => {
    return async (dispatch) => {
        let users = await dispatch(promiseGetUsersTHC(usersSkip))

        if (users) {
            dispatch(setUsersSkipAC(+usersSkip + users.length))
            dispatch(loadMoreUsersAC(users))
        }
    }
}

