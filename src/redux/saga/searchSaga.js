import { takeLatest, put, select } from 'redux-saga/effects';
import { chatGQL } from '../queries/queries';
import { setChatsAC } from '../reducers/chatsReducer';

export const actionSearchChats = text => ({type: 'SEARCH', text})

const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))

function* searchWorker({text}){
    yield put(setChatsAC(null))
    yield delay(1500) 
    let payload = yield chatGQL(`query findChats($id:String){
        ChatFind(query: $id){
          _id createdAt lastModified title members {_id login} owner {_id login}
        }
      }`, {ChatFind: '', 
      id: JSON.stringify([
        {"members._id": yield select((state) => state.auth.payload.sub.id), title: `/${text}/`},
        {sort: [{lastModified: -1}]}
        ])
}) 
    yield put(setChatsAC(payload)) 
}

export function* searchCheck() {
    yield takeLatest('SEARCH', searchWorker)
}