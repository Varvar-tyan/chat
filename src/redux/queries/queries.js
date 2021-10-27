import { promiseTHC } from "../reducers/promiseReducer"

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
                    throw new Error('ашипка, угадывай што не так')
                }
                else {
                    return data.data[Object.keys(variables)[0]]
                }
            })
    }
}

const chatGQL = getGQL('http://chat.fs.a-level.com.ua/graphql')

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

// const actionCategoryById = (_id) =>
//     actionPromise('catById', shopGQL(`
//     query catById($query:String){
//         CategoryFindOne(query:$query){
//         _id name goods{
//             _id name price description images{
//             url
//             }
//         }
//         }
//     }`, { CategoryFindOne: '', query: JSON.stringify([{ _id }]) }))