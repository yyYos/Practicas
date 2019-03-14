package com.practica.service;

import java.util.List;

import com.practica.entity.Contacto;
import com.practica.entity.Login;

public interface ContactoService {
	public List<Contacto> consultaContacto();
	
	public Contacto consultaContacto(Long contactoId);
	
	public void guardarContacto(Contacto contacto);
	
	public void borrarContacto(Long contactoId);
	
	public void actualizaContacto(Contacto contacto);
	
	public Contacto validacionExist(String nombre);
	
	public List<Contacto> deleteName(String nombre);
	
	public void updateContacto(Contacto contacto);
	
	public Login consultaLogin(String nombreLogin,String pass);
}

