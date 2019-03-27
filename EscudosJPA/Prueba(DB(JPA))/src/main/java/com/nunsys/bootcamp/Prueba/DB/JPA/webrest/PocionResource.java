package com.nunsys.bootcamp.Prueba.DB.JPA.webrest;

import com.nunsys.bootcamp.Prueba.DB.JPA.domain.Pocion;
import com.nunsys.bootcamp.Prueba.DB.JPA.service.IPocionService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")

public class PocionResource {
    private IPocionService iPocionService;

    public PocionResource(IPocionService iPocionService){
        this.iPocionService = iPocionService;
    }

    @GetMapping("/pociones")
    public List<Pocion> getAllPociones(){
        return iPocionService.findAll();
    }
    @PostMapping("/pociones")
    public void creaPociones(@RequestBody Pocion pocion){
        //Pocion p=new Pocion("Pocion de vida", "recupera vida jejeej", "",true);
        iPocionService.save(pocion);
    }
}
