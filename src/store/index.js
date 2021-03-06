import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import { persistStore } from "redux-persist";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );
console.log("Root Reducer")
console.log(rootReducer)
export const store = createStore(rootReducer);
export const persistor = persistStore(store);

export default { store, persistor };
