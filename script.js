document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('message').textContent = 'Thanks for your message!';
  this.reset();
});
