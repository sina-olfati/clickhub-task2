const addPage = (value) => {
    return {type: "ADD_PAGE", payload: value}
}

const choosePage = (value) => {
    return {type: "CHOOSE_PAGE", payload: value}
}

export {addPage, choosePage}