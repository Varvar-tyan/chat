export function modeReducer(state, action={}) {
    if (state === undefined){
        if (localStorage.mode) {
            action.isDarkMode = localStorage.mode === 'dark'
            return {isDarkMode: action.isDarkMode}
        }
        return {isDarkMode: false}
    }
    if (action.type === 'SET_DARK_MODE') {
        localStorage.mode = action.isDarkMode ? 'dark' : 'light'
        return {isDarkMode: action.isDarkMode}
    }
    return state
}

export const setDarkModeAC = (isDarkMode) => ({type: 'SET_DARK_MODE', isDarkMode})