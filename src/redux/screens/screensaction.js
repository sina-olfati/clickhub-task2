const addPage = () => {
    return {type: "ADD_PAGE"}
}

const choosePage = (value) => {
    return {type: "CHOOSE_PAGE", payload: value}
}

export {addPage, choosePage}