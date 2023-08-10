'use strict';

const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
  'Message Five',
  'Message ...',
];

const types = ['info', 'success', 'error']; // color class - just for fun
const getRandomType = () => types[Math.floor(Math.random() * types.length)];

const getRandomMessage = () =>
  messages[Math.floor(Math.random() * messages.length)];

// any massage in info or specific message with color class put in function
const createNotification = function (message = null, type = null) {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(type ? type : getRandomType()); // for a color of the message

  notif.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => notif.remove(), 2000);
};

button.addEventListener('click', () => createNotification());
