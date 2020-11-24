// payload = los datos que tiene que recibir el store
// type (dirección), payload (datos)
export const addArticle = (payload) => {
    return { type: 'ADD_ARTICLE', payload}
}

export const addNumberOne = (payload) => {
    return { type: 'ADD_NUMBERONE', payload}
}

export const addNumberTwo = (payload) => {
    return { type: 'ADD_NUMBERTWO', payload}
}

export const addOperator = (payload) => {
    return { type: 'ADD_OPERATOR', payload}
}

export const addResult = (payload) => {
    return { type: 'ADD_RESULT', payload}
}