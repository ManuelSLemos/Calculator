import { createStore } from "redux";

import rootReducer from './reducers/index';

// Store es el State de TODA la aplicación.
const store = createStore(rootReducer);

export default store;