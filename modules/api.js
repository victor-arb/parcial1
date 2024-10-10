export class API {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getAllUsers() {
    try {
      const response = await fetch(`${this.baseURL}/users`);
      return response.ok ? await response.json() : null;
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      alert('Error al obtener usuarios', error)
      return null;
    }
  }

  async getUserById(id) {
    try {
      const response = await fetch(`${this.baseURL}/users/${id}`);
      return response.ok ? await response.json() : null;
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      return null;
    }
  }

  async createUser(userData) {
    try {
      const response = await fetch(`${this.baseURL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      return response.ok ? await response.json() : null;
    } catch (error) {
      console.error('Error al crear usuario:', error);
      return null;
    }
  }

  async updateUser(id, userData) {
    try {
      const response = await fetch(`${this.baseURL}/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      return response.ok ? await response.json() : null;
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      return null;
    }
  }
}

  