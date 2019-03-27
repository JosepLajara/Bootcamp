package com.nunsys.bootcamp.Prueba.DB.JPA.domain;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;


@Entity
@Table(name = "pocion")
public class Pocion implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "titulo")
    private String titulo;

    @Column(name = "descripcion")
    private String descripcion;

    @Size(min=0, max=2000000)
    @Column(name = "imagen")
    private String imagen;

    @Column(name = "es_epica")
    private Boolean esEpica;


    public Pocion() {
    }

    public Pocion(String titulo, String descripcion, String imagen, Boolean esEpica) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.esEpica = esEpica;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public Boolean getEsEpica() {
        return esEpica;
    }

    public void setEsEpica(Boolean esEpica) {
        this.esEpica = esEpica;
    }
}
