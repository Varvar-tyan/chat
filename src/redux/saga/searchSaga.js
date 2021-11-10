import { takeLatest, put, select } from 'redux-saga/effects';
import { chatGQL } from '../queries/queries';
import { setChatsAC } from '../reducers/chatsReducer';
import { setUsersAC } from '../reducers/usersReducer';

const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))

export const actionSearchChats = text => ({type: 'SEARCH_CHATS', text})

function* searchChatsWorker({text}){
    yield put(setChatsAC(null))
    yield delay(1500) 
    let payload = yield chatGQL(`query findChats($id:String){
        ChatFind(query: $id){
          _id createdAt lastModified title members {_id login} owner {_id login} messages {_id createdAt}
        }
      }`, {ChatFind: '', 
      id: JSON.stringify([
        {"members._id": yield select((state) => state.auth.payload.sub.id), title: `/${text}/`},
        {sort: [{lastModified: -1}]}
        ])
}) 
    yield put(setChatsAC(payload)) 
}

export function* searchChatsCheck() {
    yield takeLatest('SEARCH_CHATS', searchChatsWorker)
}

export const actionSearchUsers = text => ({type: 'SEARCH_USERS', text})

function* searchUsersWorker({text}){
    yield put(setUsersAC(null))
    yield delay(1500) 
    let payload = yield chatGQL(`query findUsers($query:String){
      UserFind(query: $query){
        _id login nick avatar {
          _id url
        }
      }
    }`, {UserFind: '', 
      query: JSON.stringify([
        {login: `/${text}/`}
        ])
}) 
    yield put(setUsersAC(payload)) 
}

export function* searchUsersCheck() {
    yield takeLatest('SEARCH_USERS', searchUsersWorker)
}