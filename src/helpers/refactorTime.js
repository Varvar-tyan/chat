export const refactorTime = (timestamp) => {
    let date = new Date(+timestamp)
    let hours = date.getHours()
    let minutes = date.getMinutes()
    return `${hours}:${minutes}`
}

export const refactorMessageTime = (timestamp) => {
    let date = new Date(+timestamp)
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let month = date.getMonth()
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    return `${day} ${months[month]} ${hours}:${minutes}`
}