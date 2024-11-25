// Modal Functionality
const modal = document.getElementById('signup-modal');
const modalOpenButtons = document.querySelectorAll('.cta-button[href="#signup-modal"]');
const closeButton = document.querySelector('.close-button');

modalOpenButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = 'block';
  });
});

closeButton.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (event) {
    if (this.getAttribute('href') !== '#signup-modal') {
      event.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Placeholder for additional interactivity scripts
