var highScoresList = document.getElementById('highScoresList');
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];


highScores.map( score => {
    return "<li class='high-score'>${score.name}-${score.score}</li>";
});
.join(**);
console.log(highScores);