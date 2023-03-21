let o1 = { name: 'kim', score: [1, 2] };
Object.freeze(o1); // 객체를 불변으로 만든다.
o1.name = 'lee'; // 무시된다.
console.log(o1);
// 한 번 freeze된 객체는 다시 수정할 수 없다.
// 수정이 필요하다면 객체를 복제하여 사용해야 한다.
o1.city = 'seoul'; // 새로운 프로퍼티를 추가하는 것도 무시된다.
console.log(o1);
o1.score.push(3); // freeze는 nested(중첩)된 객체까지 불변으로 만들지 않는다.
Object.freeze(o1.score); // nested 객체를 추가적으로 불변으로 만들어야 한다.
// o1.score.push(4); // 수정할 수 없다.
console.log(o1); // TypeError: Cannot add property 3, object is not extensible


// const와 freeze는 무엇이 다른가?
// const는 변수가 참조하는 대상을 변경하지 못하게 한다.
// 원시값의 경우 값이 변경되는 것과 참조가 바뀌는 것이 동일하므로 값이 재할당 되지 못하며
// 객체의 경우 새로운 객체로 참조를 바꿀 순 없으나 객체의 프로퍼티는 변경할 수 있다.
// freeze는 객체의 프로퍼티를 변경하지 못하게 한다.
// 따라서 const와 freeze를 병행하면 객체가 할당된 변수의 참조와 값을 모두 불변으로 만들 수 있다.
const o2 = { name: 'kim', score: [1, 2] };
Object.freeze(o2);
Object.freeze(o2.score);
// o2 = o1; // TypeError: Assignment to constant variable.
o2.name = 'lee'; // 무시된다.
// o2.score.push(3); // TypeError: Cannot add property 2, object is not extensible
console.log(o2);
