import ReactDOM from "react-dom";
import RootComponent from "./RootComponent";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <RootComponent />
  </Provider>,
  document.getElementById("root")
);
