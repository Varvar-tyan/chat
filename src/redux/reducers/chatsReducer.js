import { promiseChatByIdTHC, promiseGetChatsTHC} from '../queries/queries';

export const chatsReducer = (state={}, action) => {
    if (action.type === 'SET_CHATS') {
        return {
            ...state,
            chats: action.chats
        }
    }
    if (action.type === 'SET_CHAT') {
        return {
            ...state,
            currentChat: action.chat
        }
    }
    return state
}

const setChatsAC = (chats) => ({type: 'SET_CHATS', chats})
const setChatAC = (chat) => ({type: 'SET_CHAT', chat})

export const setChatsTHC = (myId) => {
    return async (dispatch) => {
        let chats = await dispatch(promiseGetChatsTHC(myId))
        if(chats) {
            dispatch(setChatsAC(chats))
        }
    }
}

export const setChatTHC = (id) => {
    return async (dispatch) => {
        let currentChat = await dispatch(promiseChatByIdTHC(id))
        if (currentChat) {
            dispatch(setChatAC(currentChat))
        }
    }
}
