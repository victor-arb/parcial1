import { APIService } from './api.js';
import { DOMManager } from './dom.js';

const baseUrl = 'https://bbd7-2800-e2-2780-2479-2417-fe6c-d24e-ecb3.ngrok-free.app';
const endpoint = 'users'; // O 'foods' dependiendo de tu documento
const apiService = new APIService(baseUrl);
const domManager = new DOMManager(document.getElementById('item-list'), document.getElementById('item-form'));

async function loadItems() {
  const items = await apiService.fetchItems(endpoint);
  if (items) {
    domManager.renderItems(items);
  } else {
    domManager.showMessage('No se pudieron cargar los elementos', 'error');
  }
}

document.getElementById('item-form').addEventListener('submit', async event => {
  event.preventDefault();
  const name = event.target.name.value;
  if (!name) return;
  
  const item = { name };
  const id = event.target.dataset.id;
  
  if (id) {
    const updatedItem = await apiService.updateItem(endpoint, id, item);
    if (updatedItem) {
      domManager.showMessage('Elemento actualizado exitosamente');
      loadItems();
      domManager.clearForm();
    }
  } else {
    const newItem = await apiService.createItem(endpoint, item);
    if (newItem) {
      domManager.showMessage('Elemento creado exitosamente');
      loadItems();
      domManager.clearForm();
    }
  }
});

// Cargar los elementos al iniciar
loadItems();
