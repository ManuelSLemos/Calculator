// Estado Inicial de la Aplicación, es volatil
const initialState = {
    articles: [
        { id: 1, name: 'React + Redux 9' }
    ],
    result: '0',
    num1: '0',
    operator: '',
    num2: ''
}

// La función que gestiona el Reducer y Action
// Tiene que ser una función normal
function rootReducer(state = initialState, action) {

    if (action.type === 'ADD_ARTICLE') {
        state.articles.push(action.payload);
    }

    if (action.type === 'ADD_NUMBERONE') {
        state.calculator.num1 += action.payload;
    }

    if (action.type === 'ADD_NUMBERTWO') {
        state.calculator.num2 += action.payload;
    }

    if (action.type === 'ADD_OPERATOR') {
        return {
            ...state,
            operator: action.payload
        } 
    }

    if (action.type === 'ADD_RESULT') {
        state.calculator.result = action.payload;
    }

    return state;
}

export default rootReducer;