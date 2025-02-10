let opacity = 1;

function openEnvelope() {
    document.getElementById('landing').classList.add('hidden');
    document.getElementById('question').classList.remove('hidden');
}

function moveNo() {
    let noBtn = document.getElementById('noBtn');
    
    // Generate random positions but keep it inside the view
    let x = Math.random() * (window.innerWidth - 150);
    let y = Math.random() * (window.innerHeight - 150);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Gradually fade out
    opacity -= 0.1; 
    noBtn.style.opacity = opacity;

    // Remove button when fully faded
    if (opacity <= 0) {
        noBtn.style.display = "none";
    }
}

function showFinal() {
    document.getElementById('question').classList.add('hidden');
    document.getElementById('final').classList.remove('hidden');
}
