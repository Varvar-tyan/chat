import { promiseGetChatsTHC} from '../queries/queries';

export const chatsReducer = (state={}, action) => {
    if (action.type === 'SET_CHATS') {
        return {
            ...state,
            chats: action.chats
        }
    }
    return state
}

const setChatsAC = (chats) => ({type: 'SET_CHATS', chats})

export const setChatsTHC = (myId) => {
    return async (dispatch) => {
        let chats = await dispatch(promiseGetChatsTHC(myId))
        if(chats) {
            dispatch(setChatsAC(chats))
        }
    }
}
