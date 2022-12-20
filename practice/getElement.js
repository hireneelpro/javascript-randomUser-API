export const getElement = (selection) => {
    const element = document.querySelector(selection)
    if (element) { return element }
    else {
        Error('selected element does not exist')
    }

}