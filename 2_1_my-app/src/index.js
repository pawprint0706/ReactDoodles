import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/* import App from "./App"; */
import reportWebVitals from "./reportWebVitals";

// chapter_04 - Clock
// import Clock from "./chapter_04/Clock";
// chapter_05 - CommentList
// import CommentList from "./chapter_05/CommentList";
// chapter_06 - NotificationList
// import NotificationList from "./chapter_06/NotificationList";
// chapter_07 - Accommodate
// import Accommodate from "./chapter_07/Accommodate";
// chapter_08 - ConfirmButton
// import ConfirmButton from "./chapter_08/ConfirmButton";
// chapter_09 - LandingPage
import LandingPage from "./chapter_09/LandingPage";

// ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

/*
// Default
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
/*
// chapter_04 - Clock
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}, 1000);
*/
/*
// chapter_05 - CommentList
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);
*/
/*
// chapter_06 - NotificationList
root.render(
  // <React.StrictMode>
    <NotificationList />
  // </React.StrictMode>
  // 리액트18부터는 StrictMode에서 컴포넌트를 unmount 시켰다가 다시 한 번 remount 시킨다.
  // 즉, 한 컴포넌트가 두 번 렌더링 되므로 componentDidMount()가 두 번 호출된다.
  // 따라서 StrictMode를 사용하지 않거나 componentWillUnmount()에서 타이머를 해제해야 한다.
);
*/
/*
// chapter_07 - Accommodate
root.render(
  // <React.StrictMode>
    <Accommodate />
  // </React.StrictMode>
);
*/
/*
// chapter_08 - ConfirmButton
root.render(
  // <React.StrictMode>
    <ConfirmButton />
  // </React.StrictMode>
);
*/
// chapter_09 - LandingPage
root.render(
  // <React.StrictMode>
    <LandingPage />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
