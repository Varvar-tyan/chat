import {promiseGetChatMessagesTHC} from '../queries/queries';

export const messagesReducer = (state={}, action) => {
    if (action.type === 'SET_MESSAGES') {
        return {
            ...state,
            messages: action.messages
        }
    }
    return state
}

export const setMessagesAC = (messages) => ({type: 'SET_MESSAGES', messages})

export const setMessagesTHC = (chatId) => {
    return async (dispatch) => {
        let messages = await dispatch(promiseGetChatMessagesTHC(chatId))
        if(messages) {
            return dispatch(setMessagesAC(messages))
        }
    }
}