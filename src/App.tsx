import React from 'react';
// 入門
// 基本的な型制約のやり方
// const App = ({ message }: { message: AppProps }) => {
//   return <div>{message}</div>;
// };

// 一般的には interface に型を書いてそれを使うケースが多い
interface AppProps {
  message: string;
}
const App = ({ message }: AppProps) => {
  return <div>{message}</div>;
};

export default App;
