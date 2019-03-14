class BotonExtendido extends HTMLButtonElement {
    constructor () {
        super();
        this.addEventListener('click', (e) => {
            //console.log(e);
            let divActualizar = document.querySelector('#input-actualzar-contacto');
            
            divActualizar.innerHTML = ` <div class="input-field col s6">
                                            <input type="text" name="nombre-consultar" id="nombre-consultar" placeholder="Nombre a buscar" required>
                                        </div>
                                        <div class="input-field col s6">
                                            <button class="waves-effect waves-light btn-small"
                                            type="submit"
                                            onclick="event.preventDefault();MVC.controllerInst.buscarNombreContacto(event);">
                                            Actualizar por nombre
                                            </button>
                                        </div>`;
            let divBuscar= document.querySelector('#div-buscar-contacto');
            divBuscar.innerHTML = "";
            let divFormulario = document.querySelector('#contact-form');
            divFormulario.setAttribute('style','display:block');

        });
    }
}

class BotonFormulario extends HTMLButtonElement {
    constructor () {
        super();
        this.addEventListener('click', (e) => {
            //console.log(e);
            let divFormulario = document.querySelector('#contact-form');
            divFormulario.setAttribute('style','block');
            let divActualizar = document.querySelector('#input-actualzar-contacto');
            divActualizar.innerHTML = "";
            let divBuscar = document.querySelector('#div-buscar-contacto');
            divBuscar.innerHTML = "";

        });
    }
}

class BotonBuscar extends HTMLButtonElement {
    constructor () {
        super();
        this.addEventListener('click', (e) => {
            //console.log(e);
            let divBuscar = document.querySelector('#div-buscar-contacto');
            divBuscar.innerHTML = ` <div class="input-field col s6">
                                            <input type="text" name="nombre-consultar" id="nombre-consultar" placeholder="Nombre a buscar" required>
                                        </div>
                                        <div class="input-field col s6">
                                            <button class="waves-effect waves-light btn-small"
                                            type="submit"
                                            onclick="event.preventDefault();MVC.controllerInst.buscarContactoPorNombre(event);">
                                            Buscar por nombre
                                            </button>
                                        </div>`;

            let divActualizar = document.querySelector('#input-actualzar-contacto');
            divActualizar.innerHTML = "";
            let divFormulario = document.querySelector('#contact-form');
            divFormulario.setAttribute('style','display:none');

        });
    }
}

class BotonBorrarForm extends HTMLButtonElement{
    constructor(){
        //
        super();
        this.addEventListener('click', (e) => {
            let formulario = document.querySelector('#contact-form');
            formulario.querySelector('#id').value = "";
            formulario.querySelector('#nombre').value = "";
            formulario.querySelector('#telefono_personal').value = "";
            formulario.querySelector('#telefono_oficina').value = "";
            formulario.querySelector('#correo_personal').value = "";
            formulario.querySelector('#correo_oficina').value = "";
            formulario.querySelector('#fecha_cumple').value = "";
        });
    }
}

customElements.define('boton-mostrar-input', BotonExtendido, { extends: 'button' });
customElements.define('boton-buscar-contacto', BotonBuscar, { extends: 'button' });
customElements.define('boton-agregar-formulario', BotonFormulario, { extends: 'button' });
customElements.define('boton-limpiar-formulario', BotonBorrarForm, { extends: 'button' });
