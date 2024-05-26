const List = ({ todos, deleteTaskAfterClick }) => {
  return (
    todos.map((todo) => {
      return (
        // keyを指定することでReactは各要素を一意に識別する
        <div className="todo-content" key={todo.content}>
          <button type="checkbox" onClick={() => deleteTaskAfterClick(todo.id)}>
            完了
          </button>
          <span>{todo.content}</span>
        </div>
      );
    })
  )
};

export default List;