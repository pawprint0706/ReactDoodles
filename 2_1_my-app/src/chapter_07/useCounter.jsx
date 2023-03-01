import React, { useState} from "react";

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => Math.max(count -1, 0)); // 카운트가 0보다 작아지지 않음

  return [count, increaseCount, decreaseCount];
}

export default useCounter;
