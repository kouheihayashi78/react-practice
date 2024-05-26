import { useState } from "react";

const Item = ({ todo, complete, updateTodo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);

  const toggleEditing = () => {
    // 下記はスプレッド構文でtodoを展開した上で、その中のchangeStatusを指定しているが
    // 右側の更新の変数は特にスプレッドで展開していないのでどのオブジェクトかを指定する必要がある
    // またnewTodoはスプレッド構文でtodoを展開しているので、changeStatus以外は同じ値が入っている
    const newTodo = { ...todo, changeStatus: !todo.changeStatus };
    updateTodo(newTodo);
  };

  const changeInput = (e) => {
    setEditingContent(e.target.value);
  };

  // inputの時にenterを押して編集モードを解除するときに発火
  const confirmContent = (e) => {
    // ブラウザのデフォルト機能を防止するjsの関数
    e.preventDefault(); // つまりformのsubmitを阻止する

    // form送信を阻止したら、今度は編集モードを解除するために再度stateを更新する
    const newTodo = {
      ...todo,
      content: editingContent,
      changeStatus: !todo.changeStatus,
    };
    updateTodo(newTodo);
  };

  return (
    <div className="todo-content"  key={todo.id}>
      <button onClick={() => complete(todo.id)}>完了</button>
      <form onSubmit={confirmContent} style={{ display: "inline-block" }}>
        {todo.changeStatus ? (
          <input type="text" value={editingContent} onChange={changeInput} />
        ) : (
          <span onDoubleClick={toggleEditing}>{todo.content}</span>
        )}
      </form>
    </div>
  );
};

export default Item;
