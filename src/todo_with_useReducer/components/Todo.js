import { useState } from "react"
import List from "./List"
import Form from "./Form"

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
      changeStatus: false
    },
    {
      id: 2,
      content: "卵買う",
      changeStatus: false
    },
    {
      id: 3,
      content: "郵便出す",
      changeStatus: false
    },
  ];

  const [ todos, setTodos ] = useState(todosList);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  // Itemコンポーネントまでプロップス経由で渡す
  const updateTodo = (todo) => {
    const newTodo = todos.map((tmp_todo) => {
      return (
        // 元のtodoを新しいtodoで上書き(スプレッド構文で展開して上書き)
        // 更新したいtodoではない場合は、そのまま元のtodoを格納する
        todo.id === tmp_todo.id ? {...tmp_todo, ...todo} : {...tmp_todo}
      )
    })
    setTodos(newTodo);
  }

  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
      <Form createTodo={createTodo}/>
    </>
  )
};
export default Todo;
