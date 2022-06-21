
let randomNumber = Math.floor(Math.random() * 6) + 1;
let p = "images/dice"+randomNumber+".png"


document.querySelectorAll("img")[0].setAttribute("src",p)

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let p2 = "images/dice"+randomNumber2+".png"


document.querySelectorAll("img.img2")[0].setAttribute("src",p2)
         
if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!"
}
if(randomNumber < randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins!"
}
if(randomNumber === randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩"
}