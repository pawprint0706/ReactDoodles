import React from "react";
import Notification from "./Notification";

const reservedNoticiation = [
  {
    id: 1,
    message: "안녕하세요, 오늘 일정을 알려드립니다.",
  },
  {
    id: 2,
    message: "점심식사 시간입니다.",
  },
  {
    id: 3,
    message: "이제 곧 미팅이 시작됩니다.",
  },
];

let timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    const {notifications} = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNoticiation.length) {
        const index = notifications.length;
        notifications.push(reservedNoticiation[index]);
        this.setState({
          notifications: notifications,
        });
      } else {
        this.setState({
          notifications: [],
        });
        clearInterval(timer);
      }
    }, 1000);
  }

  // 리액트18 대응
  /*
  componentWillUnmount() {
    if (timer) {
      this.setState({
        notifications: [],
      });
      clearInterval(timer);
    }
  }
  */

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return <Notification
            key={notification.id}
            id={notification.id}
            message={notification.message}
          />;
        })}
      </div>
    );
  }
}

export default NotificationList;
