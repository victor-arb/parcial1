export class APIService {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
  
    async fetchItems(endpoint) {
      try {
        const response = await fetch(`${this.baseUrl}/${endpoint}`);
        if (!response.ok) throw new Error('Error al obtener los datos');
        return await response.json();
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  
    async fetchSingleItem(endpoint, id) {
      try {
        const response = await fetch(`${this.baseUrl}/${endpoint}/${id}`);
        if (!response.ok) throw new Error('Usuario no encontrado');
        return await response.json();
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  
    async createItem(endpoint, item) {
      try {
        const response = await fetch(`${this.baseUrl}/${endpoint}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item),
        });
        if (!response.ok) throw new Error('Error al crear el elemento');
        return await response.json();
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  
    async updateItem(endpoint, id, item) {
      try {
        const response = await fetch(`${this.baseUrl}/${endpoint}/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item),
        });
        if (!response.ok) throw new Error('Error al actualizar el elemento');
        return await response.json();
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  }
  