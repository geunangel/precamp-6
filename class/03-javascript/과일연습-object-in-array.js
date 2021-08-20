let fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
  ]
  // undefined
  fruits[0].number + fruits[1].title
  // "1샤인머스켓"
  fruits[0].number + fruits[0].title
  // "1레드향"
  fruits[1].number + fruits[1].title
  // "2샤인머스켓"
  fruits[2].number + fruits[2].title
  // "3산청딸기"
  fruits[3].number + fruits[3].title
  // "4한라봉"
  fruits[4].number + fruits[4].title
  // "5사과"
  fruits[5].number + fruits[5].title
  // "6애플망고"
  fruits[6].number + fruits[6].title
  // "7딸기"
  fruits[7].number + fruits[7].title
  // "8천혜향"
  fruits[8].number + fruits[8].title
  // "9과일선물세트"
  fruits[9].number + fruits[9].title
  // "10귤"
  fruits[0].number +" "+ fruits[0].title
  // "1 레드향"
  fruits[1].number +" "+ fruits[1].title
  // "2 샤인머스켓"
  fruits[2].number +" "+ fruits[2].title
  // "3 산청딸기"
  fruits[3].number +" "+ fruits[3].title
  // "4 한라봉"
  fruits[4].number +" "+ fruits[4].title
  // "5 사과"
  fruits[5].number +" "+ fruits[5].title
  // "6 애플망고"
  fruits[6].number +" "+ fruits[6].title
  // "7 딸기"
  fruits[7].number +" "+ fruits[7].title
  // "8 천혜향"
  fruits[8].number +" "+ fruits[8].title
  // "9 과일선물세트"
  fruits[9].number +" "+ fruits[9].title
  // "10 귤"


  //반복문으로 연습
  for(let i=0; i<10; i++){
    console.log(fruits[i].number+" "+fruits[i].title)
  }
  // 1 레드향
  // 2 샤인머스켓
  // 3 산청딸기
  // 4 한라봉
  // 5 사과
  // 6 애플망고
  // 7 딸기
  // 8 천혜향
  // 9 과일선물세트
  // 10 귤