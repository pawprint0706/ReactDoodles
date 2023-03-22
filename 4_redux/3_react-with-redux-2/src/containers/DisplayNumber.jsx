// store와 교류하는 container component
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
    <DisplayNumber number={number}></DisplayNumber>
  )
}
