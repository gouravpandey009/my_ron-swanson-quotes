// index.js

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { store, persistor } from "./reduxStore";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div id="root" className="night-mode">
        <App />
      </div>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
