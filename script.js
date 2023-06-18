let playerel=document.getElementById('player-el');
    let player={
        name: "Armaan",
        credits: '200'
    }
    playerel.textContent=player.name+ ": $"+player.credits;
    let cards=[];   
    let sum= 0;
    let hasblackjack=false;
    let isalive=false;
    let message="";
    let messageel=document.getElementById('message-el');
    let sumel=document.getElementById('sum-el');
    let cardsel=document.getElementById('cards-el');

    function getrandomcard(){
        let randomnumber = Math.floor(Math.random()*13)+1;
        if(randomnumber > 10){
            return 10;
        }
        else if(randomnumber === 1){
            return 11;
        }
        else{
            return randomnumber;
        }
    }

    function startgame(){
        isalive=true;
        let firstcard=getrandomcard();
        let secondcard=getrandomcard();
        cards =[firstcard, secondcard];
        sum=firstcard+secondcard;
        rendergame();
    }

    function rendergame(){
    cardsel.textContent = "Cards: ";
    sumel.textContent = "Sum: "+ sum;
    for(let i=0;i<cards.length;i++){
        cardsel.textContent+=cards[i]+ " "; 
    }
    if(sum<=20){
        message= "Do you want to draw a new card?";
    }
    else if(sum===21){
        message="You've got Blackjack!";
        hasblackjack=true;
    }
    else{
        message="You're out of the game!";
        isalive=false;
    }
    messageel.textContent= message;

}

function newcard(){
    if(isalive===true && hasblackjack===false){
    let thirdcard=getrandomcard();
    sum+=thirdcard;
    cards.push(thirdcard);
    rendergame();
}
}