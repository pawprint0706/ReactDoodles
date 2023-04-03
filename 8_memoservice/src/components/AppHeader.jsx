import styled from 'styled-components'; // CSS in JS 기법으로 스타일을 작성할 수 있도록 도와주는 라이브러리
// 컴포넌트 단위 개발에서는 CSS, HTML, JS를 통합하는 방향으로 가는 것이 재사용 및 유지보수에 유리하다.
import assets_logo from '../assets/logo.png'; // 이미지도 하나의 모듈로 import하여야 한다.
import { RiAddBoxLine } from 'react-icons/ri'; // 아이콘 라이브러리 (아이콘 개별로 import한다.)
import { RiLayout2Line } from 'react-icons/ri';

// styled-components는 컴포넌트 밖에서 선언해야 한다.
// 헤더 컴포넌트
const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => props.isMobile ? '40px 1fr 40px' : '40px max-content 1fr 40px 40px'};
  place-content: center start;
  gap: 10px;
  overflow: hidden;
  margin: 10px;
  margin-bottom: 3px; /* 하단은 GridLayout이 margin 10px 있어서 상단보다 margin을 줄임 */
  padding: 10px;
  border: 0;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow:
    2px 1px 1px #cccccc,
    2px 2px 1px #cccccc,
    2px 3px 1px #cccccc,
    2px 6px 5px rgba(16,16,16,0.4);
`;
const Logo = styled.div`
  display: grid;
  place-content: stretch stretch;
  overflow: hidden;
  margin: 1px 0 0 0;
  padding: 0;
  border: 0;
  width: 40px;
  height: 40px;
  background-image: url(${assets_logo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: drop-shadow(2px 2px 1px #bbbbbb);
`;
const Title = styled.div`
  display: grid;
  place-content: center center;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
  filter: drop-shadow(2px 2px 1px #bbbbbb);
`;
const HeaderInput = styled.input`
  display: block;
  overflow: hidden;
  margin: 1px 10px 0 10px;
  padding: 0 5px;
  border: 0;
  border-bottom: 1px solid #cccccc;
  font-size: 15px;
  font-family: 'Noto Sans KR', sans-serif;
  &:focus { outline: none; border-bottom: 1px solid #999999; }
`;
function MemoInput(props) {
  function onKeyDown(event) {
    if (event.key === 'Enter') {
      props.addBtnClick();
    }
  }

  return (
    <HeaderInput placeholder="내용을 입력해주세요" value={props.inputValue} onChange={props.onChange} onKeyDown={(event) => onKeyDown(event)}></HeaderInput>
  );
}
const HeaderButton = styled.button`
  display: block;
  margin: 0;
  padding: 7px 0 0 0;
  border: 1px solid #dddddd;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  outline: none;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px 1px #dddddd;
  transition: all 0.1s ease-in-out;
  &:hover { cursor: pointer; }
  &:active {
    transform: translateY(2px);
    box-shadow: none;
  }
  font-size: 24px;
  color: #777777;
`;
function AddMemoButton(props) {
  return (
    <HeaderButton title="메모 추가" onClick={props.onClick}><RiAddBoxLine /></HeaderButton>
  );
}
function ChangeLayoutButton(props) {
  return (
    <HeaderButton title="레이아웃 변경" onClick={props.onClick}><RiLayout2Line /></HeaderButton>
  );
}
function Header(props) {
  return (
    <HeaderWrapper isMobile={props.isMobile} inputValue={props.inputValue} inputChange={props.inputChange} addBtnClick={props.addBtnClick} chgLayoutBtnClick={props.chgLayoutBtnClick}>
      <Logo />
      {!props.isMobile && <Title>React Memo</Title>}
      <MemoInput inputValue={props.inputValue} onChange={props.inputChange} addBtnClick={props.addBtnClick} />
      <AddMemoButton onClick={props.addBtnClick} />
      {!props.isMobile && <ChangeLayoutButton onClick={props.chgLayoutBtnClick} />}
    </HeaderWrapper>
  );
}

function AppHeader(props) {
  return (
    <Header isMobile={props.isMobile} inputValue={props.inputValue} inputChange={props.inputChange} addBtnClick={props.addBtnClick} chgLayoutBtnClick={props.chgLayoutBtnClick} />
  );
}

export default AppHeader;
