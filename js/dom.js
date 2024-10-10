export class DOMManager {
    constructor(container, form) {
      this.container = container;
      this.form = form;
    }
  
    renderItems(items) {
      this.container.innerHTML = ''; // Limpia el contenedor antes de renderizar
      items.forEach(item => {
        const itemElement = this.createUserCard(item);
        itemElement.addEventListener('click', () => this.populateForm(item));
        this.container.appendChild(itemElement);
      });
    }
  
    renderSingleItem(item) {
      this.container.innerHTML = ''; // Limpia el contenedor
      const itemElement = this.createUserCard(item);
      this.container.appendChild(itemElement);
    }
  
    createUserCard(user) {
      const card = document.createElement('div');
      card.classList.add('user-card');
  
      const img = document.createElement('img');
      img.src = user.photo;
      img.alt = `${user.firstName} ${user.lastName}`;
      card.appendChild(img);
  
      const name = document.createElement('h2');
      name.textContent = `${user.firstName} ${user.lastName}`;
      card.appendChild(name);
  
      const job = document.createElement('p');
      job.textContent = `Cargo: ${user.jobTitle}`;
      card.appendChild(job);
  
      const email = document.createElement('p');
      email.textContent = `Email: ${user.email}`;
      card.appendChild(email);
  
      const phone = document.createElement('p');
      phone.textContent = `Teléfono: ${user.phone}`;
      card.appendChild(phone);
  
      return card;
    }
  
    populateForm(item) {
      this.form.name.value = item.firstName;
      this.form.dataset.id = item.id;
    }
  
    clearForm() {
      this.form.reset();
      delete this.form.dataset.id;
    }
  
    showMessage(message, type = 'success') {
      alert(message);
    }
  }
  
  