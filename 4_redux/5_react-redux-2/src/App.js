import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch/*, connect*/ } from 'react-redux';
// connect 없이 useSelector, useDispatch를 사용하여 구현
// connect는 컴포넌트를 presentation component / container component로 분리하여 재사용을 용이하게 할 때 유용하고
// 재사용을 고려하지 않는 단순한 경우에는 connect 없이 useSelector, useDispatch를 사용하여 간단하게 구현할 수 있다.

function reducer(currentState, action) {
  if (currentState === undefined) { // 초기값
    return { number: 0 };
  }
  const newState = {...currentState};
  if (action.type === 'INCREMENT') {
    newState.number++;
  }
  return newState;
}
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}

function Left1() {
  return (
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  );
}
function Left2() {
  return (
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  );
}
function Left3() {
  // const number = useSelector((state) => { return state.number; });
  const number = useSelector(state => state.number); // 간단하게 줄여서 표현 가능하다.
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
}

function Right1() {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}
function Right2() {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}
function Right3() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={() => {
        dispatch({ type: 'INCREMENT' });
      }}></input>
    </div>
  );
}
