setTimeout(()=>{
    console.log("안녕하세요")
}, 2000)
//2 안녕하세요
setInterval(() => {
    console.log("안녕하세요")
}, 2000)


let timer = 10
undefined
setInterval(() => {
console.log(timer)
timer=timer-1
},1000)

let timer = 10
setInterval(() => {
    if(timer >=0){
        console.log(timer)
        timer = timer - 1
    }
},1000)


let timer = 180
setInterval(() => {
    if(timer >= 0){
    const minutes = Math.floor(timer / 60)
    const seconds = timer % 60

    console.log(String(minutes) + ":" + String(seconds))
    timer = timer - 1
    }
}, 1000)

let timer = 180
setInterval(() => {
    if(timer >= 0){
    const minutes = Math.floor(timer / 60)
    const seconds = timer % 60

    console.log(String(minutes) + ":" + String(seconds))
    timer -= 1
    }
}, 1000)