function enterDashboard() {
  const intro = document.getElementById('introScreen');
  if (intro) {
    intro.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
    setTimeout(() => {
      intro.style.display = 'none';
    }, 500);
  }
}

function resetToIntro() {
  const intro = document.getElementById('introScreen');
  if (intro) {
    intro.style.display = 'flex';
    document.body.classList.add('overflow-hidden');
    setTimeout(() => {
      intro.classList.remove('opacity-0', 'pointer-events-none');
    }, 10);
  }
}