import Todo from "./components/Todo";

const Example = () => {
  return (
    <>
      <h3 className="todo-title">
        シンプルなtodoリスト
        <br />
        (useReducerとuseContext使用)
      </h3>
      <Todo />
    </>
  );
};

export default Example;
