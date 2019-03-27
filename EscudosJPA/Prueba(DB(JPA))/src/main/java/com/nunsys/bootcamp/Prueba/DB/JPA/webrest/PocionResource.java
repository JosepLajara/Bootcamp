package com.nunsys.bootcamp.Prueba.DB.JPA.webrest;

import com.nunsys.bootcamp.Prueba.DB.JPA.domain.Pocion;
import com.nunsys.bootcamp.Prueba.DB.JPA.service.IPocionService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PocionResource {

    private IPocionService iPocionService;

    public PocionResource(IPocionService iPocionService){this.iPocionService = iPocionService;}

    @GetMapping("/pociones")
    public List<Pocion> getAllPociones(){
        List<Pocion> pociones = iPocionService.findAll();
        return pociones;


    }
}
