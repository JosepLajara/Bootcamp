package com.nunsys.bootcamp.Prueba.DB.JPA.service;

import com.nunsys.bootcamp.Prueba.DB.JPA.domain.Pocion;
import com.nunsys.bootcamp.Prueba.DB.JPA.repository.PocionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PocionService implements IPocionService{

    private PocionRepository pocionRepository;

    public PocionService(PocionRepository pocionRepository){
        this.pocionRepository = pocionRepository;
    }

    @Override
    public List<Pocion> findAll() {
        return this.pocionRepository.findAll();
    }

    @Override
    public Optional<Pocion> findById(Long id) {
        return this.pocionRepository.findById(id);
    }

    @Override
    public Optional<String> save(Pocion Pocion) {
        this.pocionRepository.save(Pocion);
        return mensaje_create;
    }

    @Override
    public Optional<String> deleteById(Long id) {

        this.pocionRepository.deleteById(id);

        return mensaje_delete;
    }

    @Override
    public List<Pocion> findByEsEpica(Boolean esEpica) {
        return this.pocionRepository.findByEsEpica(esEpica);
    }

}
