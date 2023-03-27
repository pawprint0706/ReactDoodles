import React from 'react';
import DisplayNumber from '../components/DisplayNumber';

function DisplayNumberRoot() {
  // props 버블링을 사용하지 않으므로 별도의 처리가 필요 없어졌다.
  return (
    <div>
      <h1>Display Number Root</h1>
      <DisplayNumber></DisplayNumber>
    </div>
  );
}

export default DisplayNumberRoot;