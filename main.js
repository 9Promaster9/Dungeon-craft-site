// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// ===== BURGER MENU =====
const burgerBtn = document.getElementById('burger-btn');
const mobileMenu = document.getElementById('mobile-menu');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ===== GAMEPLAY VIDEO TOGGLE =====
const gameplayVideo = document.getElementById('gameplay-video');
const playBtn = document.getElementById('play-btn');
const videoFrame = document.getElementById('gameplay-video-wrap');

if (playBtn && gameplayVideo) {
  playBtn.addEventListener('click', () => {
    if (gameplayVideo.paused) {
      gameplayVideo.play();
      videoFrame.classList.add('playing');
    } else {
      gameplayVideo.pause();
      videoFrame.classList.remove('playing');
    }
  });

  gameplayVideo.addEventListener('click', () => {
    if (gameplayVideo.paused) {
      gameplayVideo.play();
      videoFrame.classList.add('playing');
    } else {
      gameplayVideo.pause();
      videoFrame.classList.remove('playing');
    }
  });
}

// ===== COPY IP =====
function copyIP() {
  const ip = 'play.dungeoncraft.ru';
  const btn = document.getElementById('copy-btn');
  const label = document.getElementById('copy-label');

  navigator.clipboard.writeText(ip).then(() => {
    btn.classList.add('copied');
    label.textContent = 'Скопировано!';
    setTimeout(() => {
      btn.classList.remove('copied');
      label.textContent = 'Копировать';
    }, 2200);
  }).catch(() => {
    // Fallback
    const el = document.createElement('textarea');
    el.value = ip;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    label.textContent = 'Скопировано!';
    setTimeout(() => { label.textContent = 'Копировать'; }, 2200);
  });
}

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll(
  '.bento-card, .step, .vi-item, .gameplay-header, .join-title, .join-sub'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

// ===== STAGGER BENTO CARDS =====
const bentoCards = document.querySelectorAll('.bento-card');
bentoCards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 60}ms`;
});

// ===== STAGGER STEPS =====
const steps = document.querySelectorAll('.step');
steps.forEach((step, i) => {
  step.style.transitionDelay = `${i * 100}ms`;
});
