import { useState } from "react";

// 関数がコンポーネントであれば大文字から始める必要がある
const TodoState = () => {
  const todoList = [
    {
      id: 1,
      content: "日記",
      status: false,
    },
  ];

  const [todos, setTodos] = useState(todoList);
  // inputで入力した値を格納するために記述
  const [enteredTodo, setEnteredTodo] = useState("");

  // todo削除用の関数
  const deleteTaskAfterClick = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  // todo追加用の関数
  const addTodo = (e) => {
    // フォームが持つデフォルトの動作をキャンセルし、ページのリロードを防ぐ
    e.preventDefault();
    // input欄が入力されているならtodoを追加する
    if (enteredTodo !== "" || enteredTodo.match(/\S/g)) {
      const newTodo = {
        id: Math.floor(Math.random() * 1e5),
        content: enteredTodo,
      };

      // todosを展開した上で新しいtodoを追加する
      setTodos([...todos, newTodo]);

      setEnteredTodo("");
    }
  };

  return (
    // <>は<React.Fragment>の省略形
    <>
      <h3 className="todo-title">シンプルなtodoリスト(useState版)</h3>
      {todos.map((todo) => {
        return (
          // keyを指定することでReactは各要素を一意に識別する
          <div className="todo-content" key={todo.content}>
            <button
              type="checkbox"
              onClick={() => deleteTaskAfterClick(todo.id)}
            >
              完了
            </button>
            <span>{todo.content}</span>
          </div>
        );
      })}
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>追加</button>
      </form>
    </>
  );
};

export default TodoState;
