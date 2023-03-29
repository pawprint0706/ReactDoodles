import styled from 'styled-components';
import GridLayout from 'react-grid-layout'; // 그리드 레이아웃 라이브러리
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import { MdEdit } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';

// 다른 컴포넌트를 감싸는 래퍼
const WrapperScroll = styled.div`
  display: grid;
  place-content: stretch stretch;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  border: 0;
`;
const WrapperNoScroll = styled.div`
  display: grid;
  place-content: stretch stretch;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: 0;
`;
// 메모 컴포넌트
const MemoWrapper = styled.div`
  display: grid;
  grid-template-rows: 24px 1fr;
  place-content: start stretch;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 5px;
  background-color: yellow;
`;
const MemoHeader = styled.div`
  display: grid;
  grid-template-columns: 24px 24px;
  place-content: center end;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: 0;
`;
const MemoButton = styled.button`
  display: block;
  margin: -2px 0 0 0;
  padding: 5px 0 0 0;
  border: 0;
  background-color: transparent;
  font-size: 14px;
  color: #000000bf;
`;
const MemoContent = styled.div`
  display: block;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 0;
  padding: 0 10px;
  border: 0;
  font-size: 14px;
`;
function Memo(props) {
  function findMemo() {
    const memo = memos.find((memo) => memo.i === props.num);
    return memo;
  }

  return (
    <MemoWrapper>
      <MemoHeader>
        <MemoButton><MdEdit /></MemoButton>
        <MemoButton><GrClose /></MemoButton>
      </MemoHeader>
      <MemoContent>{findMemo().content}</MemoContent>
    </MemoWrapper>
  );
}

// 메모 리스트
const memos = [
  { i: '1', x: 0, y: 0, w: 1, h: 1, isResizable: true, content: '1 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다.' },
  { i: '2', x: 1, y: 0, w: 1, h: 1, isResizable: true, content: '2 메모 테스트 입니다.' },
  { i: '3', x: 0, y: 1, w: 1, h: 1, isResizable: true, content: '3 메모 테스트 입니다.' },
  { i: '4', x: 1, y: 1, w: 1, h: 1, isResizable: true, content: '4 메모 테스트 입니다.' },
  { i: '5', x: 2, y: 0, w: 1, h: 1, isResizable: true, content: '5 메모 테스트 입니다.' },
  { i: '6', x: 2, y: 1, w: 1, h: 1, isResizable: true, content: '6 메모 테스트 입니다.' },
  { i: '7', x: 0, y: 2, w: 1, h: 1, isResizable: true, content: '7 메모 테스트 입니다.' },
  { i: '8', x: 1, y: 2, w: 1, h: 1, isResizable: true, content: '8 메모 테스트 입니다.' },
];

function AppBody() {
  return (
    <WrapperScroll>
      <GridLayout
        className="layout"
        layout={memos}
        cols={10}
        rowHeight={200}
        width={1920}
        isBounded={true}
      >
        <WrapperNoScroll key="1">
          <Memo num="1" />
        </WrapperNoScroll>
        <WrapperNoScroll key="2">
          <Memo num="2" />
        </WrapperNoScroll>
        <WrapperNoScroll key="3">
          <Memo num="3" />
        </WrapperNoScroll>
        <WrapperNoScroll key="4">
          <Memo num="4" />
        </WrapperNoScroll>
        <WrapperNoScroll key="5">
          <Memo num="5" />
        </WrapperNoScroll>
        <WrapperNoScroll key="6">
          <Memo num="6" />
        </WrapperNoScroll>
        <WrapperNoScroll key="7">
          <Memo num="7" />
        </WrapperNoScroll>
        <WrapperNoScroll key="8">
          <Memo num="8" />
        </WrapperNoScroll>
      </GridLayout>
    </WrapperScroll>
  );
}

export default AppBody;
