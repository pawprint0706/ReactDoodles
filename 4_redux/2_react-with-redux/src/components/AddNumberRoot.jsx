import React from 'react';
import AddNumber from '../components/AddNumber';

function AddNumberRoot() {
  // props 버블링을 사용하지 않으므로 별도의 처리가 필요 없어졌다.
  return (
    <div>
      <h1>Add Number Root</h1>
      <AddNumber></AddNumber>
    </div>
  );
}

export default AddNumberRoot;
