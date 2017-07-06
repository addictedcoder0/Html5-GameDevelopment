/*
GAME RULES:
 
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores = [0, 0];
var roundScore = 0;
var activePlayer = 0; // 1 for second player
//var dice = Math.floor(Math.random() * 6) + 1; // some random number

//object that will give access to the DOM => Document Object 

// if the content is simple string then use 'textContent' .
//document.querySelector('#current-0').textContent = dice;

//if the content is html then use 'innerHTML' .
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
var globalScore = document.querySelector('#score-0').textContent;
    
// using queryselector change the css of dice , make it invisible
document.querySelector('.dice').style.display = 'none';

//function btn_click() {
//    // on click action
//}
// 'click' is a event binded with btn_click() call => callback function
//document.querySelector('.btn-roll').addEventListener('click', btn_click);

//init the initial scores to 0
// if you have ID then go for getElementById(),it is faster compare to querySelector
document.getElementById('score-0').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-1').textContent = 0;

document.querySelector('.btn-roll').addEventListener('click', function () {
    // anonymous function
    // 1 . generate random number
    var dice = Math.floor(Math.random() * 6) + 1; // some random number
    // 2 . Display the result
    var diceDOM =  document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice+'.png';
    // 3. Update the count iff the rolled number !== 1
    
});

