import React from "react";

const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Debbie" },
  { id: 5, name: "Eve" },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student, index) => {
        return <li key={student.id}>{student.name}</li>; // key 속성을 추가해야 한다.
        // return <li key={index}>{student.name}</li>; // index를 key로 추가할 수도 있다. (권장하진 않음)
        // return <li key={`student-id-${student.id}`}>{student.name}</li>; // key를 포매팅된 문자열로 변경할 수도 있다.
      })}
    </ul>
  );
}

export default AttendanceBook;
