import { Provider } from "react-redux";
import CommentApp from "./module/Comment";
import { store } from "./store";

function App() {
  return (
    < CommentApp />
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
