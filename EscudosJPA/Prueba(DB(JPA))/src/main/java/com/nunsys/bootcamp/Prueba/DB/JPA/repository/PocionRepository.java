package com.nunsys.bootcamp.Prueba.DB.JPA.repository;

import com.nunsys.bootcamp.Prueba.DB.JPA.domain.Pocion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the Pocion entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PocionRepository extends JpaRepository<Pocion, Long> {

    List<Pocion> findByEsEpica(Boolean esEpica);

}
