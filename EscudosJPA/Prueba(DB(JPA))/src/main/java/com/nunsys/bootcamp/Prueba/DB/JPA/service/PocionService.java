package com.nunsys.bootcamp.Prueba.DB.JPA.service;

import com.nunsys.bootcamp.Prueba.DB.JPA.domain.Pocion;
import com.nunsys.bootcamp.Prueba.DB.JPA.repository.PocionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PocionService implements IPocionService{
    private PocionRepository pocionRepository;

    @Override
    public List<Pocion> findAll(){
        return this.pocionRepository.findAll();
    }
}
