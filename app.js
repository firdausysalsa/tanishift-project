function enterDashboard() {
  const intro = document.getElementById('introScreen');
  if (intro) {
    intro.style.opacity = '0';
    intro.style.visibility = 'hidden';
    document.body.classList.remove('overflow-hidden');
    setTimeout(() => {
      intro.style.display = 'none';
    }, 400);
  }
}

function resetToIntro() {
  const intro = document.getElementById('introScreen');
  if (intro) {
    intro.style.display = 'flex';
    intro.style.visibility = 'visible';
    intro.style.opacity = '1';
    document.body.classList.add('overflow-hidden');
  }
}