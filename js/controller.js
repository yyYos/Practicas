MVC.Controller = class Controller {
	constructor(props) {
		this.model = new props.model(props.endpoint);
		this.view = new props.view(props.contentElem);
	}

	getData () {
		this.model.getContacto()
		.then(data => {
			this.view.notify(data);
		})
		.catch(error =>{
			return error;
		})
	}

	guardarContacto () {
		const datos = this.view.guardarDatos()

		this.model.saveContacto(datos)
		.then(res => {
			if (res.status == 200) {
				this.view.showMessage("Se guardó tu información");
				this.view.elem.reset();
				return
			}
			if(res.status == 400){
				this.view.showMessage("Existe un error, verifica");
			}
		})
		.catch(error => {
			this.view.showMessage(error);
		})
	}

	borrarContactos (id) {
		this.model.borrarContacto(id)
		.then(res => {
			if (res.status == 200) {
				this.view.showMessage("Se elimino correctamente");
				this.view.elem.reset();
				return
			}
		})
		.catch(error =>{
			return error;
		})
	}

	buscarIdContacto (id) {
		this.model.consultaPorId(id)
		 .then(res => {
				this.view.notifyConsultaPorNombre(res);
		 	
		 })
		 .catch(error =>{
		 	this.view.showMessage("Ingresa el nombre correcto");
		 	return;
		 })
	}

	buscarNombreContacto () {
		
		let nombre = this.view.getNombre();
		this.model.consultaPorNombre(nombre)
		.then(res => {
			
			if(res.status == 400){
				this.view.showMessage("El nombre no se encontro");
			}
			this.view.notifyConsultaPorNombre(res);
		 	
		})
		.catch(error =>{
		 	this.view.showMessage("Ingresa el nombre correcto");
		 	return;
		})
	}

	actualizarContacto () {
		let datosjson = this.view.actualizaContacto();
		this.model.actualizaContacto(datosjson)
		.then(res => {
			this.view.showMessage("Se han actualizado los datos");
			this.view.elem.reset();
		})
		.catch(error =>{
			return error;
		})
	}



	buscarContactoPorNombre (){
		let nombre = this.view.getNombre();
		//console.log(nombre);
		this.model.consultaPorNombre(nombre)
		.then(res => {
			//console.log(res);
			if(res.status == 400){
				this.view.showMessage("El nombre no se encontro");
			}
			this.view.notifyConsultaNombreInput(res);
		 	//console.log(res);
		})
		.catch(error =>{
		 	console.log(error);
		})
	}




};