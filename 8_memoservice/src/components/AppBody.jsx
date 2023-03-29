import React, { useState } from 'react';
import styled from 'styled-components';
import { WidthProvider, Responsive } from 'react-grid-layout'; // 그리드 레이아웃 라이브러리
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import { FiEdit3 } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';

// 반응형 그리드 레이아웃
const ResponsiveGridLayout = WidthProvider(Responsive);
const CorkBoard = (props) => {
  // Responsive Grid에 필요한 state
  const [gridState, setGridState] = useState({
    breakpoints: 'lg',
    layouts: { lg: [] },
  });
  // Grid Layout 변경 시 사용
  const onLayoutChange = (layout, layouts) => {
    setGridState((state) => ({
        ...state,
        layouts: layouts,
    }))
  }
  // breakpoint 변경
  const onBreakPointChange = (breakpoint) => {
    setGridState((state) => ({
        ...state,
        breakpoints: breakpoint,
    }))
  }
  // breakpoints는 원하는 해상도에서 30px씩 빼고 생각하면 된다. (좌우 여백 + 스크롤바 너비)
  // lg: 1920(표준 해상도), md: 1440(3/4 너비), sm: 960(1/2 너비), xs: 580(이하는 레이아웃이 깨짐)
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={gridState.layouts}
      breakpoints={{ lg: 1890, md: 1410, sm: 930, xs: 550 }}
      cols={{ lg: 8, md: 6, sm: 4, xs: 2 }}
      width={1000}
      rowHeight={200}
      onLayoutChange={onLayoutChange}
      onBreakpointChange={onBreakPointChange}
      isResizable={true}
      isBounded={true}
    >
      {props.children}
    </ResponsiveGridLayout>
  );
};

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
  grid-template-rows: 28px 1fr;
  place-content: start stretch;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 5px;
  background-color: ${props => props.bgColor || '#fff0a6'};
`;
const MemoHeader = styled.div`
  display: grid;
  grid-template-columns: 28px 28px;
  place-content: center end;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: 0;
`;
const MemoButton = styled.button`
  display: block;
  margin: 0;
  padding: 2px 0 0 0;
  border: 0;
  width: 28px;
  height: 28px;
  background-color: transparent;
  font-size: 14px;
  color: #0000006f;
  &:hover { cursor: pointer; }
  &:active { color: #000000ff; }
`;
function MemoEditButton() {
  return (
    <MemoButton><FiEdit3 /></MemoButton>
  );
}
function MemoCloseButton() {
  return (
    <MemoButton><FiTrash2 /></MemoButton>
  );
}
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
    <MemoWrapper bgColor={findMemo().bgColor}>
      <MemoHeader>
        <MemoEditButton />
        <MemoCloseButton />
      </MemoHeader>
      <MemoContent>{findMemo().content}</MemoContent>
    </MemoWrapper>
  );
}

// 메모 리스트
const memos = [
  { i: '1', x: 0, y: 0, w: 1, h: 1, isDraggable: true, isResizable: true, bgColor: '', content: '1 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다. 메모 테스트 입니다.' },
  { i: '2', x: 0, y: 0, w: 1, h: 1, isDraggable: true, isResizable: true, bgColor: '#9b93c9', content: '2 메모 테스트 입니다.' },
  { i: '3', x: 0, y: 0, w: 1, h: 1, isDraggable: true, isResizable: true, bgColor: '#2baf65', content: '3 메모 테스트 입니다.' },
  { i: '4', x: 0, y: 0, w: 1, h: 1, isDraggable: true, isResizable: true, bgColor: '#f0c7f9', content: '4 메모 테스트 입니다.' },
  { i: '5', x: 0, y: 0, w: 1, h: 1, isDraggable: true, isResizable: true, bgColor: '#93a04b', content: '5 메모 테스트 입니다.' },
  { i: '6', x: 0, y: 0, w: 1, h: 1, isDraggable: true, isResizable: true, bgColor: '#d86c13', content: '6 메모 테스트 입니다.' },
  { i: '7', x: 0, y: 0, w: 1, h: 1, isDraggable: true, isResizable: true, bgColor: '#84615e', content: '7 메모 테스트 입니다.' },
  { i: '8', x: 0, y: 0, w: 1, h: 1, isDraggable: true, isResizable: true, bgColor: '#dde0db', content: '8 메모 테스트 입니다.' },
];

function AppBody() {
  return (
    <WrapperScroll>
      <CorkBoard>
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
      </CorkBoard>
    </WrapperScroll>
  );
}

export default AppBody;
