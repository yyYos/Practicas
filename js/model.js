MVC.Model = class Persona {
	constructor(endpoint) {
		this.endpoint = endpoint;
		this.modelData = {};
	}

	getContacto () {
		return fetch(`${this.endpoint}/api/contacto`)
		.then(resp => {
			if (resp.ok) {
				return resp.json();
			}
			return resp;
		})
		.then(data => {
			return data;
		})
	}

	saveContacto (datosFormulario) {
		return fetch(`${this.endpoint}/api/contacto`, {
			method: 'POST',
			body: JSON.stringify(datosFormulario),
			headers:{ 'Content-Type': 'application/json' }
		});
	}

	consultaPorId(id){
		return fetch(`${this.endpoint}/api/contacto/`+id, {
			method: 'GET',
			body: null,
			headers:{ 'Content-Type': 'application/json' }
		})
		.then(resp => {
			if (resp.status == 200) {
				return resp.json();
			}
			
			return Error("No se pudieron obtener los datos");
		})
		.then(data => {
			return data;
		})
		.catch(error =>{
			return error;
		})
	}

	consultaPorNombre(nombre){
		return fetch(`${this.endpoint}/api/contacto/buscar/`+nombre, {
			method: 'GET',
			body: null,
			headers:{ 'Content-Type': 'application/json' }
		})
		.then(resp => {
			
			if (resp.status == 200) {
				return resp.json();
			}else if(resp.status == 403){
				return resp;
			}else{
				return resp;
			}
		})
		.then(data => {
			return data;
		})
		.catch(error =>{
			return error;
		})
	}

	borrarContacto(id){
		return fetch(`${this.endpoint}/api/contacto/`+id, {
			method: 'DELETE',
			body: null,
			headers:{ 'Content-Type': 'application/json' }
		});
	}

	actualizaContacto(datos){
		let id = datos.id;
		var jsonObj = JSON.stringify(datos);
		return fetch(`${this.endpoint}/api/contacto/`+id, {
			method: 'PUT',
			body: jsonObj,
			headers:{ 'Content-Type': 'application/json' }
		})
	}

	setContacto(data){
		for (let key in data) {
			this.modelData[key] = data[key];
		}
	}
};
