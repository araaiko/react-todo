import "./styles.css";

export const App = () => {
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
          <li className="todo-item-wrap">
            <div className="todo-text">あああああああ</div>
            <button>完了</button>
            <button>削除</button>
          </li>
          <li className="todo-item-wrap">
            <div className="todo-text">いいいいいいい</div>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>

      {/* 完了TODO */}
      <div className="complete-area">
        <p className="todo-title">未完了のTODO</p>
        <ul>
          <li className="todo-item-wrap">
            <div className="todo-text">あああああああ</div>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
};
