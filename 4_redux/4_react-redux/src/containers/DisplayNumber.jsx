// store와 교류하는 container component
/*
import React, { useState } from 'react';
import store from '../store';
import DisplayNumber from '../components/DisplayNumber';

export default () => { // 익명함수로 export
  // props 버블링을 통하는 것이 아닌 store에서 직접적으로 값을 가져온다.
  const [number, setNumber] = useState(store.getState().number);
  store.subscribe(() => {
    setNumber(store.getState().number);
  });

  return (
    <DisplayNumber number={number} unit={props.unit}></DisplayNumber>
  )
}
*/

// React-redux 도입
import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux';
// Redux의 state를 React의 props로 매핑하는 함수
const mapStateToProps = (state) => {
  return {
    number: state.number
  };
};
// connect()()는 connect()를 호출하고 그 결과를 다시 호출하는 것이다.
export default connect(mapStateToProps, null)(DisplayNumber);
