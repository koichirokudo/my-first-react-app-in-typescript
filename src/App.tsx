import React from 'react';
// 入門
// 基本的な型制約のやり方
// const App = ({ message }: { message: AppProps }) => {
//   return <div>{message}</div>;
// };

// 一般的には interface に型を書いてそれを使うケースが多い
interface AppProps {
  message?: string;
}
// const App = ({ message }: AppProps) => {
//   return <div>{message}</div>;
// };

// デフォルト値がコンポーネントに存在する
// デフォルト値を設定できる
// 以下の型制約の書き方だと、正しく型制約が動作しない、
// エラーが発生しないため使えない
// const App = ({ message }: AppProps) => {
//   return <div>{message}</div>;
// };

// なので以下のように書くこと!
const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return <div>{message}</div>;
};

App.defaultProps = {
  message: 'Hello, defaultProps!',
  // description: 'This is App component', // is not assignable
};

export default App;
