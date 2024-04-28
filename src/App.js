import { useState, lazy, Suspense, useEffect } from 'react';
import './App.css';

const Loader = ({ practice }) => {
  // lazyをコンポーネントの外部で呼び出し、遅延読み込みされるReactコンポーネントを宣言
  const LazyComponent = lazy(() => import(`./${practice}`));

  return (
    // Suspenseはコンポーネント内で非同期な操作完了するまで、ローディング状態を管理（遅延）する
    <Suspense fallback={<div>読み込み中...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

const App = ({ practices }) => {
  let restoredLecIndx = 0;
  restoredLecIndx = restoredLecIndx < practices.length ? restoredLecIndx : 0;
  const [practiceIndex, setPracticeIndex] = useState(restoredLecIndx);

  // practice.jsの配列のページ名を取得
  const practiceName = practices[practiceIndex];

  // プルダウンからページ名を選択すると発火
  const contentChange = (e) => {
    setPracticeIndex(e.target.value);
  };

  // useEffectは関数の実行タイミングをReactのレンダリング後まで遅らせるhook
  // useEffectの第一引数は関数、第二引数は配列
  // setItemのメソッドの引数（keyName: string, keyValue: string）
  useEffect(() => localStorage.setItem('items', JSON.stringify(practiceIndex)),[practiceIndex]);

  return (
    <div className="App">
      <header className="App-header">
        <select className="App-select" value={practiceIndex} onChange={contentChange}>
          {practices.map((name, index) => (
            <option key={name} value={index}>
              {name}
            </option>
          ))}
        </select>
        <div className="App-content">
          <Loader practice={`${practiceName}`} />
        </div>
      </header>
    </div>
  );
};

export default App;
