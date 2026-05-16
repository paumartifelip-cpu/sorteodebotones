const choicesDiv = document.getElementById('choices');
const resultArea = document.getElementById('result-area');
const resultMessage = document.getElementById('result-message');

function playGame() {
    // Ocultar botones de elección
    choicesDiv.style.display = 'none';
    
    // Determinar resultado (50% de probabilidad de ganar)
    const isWin = Math.random() >= 0.5;
    
    if (isWin) {
        resultMessage.textContent = '¡Has ganado!';
        resultMessage.className = 'win';
    } else {
        resultMessage.textContent = '¡Has perdido!';
        resultMessage.className = 'lose';
    }
    
    // Mostrar mensaje y botón de volver a jugar
    resultArea.classList.remove('hidden');
}

function resetGame() {
    // Ocultar área de resultados
    resultArea.classList.add('hidden');
    
    // Volver a mostrar los botones
    choicesDiv.style.display = 'flex';
}
