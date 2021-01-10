import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
// import allReducers from "./reducers/rootReducer";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

// const store = createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

import { ApplicationProvider } from "./ApplicationContext";
import { AuthenticationProvider } from "./AuthenticationContext";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AuthenticationProvider>
        <ApplicationProvider>
          <App />
        </ApplicationProvider>
      </AuthenticationProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
