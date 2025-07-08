// if 조건문 : score 값이 60점 이상이면 pass 합격통지. if () {} 무조건 true, false 둘 중 하나로 나와야 조건식이 사용 가능함

const score = 92;
const pass = () => {
  console.log("합격!");
};
const fail = () => {
  console.log("불합격ㅠ");
};

if (score >= 60) {
  pass();
} else {
  fail();
}
// if-else 구문은 하나의 조건을 가지고 충족시 true, 미충족시 false 로 작성
// else 는 혼자 있을 수가 없고 if 구문 뒤에 나오게 됨.  else는 조건식 가질 수 없음
// 문법 : if (조건식) {} else {}
console.log("조건문 실행 완료!");

// elseif는 위와 달리 조건식 가질수 있음
// 점수에 따라 등급 지정할 때 사용(90점 이상은 A, 80이상은 B, 70이상은 C, 70미만은 전부 D)

if (score >= 90) {
  console.log("A등급");
} else if (score >= 80) {
  console.log("B등급");
} else if (score >= 70) {
  console.log("C등급");
} else {
  console.log("D등급");
}

// `` <- 백틱(물결표 아래 있는것) : 특별한 따옴표!! 문자열과 변수를 한 문장으로 연결

console.log("점수는", score, "점입니다");
console.log(`점수는 $(score)점 입니다`);

// 삼항 연산자(항이 3개) : 조건? value1(true일 경우 실행) : value2(false인 경우 실행)
score >= 60 ? pass() : fail();

// 연산자 소개 (자바에서 느낌표는 반전 역할 / ===는 데이터 형식까지 같을때 씀)
//  ==같다  ===정확히 같다  !=같지않다  !==정확히 같지않다  >크다  >=크거나 같다  <작다  <==작거나 같다
// 자바에서 false로 간주되는것 : 0, ''같은 빈 문자열, null, undefined
