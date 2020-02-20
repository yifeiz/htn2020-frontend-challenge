import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";

import AppRouter from "./Routers/AppRouter";

ReactDOM.render(<App />, document.querySelector("#root"));
