// 변수 선언
let v = 1;
// 엄청나게 많은 코드가 ~
v = 2; // 누가 수정했어?
// 또 엄청나게 많은 코드가 ~
console.log('v: ', v); // 왜 1이 아님?
// 상수 선언
const c = 1;
// 엄청나게 많은 코드가 ~
// c = 2; // 누군가 또 수정했네
// 또 엄청나게 많은 코드가 ~
console.log('c: ', c); // TypeError: Assignment to constant variable.


// 원시값과 객체의 비교
let p1 = 1;
let p2 = 1;
console.log(p1, p2, 'p1 === p2: ', p1 === p2); // true: 값이 같으면 같은 메모리를 참조
let o1 = { name: 'kim' };
let o2 = { name: 'kim' };
console.log(o1, o2, 'o1 === o2: ', o1 === o2); // false: 값이 같아도 다른 메모리를 참조


// 원시값의 불변성
let p3 = p1; // 값이 같으면 같은 메모리를 참조
console.log(p1, p3, 'p1 === p3: ', p1 === p3);
p3 = 2; // 값이 달라지면 새로운 메모리를 참조
console.log(p1, p3, 'p1 === p3: ', p1 === p3);
// 객체의 가변성
let o3 = o1; // 같은 객체를 참조
console.log(o1, o3, 'o1 === o3: ', o1 === o3); // true
o3.name = 'lee'; // 객체의 속성을 변경
console.log(o1, o3, 'o1 === o3: ', o1 === o3); // true: 같은 객체이므로 o3의 속성을 바꾼 것은 o1의 속성을 바꾼 것과 동일하다.


// 객체를 immutable하게 다루어 보자 (객체의 복사)
let o4 = Object.assign({}, o1); // o1의 속성을 복사하여 새로운 객체를 생성
console.log(o1, o4, 'o1 === o4: ', o1 === o4); // false: 복사한 객체이므로 다른 객체이다
o4.name = 'park'; // 객체의 속성을 변경
console.log(o1, o4, 'o1 === o4: ', o1 === o4); // false: 다른 객체이므로 o4의 속성을 바꾼 것은 o1의 속성을 바꾼 것과 다르다


// 중첩된 객체의 복사
let t1 = { name: 'kim', score: [1, 2] };
let t2 = Object.assign({}, t1); // t1의 속성을 복사하여 새로운 객체를 생성
console.log(t1, t2, 't1 === t2: ', t1 === t2, ' / t1.score === t2.score: ', t1.score === t2.score);
t2.score.push(3); // t2의 속성을 변경
console.log(t1, t2); // t2는 t1의 복사본 임에도 불구하고 score 속성은 t1을 참조하고 있기 때문에 t2의 score 속성을 변경하면 t1의 score 속성도 변경된다.
t2.score = t2.score.concat(); // t2의 score 속성을 복사하여 새로운 score 배열을 생성
// concat은 배열을 복사하고 ()안의 인자를 덧붙이는 함수이나 인자가 없으므로 복사만 하게 된다.
t2.score.push(4); // t2의 score 속성을 변경
console.log(t1, t2); // t2의 score 속성을 변경해도 t1의 score 속성은 변경되지 않는다.


// 불변성을 지키지 못하는 객체를 다루는 함수
function fn(student) {
  student.name = 'lee';
}
let s1 = { name: 'kim' };
fn(s1);
console.log(s1); // s1의 name 속성이 lee로 변경되었다.
// 의도하지 않았다면 원본이 손상된 것이다.

// 불변성을 지키면서 객체를 다루는 함수
function fnImmutable(student) {
  student = Object.assign({}, student);
  student.name = 'lee';
  return student;
}
s1 = { name: 'kim' };
let s2 = fnImmutable(s1);
console.log(s1, s2); // s1은 변경되지 않았고 s2는 변경되었다.
// 원본이 손상되지 않았다.


// 가변과 불변의 API 비교
let score = [1, 2, 3];
score.push(4); // 가변
console.log(score);
score = [1, 2, 3];
let score2 = score.concat(4); // 불변
console.log(score, score2);
// 특정 객체(배열)를 참조하는 상황
score = [1, 2, 3];
let score_a = score;
let score_b = score;
score.push(4); // 원본이 손상됨
console.log(score, score_a, score_b); // 원본이 손상되었기 때문에 score_a와 score_b도 손상됨
score = [1, 2, 3];
let score3 = score.concat(4); // 원본이 손상되지 않음
console.log(score, score3, score_a, score_b); // 원본이 손상되지 않았기 때문에 score_a와 score_b는 손상되지 않음
