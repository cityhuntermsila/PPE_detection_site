function openDemo() {
  document.getElementById("videoModal").style.display = "flex";
}

function closeDemo() {
  document.getElementById("videoModal").style.display = "none";
}

// Fermer en cliquant dehors
window.onclick = function(event) {
  const modal = document.getElementById("videoModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// === FAQ ACCORDION ===
document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const isActive = item.classList.contains('active');

    // Ferme tous les autres
    document.querySelectorAll('.accordion-item').forEach(i => {
      i.classList.remove('active');
    });

    // Ouvre celui cliqué si pas déjà actif
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// === FORMULAIRE CONTACT (Formspree + Feedback) ===
const form = document.getElementById('contactForm');
const messageDiv = document.getElementById('form-message');

form.addEventListener('submit', async function(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    messageDiv.textContent = 'Merci ! Votre message a été envoyé. Nous vous répondrons sous 24h.';
    messageDiv.className = 'form-message success';
    form.reset();
  } else {
    messageDiv.textContent = 'Erreur. Veuillez réessayer ou nous contacter par email.';
    messageDiv.className = 'form-message error';
  }
  messageDiv.style.display = 'block';
});