// store와 교류하는 container component
/*
import React from 'react';
import store from '../store';
import AddNumber from '../components/AddNumber';

export default () => { // 익명함수로 export
  return (
    <AddNumber onClick={
      (size) => {
        store.dispatch({ type: 'INCREMENT', size: size });
        // props 버블링을 통하는 것이 아닌 store에 직접적으로 값을 전달한다.
      }
    }></AddNumber>
  )
}
*/

// React-redux 도입
import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux';
// Redux의 dispatch를 React의 props로 매핑하는 함수
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (size) => {
      dispatch({ type: 'INCREMENT', size: size });
      // props 버블링을 통하는 것이 아닌 store에 직접적으로 값을 전달한다.
    }
  };
};
// connect()()는 connect()를 호출하고 그 결과를 다시 호출하는 것이다.
export default connect(null, mapDispatchToProps)(AddNumber);
