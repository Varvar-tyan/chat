import { promiseTHC } from "../reducers/promiseReducer"

const uploadFile = file => {
  let formData = new FormData()
  formData.append('media', file)
  return fetch('http://chat.fs.a-level.com.ua/upload', {
    method: 'POST',
    headers: localStorage.authToken ? { Authorization: 'Bearer ' + localStorage.authToken } : {},
    body: formData
  }).then(resp => resp.json())
}

export const promiseUploadFile = (file) => {
  return promiseTHC('photo', uploadFile(file))
}

const getGQL = url => {
  return function (query, variables = {}) {
      return fetch(url,
          {
              method: "POST",
              headers:
              {
                  "Content-Type": "application/json",
                  ...(localStorage.authToken ? { Authorization: 'Bearer ' + localStorage.authToken } : {})
              },
              body: JSON.stringify({ query, variables })
          }).then(resp => resp.json())
          .then(data => {
              if ("errors" in data) {
                  throw new Error(JSON.stringify(data.errors, null, 4))
              }
              else {
                  return data.data[Object.keys(variables)[0]]
              }
          })
  }
}

export const chatGQL = getGQL('http://chat.fs.a-level.com.ua/graphql')

export const promiseLoginTHC = (login, password) => {
    return promiseTHC('login', chatGQL(`
        query login($login:String, $password: String) 
        {login(login:$login, password:$password)}`,
        { login, password }))
}

export const promiseRegisterTHC = (login, password) => {
    return promiseTHC('register', chatGQL(`mutation register($login:String, $password:String) {
        UserUpsert(user:{
          login:$login, password:$password
        })
        {_id login}
      }`,
        { UserUpsert: '', login, password }))
}

export const promiseGetUsersTHC = (skip) => {
    return promiseTHC('users', chatGQL(`query findUsers($query:String){
        UserFind(query: $query){
          _id login nick avatar {
            _id url
          }
        }
      }`,
      {UserFind: '', query: JSON.stringify([{ }, {skip: [skip]}])}))
}

export const promiseNewChatTHC = (title, _id) => {
  return promiseTHC('newChat', chatGQL(`mutation createChat($title: String, $members:[UserInput]){
        ChatUpsert(chat:{
          title: $title, members:$members
        }) {
          _id createdAt lastModified owner {
            _id login
          } members {
            _id login
          }
        }
      }`, { ChatUpsert: '', title, members: [{ _id }] }))
}

export const promiseGetChatsTHC = (myId) => {
  return promiseTHC('myChats', chatGQL(`query findChats($id:String){
    ChatFind(query: $id){
      _id createdAt lastModified title members {_id login} owner {_id login} messages {_id createdAt owner {login} text media {_id url}}
    }
  }`, {ChatFind: '', 
  id: JSON.stringify([
    {"members._id": myId}, 
    {sort: [{lastModified: -1}]}
  ])}))
}

export const promiseChatByIdTHC = (id) => {
  return promiseTHC('chat', chatGQL(`query findExactChat($chatId:String){
    ChatFindOne(query: $chatId){
      _id createdAt lastModified owner {_id login} title members {
        _id login
      } messages {_id owner {_id login } text  createdAt forwarded {_id owner {login}}
      }
    }
  }`, {ChatFindOne: '', chatId: JSON.stringify([{_id: id}])}))
}

export const promiseGetChatMessagesTHC = (chatId) => {
  return promiseTHC('messages', chatGQL(`query FindMessages($chatId:String){
    MessageFind(query: $chatId){
      _id createdAt owner {_id login} text chat { _id title}
    }
  }`, {MessageFind: '', chatId: JSON.stringify([{"chat._id": chatId}])}))
}

export const promiseNewMessageTHC = (text, chatId) => {
  return promiseTHC('newMessage', chatGQL(`mutation addMessage($text: String, $chatId: ID){
    MessageUpsert(message:{
      text: $text, chat: {_id: $chatId}
    }){
      _id chat {_id title} text
    }
  }`, { MessageUpsert: '', text, chatId}))
}

export const promiseUserByIdTHC = (id) => {
  return promiseTHC('userById', chatGQL(`query findUser($query: String){
    UserFindOne(query: $query){
      _id createdAt login nick avatar {
        _id url
      }
    }
  }`, {UserFindOne: '', query: JSON.stringify([{_id: id}])}))
}

export const promiseChangeAvatarTHC = (avatarId, myId) => {
  return promiseTHC('setAvatar', chatGQL(`mutation setAvatar($myId: ID, $avatarId: ID){
    UserUpsert(user:{_id: $myId, avatar: {_id: $avatarId}}){
        _id, avatar{
            _id
        }
      }
    }`, {UserUpsert: '', avatarId, myId}))
}

export const promiseGetTotalUsersCount = () => {
  return promiseTHC('totalUsersCount', chatGQL(`query totalUsersCount{
    UserCount(query: "[{}]")
  }`, {UserCount: ''}))
}
    