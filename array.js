// 배열 : 여러 값을 하나의 변수에 저장, 월~일요일처럼, 대괄호 사용 []
// 배열에서 가장 중요한 것은 인덱스(숫자)다. 컴퓨터가 알아서 숫자를 저장... 0부터!
const dayofweeks = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];
console.log("🚀 ~ dayofweeks:", dayofweeks);

console.log(`오늘은 ${dayofweeks[1]}입니다`);

// 멀티캠퍼스 수강생 명단 만들기
const students = ["강", "김", "최", "박", "원", "이", "유"];
console.log("학생:", students);
console.log("학생 수:", students, length);
console.log(`이 학생의 성은 ${students[1]}입니다.`);
console.log("마지막 학생의 성은:", students[students.length - 1]);
