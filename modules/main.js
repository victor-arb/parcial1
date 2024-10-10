import { API } from './api.js';
import { DOMManager } from './dom.js';

document.addEventListener('DOMContentLoaded', () => {
  const api = new API('http://ec2-3-138-183-128.us-east-2.compute.amazonaws.com:4010');
  const container = document.getElementById('main');
  const form = document.getElementById('userForm');
  const loadUsersBtn = document.getElementById('loadUsersBtn');
  const userIdInput = document.getElementById('userIdInput');
  const loadUserBtn = document.getElementById('loadUserBtn');

  const domManager = new DOMManager(container, form, api);

  loadUsersBtn.addEventListener('click', async () => {
    await domManager.loadUsers();
  });

  loadUserBtn.addEventListener('click', async () => {
    const userId = userIdInput.value.trim();
    if (userId) {
      const user = await api.getUserById(userId);
      if (user) {
        domManager.populateForm(user);
        domManager.renderItems([user]);
      } else {
        alert("Usuario no encontrado");
      }
    } else {
      alert("Por favor, ingrese un ID válido");
    }
  });
});
