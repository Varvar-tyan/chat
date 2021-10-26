import { promiseLoginTHC } from "../queries/queries"

const jwt_decode = (jwt) => {
    let payload = jwt.split('.')
    return JSON.parse(atob(payload[1]))
}

export function authReducer(state, action={}) {
    if (state === undefined){
        if (localStorage.authToken) {
            action.jwt = localStorage.authToken
            return {token: action.jwt, payload: jwt_decode(action.jwt), isLoggedIn: true}
        }
        return {}
    }
    if (action.type === 'LOGIN') {
        console.log('ЛОГИН')
        localStorage.authToken = action.jwt
        return {token: action.jwt, payload: jwt_decode(action.jwt), isLoggedIn: true}
    }
    if (action.type === 'LOGOUT') {
        console.log('ЛОГАУТ')
        delete localStorage.authToken
        return {}
    }
    return state
}

const loginAC = (jwt) => ({type: 'LOGIN', jwt})
const logoutAC = () => ({type: 'LOGOUT'})

export const loginTHC = (login, password) => {
    return async (dispatch) => {
        let jwt = await dispatch(promiseLoginTHC(login, password))
        if (jwt) {
            dispatch(loginAC(jwt))
        }
    }
}
    