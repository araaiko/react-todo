import { useState } from "react";
import "./styles.css";

export const App = () => {
  // todo入力欄
  const [todoText, setTodoText] = useState("");
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  // 未完了リスト
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  // 完了リスト
  const [completeTodos, setCompleteTodos] = useState([]);

  // 追加ボタン
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 削除ボタン
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 完了ボタン
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  // 戻すボタン
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      {/* 入力欄 */}
      <div className="input-area">
        <input
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      {/* 未完了TODO */}
      <div className="incomplete-area">
        <p className="todo-title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo} className="todo-item-wrap">
                <div className="todo-text">{todo}</div>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 完了TODO */}
      <div className="complete-area">
        <p className="todo-title">未完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo} className="todo-item-wrap">
                <div className="todo-text">{todo}</div>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
