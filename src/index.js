import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import rootReducer from "./redux/store/reducers/rootReducer";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Authentication/AuthProvider";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
    <Toaster />
  </React.StrictMode>
);

reportWebVitals();
