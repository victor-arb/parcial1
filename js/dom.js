export class DOMManager {
    constructor(container, form) {
      this.container = container;
      this.form = form;
    }
  
    renderItems(items) {
      this.container.innerHTML = ''; // Limpia el contenedor antes de renderizar
      items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.textContent = item.name;
        itemElement.addEventListener('click', () => this.populateForm(item));
        this.container.appendChild(itemElement);
      });
    }
  
    populateForm(item) {
      this.form.name.value = item.name;
      this.form.dataset.id = item.id; // Guarda el id en un atributo data
    }
  
    clearForm() {
      this.form.reset();
      delete this.form.dataset.id;
    }
  
    showMessage(message, type = 'success') {
      console.log(message); // Se puede mejorar para mostrar en el DOM o usar alert()
    }
  }
  