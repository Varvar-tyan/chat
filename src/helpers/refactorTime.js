export const refactorTime = (timestamp) => {
    let date = new Date(+timestamp)
    let hours = date.getHours()
    let minutes = date.getMinutes()
    return `${hours}:${minutes}`
}