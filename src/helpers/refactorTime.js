export const refactorTime = (timestamp) => {
    let date = new Date(+timestamp)
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let month = date.getMonth()
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()

    let timestampNow = new Date().getTime()
     return timestampNow - timestamp < 24 * 60 * 60 * 1000 ?
     `${hours}:${minutes.toString().length < 2 ? '0' + minutes : minutes}` :
     `${day} ${months[month]} ${hours}:${minutes.toString().length < 2 ? '0' + minutes : minutes}`
}