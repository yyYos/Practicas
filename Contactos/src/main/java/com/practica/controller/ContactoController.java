package com.practica.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.practica.entity.Contacto;
import com.practica.entity.Login;
import com.practica.service.ContactoService;

@RestController
public class ContactoController{
	
	@Autowired
	private ContactoService contactoService;
	
	public void setContactoService(ContactoService contactoService){
		this.contactoService = contactoService;
	}
	
	@CrossOrigin(origins="*")
	@GetMapping("/api/contacto")
	public List<Contacto> consultaContacto(){
		List<Contacto> contacto = contactoService.consultaContacto();
		return contacto;
	}
	
	@CrossOrigin(origins="*")
	@GetMapping("/api/contacto/{contactoId}")
	public Contacto consultaContactoo(@PathVariable(name="contactoId")Long contactoId) {
		return contactoService.consultaContacto(contactoId);
	}
	
	@CrossOrigin(origins = "*")
    @PostMapping("/api/contacto")
    public void guardaContacto(@RequestBody Contacto contacto) {
		contactoService.guardarContacto(contacto);
    }
	
	@CrossOrigin(origins = "*")
	@DeleteMapping("/api/contacto/{contactoId}")
	public void borrarContacto(@PathVariable(name="contactoId")Long contactoId) {
		contactoService.borrarContacto(contactoId);
	}
	
	@CrossOrigin(origins = "*")
	@PutMapping("/api/contacto/{contactoId}")
	public void actualizaContacto(@RequestBody Contacto contacto, @PathVariable(name="contactoId")Long contactoId) {
		Contacto emp = contactoService.consultaContacto(contactoId);
		if(emp != null) {
			contactoService.actualizaContacto(contacto);
		}
	}
	
	@CrossOrigin(origins="*")
	@GetMapping("/api/contacto/buscar/{contactoName}")
	public Contacto validacionExist(@PathVariable(name="contactoName")String nombre) {
		return contactoService.validacionExist(nombre);
	}
	
	
	@CrossOrigin(origins = "*")
	@DeleteMapping("/api/contacto/delete/{deletename}")
	public void deleteName(@PathVariable(name="deletename")String nombre) {
		contactoService.deleteName(nombre);
	}
	
	@CrossOrigin(origins = "*")
	@PutMapping("/api/contacto/update/{nombre}")
	public void updateContacto(@RequestBody Contacto contacto, @PathVariable(name="nombre")String nombre) {
		Contacto emp = contactoService.validacionExist(nombre);
		if(emp != null) {
			contacto.setId(emp.getId());
			contactoService.updateContacto(contacto);
		}
	}
	
	@CrossOrigin(origins="*")
	@GetMapping("/api/login/buscar/{contactoName},{pass}")
	public Login consultaLogin(@PathVariable(name="contactoName")String nombre,@PathVariable(name="pass")String pass) {
		return contactoService.consultaLogin(nombre,pass);
	}
	
	
	
}