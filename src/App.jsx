import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああああ",
    "いいいいい"
  ]);

  const [completeTodos, setCompleteTodos] = useState(["うううううう"]);

  return (
    <>
      {/* 入力欄 */}
      <div className="input-area">
        <input type="text" placeholder="TODOを入力" />
        <button>追加</button>
      </div>

      {/* 未完了TODO */}
      <div className="incomplete-area">
        <p className="todo-title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo} className="todo-item-wrap">
                <div className="todo-text">{todo}</div>
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 完了TODO */}
      <div className="complete-area">
        <p className="todo-title">未完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo} className="todo-item-wrap">
                <div className="todo-text">{todo}</div>
                <button>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
