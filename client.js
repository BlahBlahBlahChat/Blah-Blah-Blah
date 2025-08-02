document.addEventListener('DOMContentLoaded', () => {
  const socket = io();
  const form = document.getElementById('chat-form');
  const input = document.getElementById('message-input');
  const messages = document.getElementById('messages');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const trimmed = input.value.trim();
    if (trimmed) {
      socket.emit('chat message', trimmed);
      input.value = '';
    }
  });

  socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
  });
});
