import React, { useState } from 'react';
import store from '../store';

function AddNumber() {
  const [size, setSize] = useState(1);

  return (
    <div>
      <h1>Add Number</h1>
      <input type="text" value={size} onChange={
        (event) => {
          setSize(Number(event.target.value)); // input으로 받은 String값을 Number로 변환
        }
      }></input>
      <input type="button" value="+" onClick={
        () => {
          store.dispatch({ type: 'INCREMENT', size: size });
          // props 버블링을 통하는 것이 아닌 store에 직접적으로 값을 전달한다.
        }
      }></input>
    </div>
  );
}

export default AddNumber;
