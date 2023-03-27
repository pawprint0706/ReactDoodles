import React, { useState, useReducer } from 'react';
import './App.css';

function App() {
  // useState: 은행의 장부에 고객이 직접 기록하는 것과 같다.
  /*
  ┌───── 은행 ─────┐
  │  장부(state) <-│- 고객(event)
  └────────────────┘
  */
  /*
  const [count, setCount] = useState(0);
  function down() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  function up() {
    setCount(count + 1);
  }
  */
  // useReducer: 은행의 장부에 은행직원을 통해서 기록하는 것과 같다.
  /*
  ┌─────────────────────────── 은행 ────────────────────────────┐
  │  장부(state) <-- 회계직원(reducer) <-- 창구직원(dispatch) <-│- 주문(action) <-- 고객(event)
  └─────────────────────────────────────────────────────────────┘
  */
  /*
  function countReducer(oldCound, action) {
    switch(action) {
      case 'DOWN':
        return oldCound - 1;
      case 'RESET':
        return 0;
      case 'UP':
        return oldCound + 1;
      default:
        return oldCound;
    }
  }
  const [count, countDispatch] = useReducer(countReducer, 0);
  function down() {
    countDispatch('DOWN');
  }
  function reset() {
    countDispatch('RESET');
  }
  function up() {
    countDispatch('UP');
  }

  return (
    <div>
      <input type="button" value="-" onClick={down}/>
      <input type="button" value="0" onClick={reset}/>
      <input type="button" value="+" onClick={up}/>
      <br />
      <span>{count}</span>
    </div>
  );
  */
  // 입력창을 추가한 개선 버전(useReducer)
  const [number, setNumber] = useState(1);
  // reducer 함수는 순수한수여야 하므로 직접 number에 접근하는 것은 좋지 않다.
  // 따라서 action에 number를 추가하여 reducer 함수에서는 action.number를 사용한다.
  function countReducer(oldCound, action) {
    switch(action.type) {
      case 'DOWN':
        return oldCound - action.number;
      case 'RESET':
        return 0;
      case 'UP':
        return oldCound + action.number;
      default:
        return oldCound;
    }
  }
  const [count, countDispatch] = useReducer(countReducer, 0);
  function down() {
    countDispatch({ type: 'DOWN', number: number });
  }
  function reset() {
    countDispatch({ type: 'RESET', number: number });
  }
  function up() {
    countDispatch({ type: 'UP', number: number });
  }
  // 입력창의 값이 변경되면 number의 값을 변경한다.
  function changeNumber(event) {
    setNumber(Number(event.target.value));
  }
  
  return (
    <div>
      <input type="button" value="-" onClick={down}/>
      <input type="button" value="0" onClick={reset}/>
      <input type="button" value="+" onClick={up}/>
      <br />
      <input type="text" value={number} onChange={changeNumber} />
      <br />
      <span>{count}</span>
    </div>
  );
}

export default App;
