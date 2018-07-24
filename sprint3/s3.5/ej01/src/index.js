import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MediaCard from "./MediaCard";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<MediaCard />, document.getElementById("root"));
registerServiceWorker();
