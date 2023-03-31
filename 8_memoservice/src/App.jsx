import React, { useState, useEffect } from 'react';
import appStyle from './styles/App.module.css'; // 외부 스타일시트를 모듈로 관리 (네임스페이스가 구분되어 클래스 이름 중복 방지)
import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';

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
  
  return (
    <div className={appStyle.App}>
      <AppHeader isMobile={mobile} />
      <AppBody isMobile={mobile} />
    </div>
  );
}

export default App;
