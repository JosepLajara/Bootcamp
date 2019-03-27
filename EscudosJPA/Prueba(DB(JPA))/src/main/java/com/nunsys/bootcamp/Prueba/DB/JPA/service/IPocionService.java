package com.nunsys.bootcamp.Prueba.DB.JPA.service;

import com.nunsys.bootcamp.Prueba.DB.JPA.domain.Pocion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IPocionService extends JpaRepository<Pocion, Long> {
    List<Pocion> findByEsEpica(Boolean esEpica);
}
