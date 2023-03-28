import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // 외부 스타일시트를 파일로 관리 (글로벌 네임스페이스이므로 클래스 이름 중복 가능)
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
