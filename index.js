let playEl = document.getElementById("play");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let isAlive = false;
let cards = [];
let sum = 0;
let message = "";
let  hasBlackJack = false;
function getRandomCard(){
    let randomNum = Math.floor((Math.random() * 13)+1);
    if(randomNum >= 10){
        return 10;
    }else if(randomNum === 1){
        return 11;
    }else{
        return randomNum;
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard =getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
    // console.log(sum)
}

function renderGame(){
    cardsEl.textContent = "Cards :";
    for(let i=0 ; i< cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum<21){
        message = "Want to draw a new card?";
    }else if(sum === 21){
        message = "You have got BlackJack";
        hasBlackJack = true;
    }else{
        message = "You are out of Game";
        isAlive = false;
    }
    playEl = message;
}
function newCard(){
    if(isAlive === true && hasBlackJack === false){
        
    }

}