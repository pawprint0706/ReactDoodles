import { createStore } from 'redux';

// Redux의 순서
// dispatch(action) -> reducer(state, action) -> store(state)

export default createStore((state, action) => {
  if (state === undefined) {
    return { number: 0 }; // 초기값
  }
  if (action.type === 'INCREMENT') {
    return { ...state, number: state.number + action.size };
    // 불변성과 관련된 내용
    // ...state는 state를 복제한다.
    // number: state.number + action.size는 복제된 state의 number의 값을 변경한다.
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// Redux DevTools를 사용하기 위한 코드