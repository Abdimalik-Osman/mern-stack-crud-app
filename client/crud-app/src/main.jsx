import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./components/redux/store";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
import { EmployeesProvider } from "./components/context/employee";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <EmployeesProvider> */}
      <Provider store={store}>
        <Toaster />
        <App />
      </Provider>
      {/* </EmployeesProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
