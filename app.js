const cards=document.querySelectorAll('.memory-card');
let firstCard;
let secondCard;
let hasflipCard=false;
let lockboard=false;
let score;
let turns;

function flipCard(){
    if(lockboard) return;
    if(this===firstCard) return;
    this.classList.add('flip');
if(!hasflipCard){
    hasflipCard=true;
    firstCard= this;
    
    return;
}

    secondCard= this;
    checkMatch();
    
}
function checkMatch(){
    let match=firstCard.dataset.framework===secondCard.dataset.framework;
       match ? disableCard():unflipCard();
     
}
function disableCard(){
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
    resetBoard();
}
function unflipCard(){
    lockboard=true;

    setTimeout(() =>{
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip');
        resetBoard();
        },1500)
}
function resetBoard(){
    [hasflipCard,lockboard]=[false,false];
    [firstCard,secondCard]=[null,null]
}
(function shuffle(){
    cards.forEach(card=>{
        let randomnum=Math.floor(Math.random()*12)
        card.style.order=randomnum;
    })
})();
cards.forEach(card=>card.addEventListener('click',flipCard));
