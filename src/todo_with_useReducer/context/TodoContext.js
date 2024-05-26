import { createContext, useContext, useReducer } from "react";
// createContextの時は代入するだけ、useContextの時はアロー関数で新しい定数に定義しているのはなあぜなあぜ？
const TodoContext = createContext();
const TodoDispatchContext = createContext();

const todosList = [
  {
    id: 1,
    content: "店予約する",
    changeStatus: false,
  },
  {
    id: 2,
    content: "卵買う",
    changeStatus: false,
  },
  {
    id: 3,
    content: "郵便出す",
    changeStatus: false,
  },
];

const todoReducer = (todos, action) => {
  switch (action.type) {
    case "todo/add":
      return [...todos, action.todo];
    case "todo/delete":
      return todos.filter((todo) => {
        return todo.id !== action.todo.id;
      });
    case "todo/update":
      return todos.map((_todo) => {
        return _todo.id === action.todo.id
          ? { ..._todo, ...action.todo }
          : { ..._todo };
      });
    default:
      return todos;
  }
};

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, todosList);
  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

const useTodoList = () => {
  useContext(TodoContext);
};
const useDispatchTodoList = () => {
  useContext(TodoDispatchContext);
};
export { useTodoList, useDispatchTodoList, TodoProvider };
