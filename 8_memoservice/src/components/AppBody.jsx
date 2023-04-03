import React, { useState } from 'react';
import styled from 'styled-components';
import { WidthProvider, Responsive } from 'react-grid-layout'; // 그리드 레이아웃 라이브러리
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import { FiEdit3 } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';

/* 다른 컴포넌트를 감싸는 래퍼 컴포넌트 */
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

/* 메모 컴포넌트 */
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
  return (
    <MemoWrapper bgColor={props.bgColor}>
      <MemoHeader>
        <MemoEditButton />
        <MemoCloseButton />
      </MemoHeader>
      <MemoContent className={"no-scrollbar"}>{props.content}</MemoContent>
    </MemoWrapper>
  );
}

/* 반응형 그리드 레이아웃 */
const ResponsiveGridLayout = WidthProvider(Responsive);
function CorkBoard(props) {
  // Responsive Grid에 필요한 state
  const [gridState, setGridState] = useState({
    breakpoints: 'lg',
    layouts: {
      lg: [],
      md: [],
      sm: [],
      xs: [],
      xxs: []
    },
  });
  // Grid Layout 변경 시 사용
  // breakpoint 변경
  const onBreakPointChange = (breakpoint) => {
    setGridState((state) => ({
        ...state,
        breakpoints: breakpoint,
    }))
  }
  const onLayoutChange = (layout, layouts) => {
    setGridState((state) => ({
        ...state,
        layouts: layouts,
    }))
  }
  // breakpoints는 원하는 해상도 width에서 21px씩 빼고 생각하면 된다. (좌우 여백 20px + 1px)
  // 윈도우의 크롬브라우저는 최소 폭이 500px 이다.
  // 1920px 해상도 기준으로 lg: 1419(1440px 3/4 너비), md: 938(960px 1/2 너비), sm: 699(720px), xs: 459(480px 모바일)
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={gridState.layouts}
      breakpoints={{ lg: 1419, md: 938, sm: 699, xs: 459, xxs: 0 }}
      cols={{ lg: 8, md: 6, sm: 4, xs: 2, xxs: 1 }}
      onBreakpointChange={onBreakPointChange}
      onLayoutChange={onLayoutChange}
      rowHeight={200}
      isResizable={true}
      isBounded={true}
    >
      {
        props.memos.map(function(memo) {
          return (
            <WrapperNoScroll key={memo.uuid}>
              <Memo bgColor={memo.bgColor} content={memo.content} />
            </WrapperNoScroll>
          );
        })
      }
    </ResponsiveGridLayout>
  );
};

// gridState.layouts[gridState.breakpoints]
// <WrapperNoScroll key={memo.i}>
//   <Memo bgColor={memo.bgColor} content={memo.content} />
// </WrapperNoScroll>

/* AppBody 컴포넌트 */
function AppBody(props) {
  return (
    <WrapperScroll className={"no-scrollbar"}>
      <CorkBoard isMobile={props.isMobile} memos={props.memos} />
    </WrapperScroll>
  );
}

export default AppBody;
