MVC.controllerInst = new MVC.Controller({
	model: MVC.Model,
	view: MVC.View,
	contentElem: document.querySelector('#contact-form'),
	endpoint: 'http://localhost:8080'
})

MVC.controllerInst.getData();
