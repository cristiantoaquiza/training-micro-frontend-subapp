import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

window.renderComments = (elementId) => {
  ReactDOM.render(<App />, document.getElementById(elementId));
};

window.unmountComments = (elementId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(elementId));
};

module.hot.accept();
