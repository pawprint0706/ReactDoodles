import './App.css';
import { useRecoilState } from 'recoil';
import { countState } from './atom';
function Counter() {
  const [count, setCount] = useRecoilState(countState);
  return (
    <div>
      <h1>Counter</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >Count UP</button>
      <br />
      <span>{count}</span>
    </div>
  );
}

function DisplayCounter() {
  const [count] = useRecoilState(countState);
  return (
  <div>
    <h1>Display Counter</h1>
    <span>{count}</span>
  </div>
  );
}

function App() {
  return <div>
    <Counter />
    <DisplayCounter />
  </div>;
}

export default App;
