package com.nunsys.bootcamp.Prueba.DB.JPA.service;

import com.nunsys.bootcamp.Prueba.DB.JPA.domain.Pocion;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface IPocionService {

    Optional<String> mensaje_delete = Optional.of("Se ha eliminado satisfactoriamente");
    Optional<String> mensaje_create = Optional.of("Se ha creado satisfactoriamente");
    Optional<String> mensaje_update = Optional.of("Se ha actualizado satisfactoriamente");

    public List<Pocion> findAll();
    public Optional<Pocion> findById(Long id);
    public Optional<String> save(Pocion Pocion);
    public Optional<String> deleteById(Long id);
    public List<Pocion> findByEsEpica(Boolean esEpica);
}
