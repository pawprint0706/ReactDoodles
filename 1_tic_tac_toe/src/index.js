import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 게임판의 버튼을 표시하는 컴포넌트
function Square(props) { // 함수 컴포넌트
  return (
    // 3. 전달 받은 props를 통해 Board의 state를 표시
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// 게임판을 표시하는 컴포넌트
class Board extends React.Component { // 클래스 컴포넌트
  // 게임판의 버튼을 렌더링하는 함수
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]} // 2. Game의 props로 전달받은 state를 Square의 props로 전달
        onClick={() => this.props.onClick(i)} // 1. 버튼 클릭시 X/O 값을 Game의 state에 저장
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// 최상위 컴포넌트 (화면 레이아웃 구성)
class Game extends React.Component {
  constructor(props) {
    super(props); // 리액트에서 생성자에서는 반드시 super(props)를 호출해야 함
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true, // X가 먼저 시작
    };
  }

  // 게임판의 버튼을 클릭했을 때 호출되는 함수
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1); // 이전 턴까지의 기록을 저장 (불변성 유지)
    const current = history[history.length - 1];
    const squares = current.squares.slice(); // squares는 불변성 유지 (매 턴의 상태를 저장)
    if (calculateWinner(squares) || squares[i]) { // 승자가 있거나 이미 클릭된 버튼이면 함수 종료
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat( // concat: 기존 배열을 변경하지 않고 두 배열을 이어 붙인 새로운 배열을 반환
        [
          {
            squares: squares, // 이번 턴의 상태를 저장
          }
        ]
      ),
      stepNumber: history.length, // 이번 턴의 순서
      xIsNext: !this.state.xIsNext, // 다음 턴의 상대
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0, // step이 짝수면 X, 홀수면 O
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return ( // key: 배열을 렌더링할 때 효율적으로 업데이트하기 위해 사용
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// 리액트DOM에서 Game 컴포넌트 실행 (main 역할)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

// 승자를 판단하는 함수
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // 가로 첫번째 줄
    [3, 4, 5], // 가로 두번째 줄
    [6, 7, 8], // 가로 세번째 줄
    [0, 3, 6], // 세로 첫번째 줄
    [1, 4, 7], // 세로 두번째 줄
    [2, 5, 8], // 세로 세번째 줄
    [0, 4, 8], // 대각선 좌상단에서 우하단으로
    [2, 4, 6], // 대각선 우상단에서 좌하단으로
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; // 구조 분해 할당
    // 첫번째(첫번째 값 null 체크) && 첫번째와 두번째 비교 && 첫번째와 세번째 비교
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // 승자의 값을 반환
    }
  }
  return null; // 승자가 없으면 null 반환
}
