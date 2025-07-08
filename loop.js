// for(정의 ; 조건식 ; 증감){}
// 이 중괄호 {}는 반복 조건식이 true인 경우 실행하는 곳 / false 되는순간 이 구문 빠져나감!

let count = 0;

for (let i = 0; i < 10; i++) {
  console.log(i, "번째 실행중");
  count = count + 1;
}

//  count = count + 1; 구문과,  count += 1; 은 구문상 같다

console.log("최종 실행수(count):", count);
console.log("🎨반복문 끝⏰");

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

for (let i = 0; i < studentlist.length; i++) {
  console.log(studentlist[i].myname, "님의 mbti:", studentlist[i].mbti);
}
