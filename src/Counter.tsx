import React, { useState } from 'react'; // useStateを利用する

// React.FunctionComponents を React.FC に短縮できる
const Counter: React.FC<{}> = () => {
  // useStateの初期化
  // useStateには2つの要素の戻り値がある。それを分割代入する
  // 名前は慣習的に[x, setX]と決められているため、これに従う
  // [value, setValue]
  const initialValue: any = 0;
  // valueに対しては <number> で型を指定できる
  // useState<number> とすれば、value と setValue は number 型となるものを取得できる
  // setValue は関数として戻り値を取得できる
  const [value, setValue] = useState<number>(initialValue);

  // value を変更できるのは setValue関数だけ
  const increment = () => {
    setValue((prevState) => prevState + 1);
  };

  const decrement = () => {
    setValue((prevState) => prevState - 1);
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

// App からインポート可能にするために export default を記載する
export default Counter;
