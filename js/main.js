import { APIService } from './api.js';
import { DOMManager } from './dom.js';

const baseUrl = 'http://ec2-3-138-183-128.us-east-2.compute.amazonaws.com:4010';
const endpoint = 'users'; // Cambia a 'foods' si corresponde
const apiService = new APIService(baseUrl);
const domManager = new DOMManager(document.getElementById('item-list'), document.getElementById('item-form'));

// Función para cargar todos los usuarios
async function loadItems() {
  const items = await apiService.fetchItems(endpoint);
  if (items) {
    domManager.renderItems(items);
  } else {
    domManager.showMessage('No se pudieron cargar los usuarios', 'error');
  }
}

// Función para cargar un usuario por ID
async function loadSingleItem(id) {
  const item = await apiService.fetchSingleItem(endpoint, id);
  if (item) {
    domManager.renderSingleItem(item);
    domManager.showMessage('Usuario cargado correctamente');
  } else {
    domManager.showMessage('Usuario no encontrado', 'error');
  }
}

// Manejador de evento para el botón "Consultar Todos los Usuarios"
document.getElementById('load-all-btn').addEventListener('click', loadItems);

// Manejador de evento para el formulario de consulta por ID
document.getElementById('single-user-form').addEventListener('submit', event => {
  event.preventDefault();
  const userId = event.target.userId.value.trim();
  if (userId) {
    loadSingleItem(userId);
  } else {
    domManager.showMessage('Por favor ingrese un ID válido', 'error');
  }
});

// Manejador de evento para el formulario de creación/actualización
document.getElementById('item-form').addEventListener('submit', async event => {
  event.preventDefault();
  const name = event.target.name.value.trim();
  if (!name) return;
  
  const item = { name };
  const id = event.target.dataset.id;
  
  if (id) {
    const updatedItem = await apiService.updateItem(endpoint, id, item);
    if (updatedItem) {
      domManager.showMessage('Usuario actualizado correctamente');
      loadItems();
      domManager.clearForm();
    }
  } else {
    const newItem = await apiService.createItem(endpoint, item);
    if (newItem) {
      domManager.showMessage('Usuario creado correctamente');
      loadItems();
      domManager.clearForm();
    }
  }
});
