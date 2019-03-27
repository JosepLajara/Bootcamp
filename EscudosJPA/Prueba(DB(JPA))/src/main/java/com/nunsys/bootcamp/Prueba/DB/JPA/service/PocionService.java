package com.nunsys.bootcamp.Prueba.DB.JPA.service;

import com.nunsys.bootcamp.Prueba.DB.JPA.domain.Pocion;
import com.nunsys.bootcamp.Prueba.DB.JPA.repository.PocionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PocionService implements IPocionService{

    private PocionRepository pocionRepository;

    public PocionService(PocionRepository pocionRepository) {
        this.pocionRepository = pocionRepository;
    }

    @Override
    public List<Pocion> findAll(){
        return this.pocionRepository.findAll();
    }

    @Override
    public Pocion save(Pocion pocion) {
        return this.pocionRepository.save(pocion);
    }

    @Override
    public List<Pocion> findByEsEpica(Boolean esEpica) {
        return this.pocionRepository.findByEsEpica(esEpica);
    }

    @Override
    public Pocion findById(Long id) {
        Optional<Pocion> pocion;
        pocion = this.pocionRepository.findById(id);

        return (pocion.isPresent() ? pocion.get() : null);
    }

    @Override
    public void delete(Long id) {
        Pocion pocion = this.pocionRepository.findById(id).get();
        this.pocionRepository.delete(pocion);
    }

}
