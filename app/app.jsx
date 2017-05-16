let React = require("react");
let ReactDOM = require("react-dom")
let {Router, Route, IndexRoute, hashHistory} = require("react-router")

require("style-loader!css-loader!sass-loader!../styles/app.scss")
import Main from "./components/Main";

ReactDOM.render(
    <Main/>,
    document.getElementById("app")
)