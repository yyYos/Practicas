package com.practica.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.practica.entity.Contacto;
import com.practica.entity.Login;
import com.practica.repository.ContactoRepository;
import com.practica.service.ContactoService;

@Service
class ContactoServiceImpl implements ContactoService{
	
	@Autowired
	private ContactoRepository contactoRepository;
	
	public void setContactoRespository(ContactoRepository contactoRepository){
		this.contactoRepository = contactoRepository;
	}
	
	public List<Contacto> consultaContacto() {
		List<Contacto> contacto = contactoRepository.findAll();
		return contacto;
	}

	public Contacto consultaContacto(Long contactoId) {
		Optional<Contacto> optContacto = contactoRepository.findById(contactoId);
		return optContacto.get();
	}

	public void guardarContacto(Contacto contacto) {
		contactoRepository.save(contacto);
	}

	public void borrarContacto(Long contactoId) {
		contactoRepository.deleteById(contactoId);
	}

	public void actualizaContacto(Contacto contacto) {
		contactoRepository.save(contacto);
	}

	public Contacto validacionExist(String nombre) {
		Contacto findcontacto = contactoRepository.findName(nombre);
		return findcontacto;
	}
	
	public List<Contacto> deleteName(String nombre) {
		contactoRepository.deleteName(nombre);
		List<Contacto> contacto=consultaContacto();
		return contacto;
	}
	
	public void updateContacto(Contacto contacto) {
		contactoRepository.save(contacto);
	}

	
	public Login consultaLogin(String nombreLogin,String pass) {
		Login finduser = contactoRepository.findUser(nombreLogin,pass);
		return finduser;
	}
	
}