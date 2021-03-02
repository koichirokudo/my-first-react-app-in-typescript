import React from 'react'; // react 開発に必須
import ReactDOM from 'react-dom'; // 開発に必須
import App from './App';

ReactDOM.render(
  // App 内部に対して message を入力した IntrinsicAttributes は本来備わっているという意味
  // key はエラーがでない attribute の定義に key が定義されているから
  <App />,
  document.getElementById('root')
);
