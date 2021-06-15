
//Тоглоом дууссан эсэхийг шалгах хувьсагч;
var isNewGame;
// Одоо эргүүлж буй тоглогчийн ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч 
var playerScores= [0 , 0];
var activePlayer = 0;
var diceDom = document.querySelector(".dice");

newGame();
//Програм эхлэхэд бэлтгье  
function newGame(){
    isNewGame = true;
    roundScore = 0;
    playerScores= [0 , 0];
    activePlayer = 0;
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



function playerSwitchToNextPlayer(){
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;
    activePlayer ===0 ? (activePlayer = 1) : (activePlayer = 0);
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceDom.style.display = "none";

}
// Шоог шидэх эвент листенэр 
document.querySelector('.btn-roll').addEventListener("click" ,function() 
{   
    // Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө
    if (isNewGame){
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
    }
    else{
        alert("Тоглоом дууссан байна, New game товч даран дахин тоглоно уу :P");
    }

});


//Hold товчны эвент листенэр

document.querySelector('.btn-hold').addEventListener('click',function(){
if(isNewGame)
{
    playerScores[activePlayer] = playerScores[activePlayer] + roundScore;
document.getElementById('score-' +activePlayer).textContent = playerScores[activePlayer];  
if(playerScores[activePlayer] >= 50){
    isNewGame = false;
    document.getElementById('name-' + activePlayer).textContent = "Winner!";
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
} 
else{
    playerSwitchToNextPlayer();
}
}
else{
    alert("Тоглоом дууссан байна, New game товч даран дахин тоглоно уу :P");
}
});

//Шинэ тоглоом эхлүүлэх товчны эвент листенэр

document.querySelector('.btn-new').addEventListener('click', newGame);

