// store의 존재를 모르고 버튼으로 입력만 받는 presentation component
import React, { useState } from 'react';

function AddNumber(props) {
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
          props.onClick(size);
        }
      }></input>
    </div>
  );
}

export default AddNumber;
