import "./styles.css";

export const App = () => {
  return (
    <>
      {/* 入力欄 */}
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>

      {/* 未完了TODO */}
      <div>
        <p>未完了のTODO</p>
        <ul>
          <li>
            <div>あああああああ</div>
            <button>完了</button>
            <button>削除</button>
          </li>
          <li>
            <div>いいいいいいい</div>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>

      {/* 完了TODO */}
      <div>
        <p>未完了のTODO</p>
        <ul>
          <li>
            <div>あああああああ</div>
            <button>完了</button>
            <button>削除</button>
          </li>
          <li>
            <div>いいいいいいい</div>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
    </>
  );
};
