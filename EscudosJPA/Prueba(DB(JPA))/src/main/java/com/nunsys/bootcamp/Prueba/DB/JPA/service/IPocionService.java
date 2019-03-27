package com.nunsys.bootcamp.Prueba.DB.JPA.service;

import com.nunsys.bootcamp.Prueba.DB.JPA.domain.Pocion;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IPocionService {
    public List<Pocion> findAll();
    public List<Pocion> findByEsEpica(Boolean esEpica);
    public Pocion findById(Long id);
    public Pocion save(Pocion pocion);
    public void delete(Long id);
}
