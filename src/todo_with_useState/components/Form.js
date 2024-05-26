import { useState } from "react";

const Form = ({ createTask }) => {
  // inputで入力した値を格納するために記述
  const [enteredTodo, setEnteredTodo] = useState('');
  
  // todo追加用の関数
  const addTodo = (e) => {
    // フォームが持つデフォルトの動作をキャンセルし、ページのリロードを防ぐ
    e.preventDefault();
    // input欄が入力されているならtodoを追加する
    if (enteredTodo !== '' || enteredTodo.match(/\S/g)) {
      const newTodo = {
        id: Math.floor(Math.random() * 1e5),
        content: enteredTodo,
      };

      // todosを展開した上で新しいtodoを追加する
      createTask(newTodo);

      setEnteredTodo('');
    }
  };

  return (
    <form onSubmit={addTodo} className="todo-form">
      <input
        type="text"
        value={enteredTodo}
        onChange={(e) => setEnteredTodo(e.target.value)}
      />
      <button>追加</button>
    </form>
  );
};

export default Form;
