let React = require("react");
let ReactDOM = require("react-dom")
let {Router, Route, IndexRoute, hashHistory} = require("react-router")

require("style-loader!css-loader!sass-loader!../styles/app.scss")

ReactDOM.render(
    <h3>Boilerplate 3 project</h3>,
    document.getElementById("app")
)