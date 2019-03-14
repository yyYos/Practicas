package com.practica.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Contacto")
public class Contacto{
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="Nombre")
	private String nombre;
	
	@Column(name="telefono_personal")
	private String telefono_personal;
	
	@Column(name="telefono_oficina")
	private String telefono_oficina;
	
	@Column(name="correo_personal")
	private String correo_personal;
	
	@Column(name="correo_oficina")
	private String correo_oficina;
	
	@Column(name="fecha_cumple")
	private String fecha_cumple;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getTelefono_personal() {
		return telefono_personal;
	}
	public void setTelefono_personal(String telefono_personal) {
		this.telefono_personal = telefono_personal;
	}
	public String getTelefono_oficina() {
		return telefono_oficina;
	}
	public void setTelefono_oficina(String telefono_oficina) {
		this.telefono_oficina = telefono_oficina;
	}
	public String getCorreo_personal() {
		return correo_personal;
	}
	public void setCorreo_personal(String correo_personal) {
		this.correo_personal = correo_personal;
	}
	public String getCorreo_oficina() {
		return correo_oficina;
	}
	public void setCorreo_oficina(String correo_oficina) {
		this.correo_oficina = correo_oficina;
	}
	public String getFecha_cumple() {
		return fecha_cumple;
	}
	public void setFecha_cumple(String fecha_cumple) {
		this.fecha_cumple = fecha_cumple;
	}
}