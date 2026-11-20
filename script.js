document.getElementById('year').textContent = new Date().getFullYear();
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
menuToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navMenu.classList.remove('open')));
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('patientName').value.trim();
  const phone = document.getElementById('patientPhone').value.trim();
  const tests = document.getElementById('patientTests').value.trim() || 'Not specified';
  const address = document.getElementById('patientAddress').value.trim();
  const message = `Home collection request - PrimePath Diagnostics%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ATests: ${encodeURIComponent(tests)}%0AAddress: ${encodeURIComponent(address)}`;
  window.open('https://wa.me/917889509917?text=' + message, '_blank');
});
