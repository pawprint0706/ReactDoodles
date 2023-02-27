import React from "react";
import Comment from "./Comment";

const comments = [
  {name: "김영찬", comment: "안녕하세요."},
  {name: "홍길동", comment: "처음뵙겠습니다."},
  {name: "이인제", comment: "안녕하세요, 소플입니다."},
]

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        );
      })}
    </div>
  );
}

export default CommentList;
