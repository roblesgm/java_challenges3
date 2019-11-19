list = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

let i= -1
let x= 1

function ready (){
    setInterval (() => {
        i = i + x
        if (i == 6) { 
            x = -1
        }
        if (i == 0) {
            x = 1
        }
        console.log(list[i])
        document.body.style.background = list[i];
    }, 500)
}

document.addEventListener("DOMContentLoaded", ready)