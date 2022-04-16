import "antd/dist/antd.min.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import RootRouter from "./RootRouter";

ReactDOM.render(
  <Provider store={store}>
    <RootRouter />
  </Provider>,
  document.getElementById("root")
);
