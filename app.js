//  Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0 , хоёрдугаар тоглогчийг 1 гэж тэмдэглэе
var activePlayer = 0;




// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч 
var playerScores= [0 , 0];



// Одоо эргүүлж буй тоглогчийн ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;






// Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө
var dice =  
//window.document.querySelector('#score-0').textContent = dice;
//Програм эхлэхэд бэлтгье  
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener("click",shooShid) 
var diceDom = document.querySelector(".dice");
diceDom.style.display = 'none';
function shooShid()
{
    diceDom.style.display = "block";
    var diceNumber = Math.floor(Math.random()*6) + 1;
    diceDom.src ='dice-' + diceNumber +'.png'


}
console.log('Шоо :', dice);

