import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store"

const Example = () => {
  return (
    <Provider store={store}>
      <h3 className="todo-title">reduxを用いた簡単なカウントアップ機能(非同期処理も実装)</h3>
      <Counter />
    </Provider>
  );
};

export default Example;
