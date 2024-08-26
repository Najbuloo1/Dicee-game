let ranNum1 =  Math.floor((Math.random()*6)+1)
 let ranDice = 'dice' + ranNum1 +  '.png';
 let ranDomScr = 'images/'+ranDice;
 let img1 =  document.querySelectorAll("img")[0];
 img1.setAttribute("src",ranDomScr);

let ranNum2 =  Math.floor((Math.random()*6)+1);
let ranDice2 = 'dice' + ranNum2 +  '.png';
let ranDomScr2 = 'images/'+ranDice2;
document.querySelectorAll("img")[1].setAttribute("src",ranDomScr2);


if (ranNum1>=ranNum2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}if (ranNum1<=ranNum2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}if(ranNum1==ranNum2) {
    document.querySelector("h1").innerHTML = "Draw"
}