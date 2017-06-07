import React from "react";
import ReactDOM from "react-dom";

require("file?name=../public/favicon.ico!./favicon.ico"); // copy favicon.ico
require("../node_modules/reset-css/reset.css"); // Reset CSS styles
require("./index.scss"); // Main SASS/CSS

import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("app"));