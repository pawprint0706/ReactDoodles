import React from 'react';
import AddNumber from '../components/AddNumber';

function AddNumberRoot(props) {
  return (
    <div>
      <h1>Add Number Root</h1>
      <AddNumber onClick={
        (size) => {
          props.onClick(size);
        }
      }></AddNumber>
    </div>
  );
}

export default AddNumberRoot;
