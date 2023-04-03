import React, { useState, useEffect } from 'react';
import appStyle from './styles/App.module.css'; // 외부 스타일시트를 모듈로 관리 (네임스페이스가 구분되어 클래스 이름 중복 방지)
import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';
import { v4 } from 'uuid';

/* 메모 데이터 */
// { uuid: 'uuid', bgColor: '#9b93c9', content: '메모 내용' }
const memos = [];

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
  // 입력창에 입력된 값
  const [inputValue, setInputValue] = useState('');
  // 입력창에 입력된 값이 변경되면 state에 저장
  const inputChange = (event) => {
    setInputValue(event.target.value);
  };
  // 메모 추가 버튼 클릭 시
  const addBtnClick = () => {
    if (inputValue !== '') {
      // 메모 데이터 추가
      memos.push({ uuid: v4(), bgColor: '#fff0a6', content: inputValue });
      // 입력창 초기화
      setInputValue('');
      // 디버깅
      console.log(memos);
    } else {
      alert('내용을 입력해주세요');
    }
  };
  // 레이아웃 변경 버튼 클릭 시
  const chgLayoutBtnClick = () => {
    alert('레이아웃 변경 버튼 클릭');
  };

  return (
    <div className={appStyle.App}>
      <AppHeader isMobile={mobile} inputValue={inputValue} inputChange={inputChange} addBtnClick={addBtnClick} chgLayoutBtnClick={chgLayoutBtnClick} />
      <AppBody isMobile={mobile} />
    </div>
  );
}

export default App;
