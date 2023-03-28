import appStyle from './styles/App.module.css'; // 외부 스타일시트를 모듈로 관리 (네임스페이스가 구분되어 클래스 이름 중복 방지)
import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';

function App() {
  return (
    <div className={appStyle.App}>
      <AppHeader />
      <AppBody />
    </div>
  );
}

export default App;
