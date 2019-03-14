MVC.View = class View {
	constructor(elem) {
		this.eventHandler();
		this.eventLeeNombre();
		this.eventLeeDatos();
		
		this.elem = elem;
	}

	eventHandler () {
		document.body.addEventListener('onLoadData', (event) => {
			var tabla = document.getElementById("body-tabla");
			this.mostrarDatos(event.detail,tabla);
			
		});
	}

	eventLeeDatos () {
		document.body.addEventListener('onReadData',(event =>{
			var datos = event.detail;
			for (let key in datos) {
				this.llenarInputs(key, datos, function (value, elem, prop) {
							elem[prop] = value;
				}, 'key');
			}
		}));
	}

	eventLeeNombre () {
		document.body.addEventListener('onReadNombreInput',(event => {
			var tabla = document.getElementById("body-tabla");
			this.mostrarSoloUnDato(event.detail,tabla);
		}));
	}

	notify (data) {
		const onLoadData = new CustomEvent("onLoadData", { detail: data , bubbles: true });
		this.elem.dispatchEvent(onLoadData);
	}

	notifyConsultaPorNombre (data){
		const onReadData = new CustomEvent("onReadData", {detail: data, bubbles: true});
		this.elem.dispatchEvent(onReadData);
	}

	notifyConsultaNombreInput(data){
		//console.log(data);
		const onReadNombreInput = new CustomEvent("onReadNombreInput", {detail: data, bubbles: true});
		this.elem.dispatchEvent(onReadNombreInput);
	}

	mostrarDatos (datos,tabla) {
		//console.log(datos , tabla);
		for (let key in datos) {
			this.mostrarDatosForm(datos[key],tabla);
		}
	}

	mostrarSoloUnDato (datos,tabla) {
		//console.log(datos , tabla);
		//for (let key in datos) {
			this.mostrarDatosInputNombre(datos,tabla);
		//}
	}

	mostrarDatosInputNombre(datos,tabla){
 	//console.log(datos);
		var Table = document.querySelector("#body-tabla"); 
            Table.innerHTML = "";
		let cell = [];
	
		var row = tabla.insertRow(datos);
		for (const key in datos) {
			
			var id;
			if(key === 'id'){
				id = datos[key];
			}
			if(key !== 'id'){
				cell = row.insertCell();
				cell.innerHTML = datos[key].toString().toUpperCase();
				
				if(key === 'fecha_cumple'){
					cell = row.insertCell();
					cell.innerHTML = '<button is="boton-agregar-formulario" class="waves-effect waves-light btn-small" onclick="event.preventDefault();MVC.controllerInst.buscarIdContacto('+ id +');">Actualizar</button>';
					cell = row.insertCell();
					cell.innerHTML = '<button class="waves-effect waves-light btn-small" onclick="event.preventDefault();MVC.controllerInst.borrarContactos('+ id +');">Borrar</button>';
				}
			}
			
		}
	}

	mostrarDatosForm(datos,tabla){
		let cell = [];
		

		var row = tabla.insertRow(datos);
		for (const key in datos) {
			var id;
			if(key === 'id'){
				id = datos[key];
			}
			if(key !== 'id'){
				cell = row.insertCell();
				cell.innerHTML = datos[key].toString().toUpperCase();
				
				if(key === 'fecha_cumple'){
					cell = row.insertCell();
					cell.innerHTML = '<button is="boton-agregar-formulario" class="waves-effect waves-light btn-small" onclick="event.preventDefault();MVC.controllerInst.buscarIdContacto('+ id +');">Actualizar</button>';
					cell = row.insertCell();
					cell.innerHTML = '<button class="waves-effect waves-light btn-small" onclick="event.preventDefault();MVC.controllerInst.borrarContactos('+ id +');">Borrar</button>';
				}
			}
			
		}		

	}

	guardarDatos(){
		var miFormulario = document.getElementById('contact-form');
        const formEntries = new FormData(miFormulario).entries();
		const json = Object.assign(...Array.from(formEntries, ([x,y]) => ({[x]:y})));
		
		return json;
	}

	llenarInputs(key, model, callbackResult, valueField) {
	const elemento = document.querySelector('#contact-form');
	const nodeFields = elemento.querySelectorAll(`[name='${key}']`);
	if (nodeFields.length > 0) {

		let value = nodeFields[0].value;
		if(valueField === 'key') {
		value = model[key];
		}

			callbackResult(value, nodeFields[0], "value");
		}
	}

	actualizaContacto(){
		const elemento = document.querySelector('#contact-form');
		const id = elemento.querySelector('#id').value;
		const nombre = elemento.querySelector('#nombre').value;
		const telefono_personal = elemento.querySelector('#telefono_personal').value;
		const telefono_oficina = elemento.querySelector('#telefono_oficina').value;
		const correo_personal = elemento.querySelector('#correo_personal').value;
		const correo_oficina = elemento.querySelector('#correo_oficina').value;
		const fecha_cumple = elemento.querySelector('#fecha_cumple').value;

		var objInpust = new Object();
		var objInpust = {
			id : id,
			nombre : nombre,
			telefono_personal : telefono_personal,
			telefono_oficina : telefono_oficina,
			correo_personal : correo_personal,
			correo_oficina : correo_oficina,
			fecha_cumple : fecha_cumple
		}

		for (const key in objInpust) {
			if (objInpust.hasOwnProperty(key)) {
				const element = objInpust[key];
				if(element === ""){
					this.showMessage("Ingresa datos correctos");
					return;
				}else{
					return objInpust;
				}
				
			}
		}

	}

	getNombre () {
		var nombre = document.getElementById("nombre-consultar").value; 
		if(nombre === ''){
			this.showMessage("El nombre no se encontro");
			return;
		}else{
			return nombre;
		}
	}

	showMessage (msg) {
		alert(msg);
	}
};