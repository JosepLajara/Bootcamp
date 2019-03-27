package com.nunsys.bootcamp.Prueba.DB.JPA.webrest;

import com.nunsys.bootcamp.Prueba.DB.JPA.domain.Pocion;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")

public class PocionResource {
    @GetMapping("/pociones")
    public List<Pocion> getAllPociones(){
        List<Pocion> pociones = new ArrayList<>();

        pociones=creaPociones();
        return pociones;
    }

    public List<Pocion> creaPociones(){
        List<Pocion> pociones = new ArrayList<>();
        pociones.add(new Pocion("Poción de vida","Poción que recupera 25hp","../../resources/static/t_01.PNG" ,false ));
        pociones.add(new Pocion("Poción de maná","Poción que recupera 10mp","../../resources/static/t_02.PNG" ,false ));
        return pociones;
    }
}
