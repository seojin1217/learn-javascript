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
console.log("학생 성:", students);
console.log("학생 수:", students.length);
console.log(`이 학생의 성은 ${students[1]}입니다.`);
console.log("마지막 학생의 성은:", students[students.length - 1]);

// 객체 : 배열이 여러값을 하나로 묶어서 저장하는데 비해, 객체도 마찬가지이지만 key와 value로 구성된 속성들의 묶음으로, 사전과 유사함. EX : 이름, 성별, MBTI, 오늘출석여부 등 여러 속성
// 변수 다음에 중괄호 {} 사용

const studentinfo = {
  myname: "서진",
  mbti: "INFP",
  attendance: true,
};
console.log("🚀 ~ studentinfo:", studentinfo);
// 객체가 가지고 있는 key 값에 상응하는 value 불러오는 방식은 아래와 같이 2가지임
console.log("이름:", studentinfo["myname"]);
console.log("이름:", studentinfo.myname);
console.log("MBTI:", studentinfo.mbti);

// 배열과 객체 혼합 사용 실습(배열(학생명)안에 여러 key 정보(객체) 들어있는 형식)
const studentlist = [
  {
    myname: "강경",
    mbti: "ISTJ",
    food: ["국밥", "밀면"],
  },
  {
    myname: "김광",
    mbti: "ISFJ",
    food: ["치킨", "햄버거"],
  },
  {
    myname: "김다",
    mbti: "INTP",
    food: ["파스타", "감자탕"],
  },
];
console.log("강경님의 MBTI:", studentlist[0].mbti);
console.log("마지막 학생 이름:", studentlist[studentlist.length - 1].myname);
