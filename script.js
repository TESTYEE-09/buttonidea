const form = document.querySelector('#interestForm');
const note = document.querySelector('#formNote');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value.trim();
  const list = JSON.parse(localStorage.getItem('tapback-interest') || '[]');

  if (!list.includes(email)) {
    list.push(email);
    localStorage.setItem('tapback-interest', JSON.stringify(list));
  }

  note.textContent = 'You’re on the list. I’ll post prototype updates here soon.';
  form.reset();
});

document.querySelectorAll('.device button').forEach((button) => {
  button.addEventListener('click', () => {
    const label = button.getAttribute('aria-label');
    note.textContent = `${label} ping sent. That’s the idea.`;
  });
});
