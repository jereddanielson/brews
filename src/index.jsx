import React from "react";
import ReactDOM from "react-dom";

require("file?name=../public/favicon.ico!./favicon.ico"); // copy favicon.ico
require("./index.scss");

import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("app"));