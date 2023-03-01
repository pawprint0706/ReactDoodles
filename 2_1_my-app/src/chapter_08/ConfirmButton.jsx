/*
// 클래스 컴포넌트에서 이벤트 처리
import React from "react";

class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isConfirmed: false,
    };
    // 1. 일반적인 bind 방법
    // this.handleConfirm = this.handleConfirm.bind(this);
    // 2. 클래스 필드 문법 방법 (bind를 하지 않아도 된다.)
  }

  // handleConfirm() { // 1. 일반적인 bind 방법
  handleConfirm = () => { // 2. 클래스 필드 문법 방법 (Allow function)
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }));
  }

  render() {
    return (
      <button
        onClick={this.handleConfirm}
        disabled={this.state.isConfirmed}
        >
          {this.state.isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
  }
}
*/
// 함수형 컴포넌트에서 이벤트 처리
import React, { useState } from "react";

function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  };

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
        {isConfirmed ? "확인됨" : "확인하기"}
      </button>
  );
}

export default ConfirmButton;
