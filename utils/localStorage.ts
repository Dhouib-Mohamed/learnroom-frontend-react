const getItem = (name) => {
    const value = localStorage.getItem(name)
    try {
        return JSON.parse(value)
    } catch (e) {
        return null
    }
}
const setItem = (name, content) => {
    if (content) {
        localStorage.setItem(name, JSON.stringify(content))
    }
}
const removeItem = (name) => {
    localStorage.removeItem(name)
}

export {getItem, setItem, removeItem}