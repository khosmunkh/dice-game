
var roundScore = 0;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч 
var playerScores= [0 , 0];

// Одоо эргүүлж буй тоглогчийн ээлжийн оноог хадгалах хувьсагч

var activePlayer = 0;
var diceDom = document.querySelector(".dice");

newGame();
function newGame(){ 
    roundScore = 0;
    playerScores= [0 , 0];
    activePlayer = 0;
//window.document.querySelector('#score-0').textContent = dice;
//Програм эхлэхэд бэлтгье  
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
    diceDom.style.display = "none";

    
}

// Шоог шидэх эвент листенэр 

function playerSwitchToNextPlayer(){
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;
    activePlayer ===0 ? (activePlayer = 1) : (activePlayer = 0);
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceDom.style.display = "none";

}

document.querySelector('.btn-roll').addEventListener("click" ,function() 
{   
    // Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө
    var diceNumber = Math.floor(Math.random()*6) + 1;
    
    diceDom.style.display = "block";
    
    diceDom.src ='dice-' + diceNumber +'.png';

    if(diceNumber !== 1){
        //1- ээс ялгаатай тоо буулааа
        roundScore = roundScore + diceNumber; 
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }
    else{
        playerSwitchToNextPlayer();

    }
});


//Hold товчны эвент листенэр

document.querySelector('.btn-hold').addEventListener('click',function(){
playerScores[activePlayer] = playerScores[activePlayer] + roundScore;
document.getElementById('score-' +activePlayer).textContent = playerScores[activePlayer];  
if(playerScores[activePlayer] >= 100){
    document.getElementById('name-' + activePlayer).textContent = "Winner";
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
} 
else{
    playerSwitchToNextPlayer();
}



});

//Шинэ тоглоом эхлүүлэх товчны эвент листенэр

document.querySelector('.btn-new').addEventListener('click', newGame);

