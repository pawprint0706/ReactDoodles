import React, { useState } from 'react';
import store from '../store';

function DisplayNumber() {
  // props 버블링을 통하는 것이 아닌 store에서 직접적으로 값을 가져온다.
  const [number, setNumber] = useState(store.getState().number);
  store.subscribe(() => {
    setNumber(store.getState().number);
  });

  return (
    <div>
      <h1>Display Number</h1>
      <input type="text" value={number} readOnly></input>
    </div>
  );
}

export default DisplayNumber;
