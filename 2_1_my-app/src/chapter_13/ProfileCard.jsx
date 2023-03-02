import React from "react";
import Card from "./Card";

function ProfileCard(props) {
  return (
    <Card title="김영찬" backgroundColor="lightblue">
      <p>안녕하세요. 저는 김영찬입니다.</p>
      <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
    </Card>
  );
}

export default ProfileCard;
