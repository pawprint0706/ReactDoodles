// store의 존재를 모르고 props로 전달받은 값을 표시하는 presentation component
import React from 'react';

function DisplayNumber(props) {
  return (
    <div>
      <h1>Display Number</h1>
      <input type="text" value={props.number} readOnly></input>
    </div>
  );
}

export default DisplayNumber;
