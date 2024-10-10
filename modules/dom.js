export class DOMManager {
  constructor(container, form, api) {
    this.container = container;
    this.form = form;
    this.api = api;
    
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(this.form);
      const userData = Object.fromEntries(formData);
      if (userData.id) {
        const updatedUser = await this.api.updateUser(userData.id, userData);
        alert(updatedUser ? 'Usuario actualizado correctamente' : 'Error al actualizar usuario');
      } else {
        const newUser = await this.api.createUser(userData);
        alert(newUser ? 'Usuario creado correctamente' : 'Error al crear usuario');
      }
      this.form.reset();
      await this.loadUsers();
    });
  }

  async loadUsers() {
    const users = await this.api.getAllUsers();
    if (users) this.renderItems(users);
  }

  renderItems(users) {
    this.container.innerHTML = '';
    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');
      
      userCard.innerHTML = `
        <img src="${user.photo || 'https://via.placeholder.com/150'}" alt="Foto de ${user.firstName}">
        <h2>${user.firstName} ${user.lastName}</h2>
        <p><strong>Cargo:</strong> ${user.jobTitle}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Teléfono:</strong> ${user.phone}</p>
      `;
      
      this.container.appendChild(userCard);
    });
  }

  populateForm(user) {
    this.form.firstName.value = user.firstName;
    this.form.lastName.value = user.lastName;
    this.form.jobTitle.value = user.jobTitle;
    this.form.email.value = user.email;
    this.form.phone.value = user.phone;
    this.form.photo.value = user.photo;
    this.form.id = user.id;
  }
}
