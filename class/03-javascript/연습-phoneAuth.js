Math.max(1, 3, 2)
//3
Math.min(1, 3, 2)
//1
Math.random()
//0.9851694859898787
Math.random() * 1000000
//659376.0632318056
Math.random() * 1000000
//39107.0092920176


Math.floor(Math.random() * 1000000)
//822586
Math.floor(Math.random() * 1000000)
//172255
Math.random() * 1000000
//823531.4098992577
Math.random()
//0.7055024254690514
String(2356)
//"2356"
String(2356).padStart(6,"0")
//"002356"
Math.random() * 1000000
//183548.72274361833
Math.floor(Math.random() * 1000000)
//899873
String(Math.floor(Math.random() * 1000000))
//"786157"

//padStart를 쓰려면 문자로 바꿔줘야 함 그게 String
String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
//"294136"
const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
//undefined
token
//"617801"
token
//"617801"

function getToken(){
    const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")  
    console.log(token)
}
//undefined

const getToken2 = function(){
    const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")  
    console.log(token)
}

undefined
const getToken3 = () => {
    const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")  
    console.log(token)
}

undefined
getToken2
ƒ (){
    const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")  
    console.log(token)
}
getToken2()
VM1311:3 100493
undefined
getToken3()
VM1325:3 575180
undefined