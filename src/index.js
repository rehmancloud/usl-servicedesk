import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Amplify from "aws-amplify";
// import awsExports from "./aws-exports";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import "./index.css";

// Amplify.configure(awsExports);
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById("root")
);
