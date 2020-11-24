// payload = los datos que tiene que recibir el store
// type (dirección), payload (datos)
export const addArticle = (payload) => {
    return { type: 'ADD_ARTICLE', payload}
}