// scroll
const animates = document.querySelectorAll('.animate');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.8;
  animates.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add('show');
    }
  });
});

window.addEventListener('load', () => {
  const intro = document.querySelector('#home .animate');
  if (intro) {
    intro.classList.add('show');
  }
});

const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href'); 
    const targetEl = document.querySelector(targetId);

    if (targetEl) {
      const animEls = targetEl.querySelectorAll('.animate');
      animEls.forEach(el => {
        el.classList.remove('show');
        setTimeout(() => {
          el.classList.add('show');
        }, 100);
      });
    }
  });
});

// modal
function showModal(jabatan, nama, foto) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-title").innerText = jabatan;
  document.getElementById("modal-text").innerText = nama;
  document.getElementById("modal-img").src = foto;
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
