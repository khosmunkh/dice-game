//  Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0 , хоёрдугаар тоглогчийг 1 гэж тэмдэглэе
var activePlayer = 0;




// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч 
var playerScores= [0 , 0];



// Одоо эргүүлж буй тоглогчийн ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;






// Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө



//window.document.querySelector('#score-0').textContent = dice;
//Програм эхлэхэд бэлтгье  
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

var diceDom = document.querySelector(".dice");
diceDom.style.display = 'none';
// Шоог шидэх эвент листенэр 

document.querySelector('.btn-roll').addEventListener("click" ,function() 
{   
    var diceNumber = Math.floor(Math.random()*6) + 1;
    
    diceDom.style.display = "block";
    
    diceDom.src ='dice-' + diceNumber +'.png';

    if(diceNumber !== 1){
        //1- ээс ялгаатай тоо буулааа
        roundScore = roundScore + diceNumber; 
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }
    else{
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;
        activePlayer ===0 ? (activePlayer = 1) : (activePlayer = 0);
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        diceDom.style.display = "none";

    }
});




