import { useState } from "react";
import List from "./components/List"
import Form from "./components/Form"

// 関数がコンポーネントであれば大文字から始める必要がある
const TodoState = () => {
  const todoList = [
    {
      id: 1,
      content: "日記",
      status: false,
    },
    {
      id: 2,
      content: "React学習",
      status: false,
    },
    {
      id: 3,
      content: "Python学習",
      status: false,
    },
  ];

  const [todos, setTodos] = useState(todoList);

  // todo削除用の関数
  const deleteTaskAfterClick = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  // todo追加用の関数
  const createTask = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  return (
    // <>は<React.Fragment>の省略形
    <>
      <h3 className="todo-title">シンプルなtodoリスト(useState版)</h3>
      <List todos={todos} deleteTaskAfterClick={deleteTaskAfterClick}/>
      <Form createTask={createTask}/>
    </>
  );
};

export default TodoState;
