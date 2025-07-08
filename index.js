// console.log("후츠릿 구독 좋아요");
// 자바스크립트에서 주석은 ctrl + 슬래쉬

const youtube = "후츠릿";
// 유투브라는 상수에 후츠릿이란 값을 집어넣겠다는 뜻. 하나의 변수는 같은 자바안에서 고유해야함

let comment = "구독 좋아요";
console.log("🚀 ~ comment:", comment);
// let 은 변수, const 는 상수. 상수는 재할당이 불가, 변수는 가능

console.log("youtube", youtube);
comment = "알림설정";
// 이미 정의되어 있는 구독 좋아요를 '알림설정'으로 재할당하겠다는 뜻.
console.log("🚀 ~ comment:", comment);
// 변경 이후부터 실행된 콘솔로그부터 변경값으로 사용됨. 순차적으로 사용됨.

// 데이터형식에는 총4가지(숫자,문자열,불린,null/undefined)
const number = 1;
console.log("🚀 ~ number:", number);
const number2 = "1";
console.log("🚀 ~ number2:", number2);
// 문자 타입은 ' ' 안에 넣어주어야 하고 숫자 타입은 그냥 숫자만 써줌
const bool = true;
console.log("🚀 ~ bool:", bool, typeof bool);
// 불린(boolean) 타입은 true,false 2종류만 있음
const empty = null;
console.log("🚀 ~ empty:", empty, "/ 타입:", typeof empty);
let empty2;
console.log("🚀 ~ empty2:", empty2, "타입", typeof empty2);
// empty2 라는 변수를 선언했지만 값은 할당하지 않은 상태(undefined, 개발자의 실수)

const myname = "서진";
console.log("🚀 나의 이름:", myname);
const age = "35";
console.log("🚀 나의 나이:", age);

// 함수 만들어보기.  function 으로 정의하고 ()으로 실행
console.log("🎄🎄");
// // 함수를 선언(정의)한다. 저 이모티콘 단축기는 윈도우 + 마침표

// // function helloworld() {
// //   // 이 중괄호{} 안에 부분은 실행 로직 부분임. 함수 실행시 동작부분.
// //   console.log("hello world!! 🎀");
// // }
// helloworld();
// // 함수를 호출(실행)한다! () 사용
// 요즘은 function 함수 사용 안하고 밑에 화살표함수를 사용함. 아래것 쓸것.

const helloworld = () => {
  console.log("hello world!! 🎀");
};
helloworld();

const userinfo = () => {
  console.log("🎁 나의 이름:", myname, "/ 나의 나이:", age);
};
userinfo();
