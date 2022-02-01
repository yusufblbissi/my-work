//dice = Math.floor(Math.random() * 6) + 1;

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


//var x = document.querySelector('#score-0').textContent;

//document.querySelector('.dice').style.display = 'none';
var scores, roundScore, activePlayer, gameplaying;




init();





document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gameplaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
        // var diceDom = document.querySelector('.dice ');
        //  diceDom.style.display = 'block';
        // document.querySelector(".dice").src='اسم الصورة'+dice+'نوع الصورة.'
        if (dice != 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {

            nextPlayer();

        }
    }
    //1.rondom number

});






document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gameplaying) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer + 'panel').classList.add('winner');
            document.querySelector('#name-' + activePlayer + 'panel').classList.remove('active');
            gameplaying = false;
        } else { nextPlayer() };

    };


});




function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active')
        // document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.dice').style.display = 'none';
};
document.querySelector('.btn-new').addEventListener('click', init);






function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gameplaying = true;
    //document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player1';
    document.getElementById('name-1').textContent = 'Player2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};