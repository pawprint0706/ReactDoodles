// store와 교류하는 container component
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
