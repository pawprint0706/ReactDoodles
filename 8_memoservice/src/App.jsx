import React, { useState, useEffect } from 'react';
import appStyle from './styles/App.module.css'; // 외부 스타일시트를 모듈로 관리 (네임스페이스가 구분되어 클래스 이름 중복 방지)
import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { v4 } from 'uuid';

// { uuid: 'uuid', bgColor: '#fff0a6', content: '메모 내용' }
function reducer(currentState, action) {
  if (currentState === undefined) { // 초기값
    return {
      inputValue: '',
      memos: [
        { uuid: 'test1', bgColor: '#fff0a6', content: 'test1' },
        { uuid: 'test2', bgColor: '#fff0a6', content: 'test2' },
        { uuid: 'test3', bgColor: '#fff0a6', content: 'test3' },
      ]
    };
  }
  const newState = {...currentState};
  if (action.type === 'CHANGE_INPUT') {
    newState.inputValue = action.inputValue;
  } else if (action.type === 'ADD_MEMO') {
    newState.memos = [...newState.memos, { uuid: v4(), bgColor: '#fff0a6', content: currentState.inputValue }];
  } else if (action.type === 'DELETE_MEMO') {
    newState.memos = newState.memos.filter(memo => memo.uuid !== action.uuid);
  } else if (action.type === 'CHANGE_MEMO') {
    newState.memos = newState.memos.map(memo => {
      if (memo.uuid === action.uuid) {
        return { ...memo, bgColor: action.bgColor, content: action.content };
      } else {
        return memo;
      }
    });
  }
  return newState;
}
const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== 'production', // production 환경에서는 Redux DevTools 사용하지 않도록 설정
});

function App() {
  // 모바일 해상도를 감지하는 state
  const [mobile, setMobile] = useState(false);
  // 리사이즈 이벤트를 감지하여 가로 길이에 따라 모바일 여부 결정
  const resizingHandler = () => {
    if (window.innerWidth <= 480) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  // 우선 맨 처음 로딩 시 너비가 480이하면 모바일 처리
  useEffect(() => {
    if (window.innerWidth <= 480) {
      setMobile(true);
    }
    // 윈도우 사이즈 변화를 감지하는 이벤트리스너 추가
    window.addEventListener("resize", resizingHandler);
    return () => {
      // 메모리 누수를 줄이기 위해 이벤트리스너 제거
      window.removeEventListener("resize", resizingHandler);
    };
  }, []);    
  // 레이아웃 변경 버튼 클릭 시
  const chgLayoutBtnClick = () => {
    alert('레이아웃 변경 버튼 클릭');
  };

  return (
    <div className={appStyle.App}>
      <Provider store={store}>
        <AppHeader isMobile={mobile} chgLayoutBtnClick={chgLayoutBtnClick} />
        <AppBody />
      </Provider>
    </div>
  );
}

export default App;
