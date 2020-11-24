// Estado Inicial de la Aplicación, es volatil
const initialState = {
    articles: [
        { id: 1, name: 'React + Redux 9' }
    ],
    author: [
        { id: 1, name: 'Manuel S. Lemos' }
    ] 
}

// La función que gestiona el Reducer y Action
// Tiene que ser una función normal
function rootReducer(state = initialState, action) {

    if (action.type === 'ADD_ARTICLE') {
        state.articles.push(action.payload)
    }

    return state;
}

export default rootReducer;