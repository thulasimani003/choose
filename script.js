function checkAnswer(option) {
    const correctAnswer = 'D';
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('correct', 'incorrect');
    });
    if (option === correctAnswer) {
        document.getElementById('option' + option).classList.add('correct');
    } else {
        document.getElementById('option' + option).classList.add('incorrect');
    }
}
