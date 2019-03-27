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

    public PocionResource(IPocionService iPocionService) {
        this.iPocionService = iPocionService;
    }

    @GetMapping("/pociones")
    public List<Pocion> getAllPociones() {
        return this.iPocionService.findAll();
    }

    @PostMapping("/pocion")
    public Pocion createPocion(@RequestBody Pocion pocion){
        return this.iPocionService.save(pocion);
    }

    @PutMapping("/pocion")
    public Pocion updatePOcion(@RequestBody Pocion pocion){
        return this.iPocionService.save(pocion);
    }

    @GetMapping("/pocion/{id}")
    public Pocion getPocionById(@PathVariable Long id){
        return this.iPocionService.findById(id);
    }

    @GetMapping("/pociones/obtenerEpicas")
    public List<Pocion> getPocionesEpic(){
        return this.iPocionService.findByEsEpica(true);
    }

    @DeleteMapping("/pocion/{id}")
    public void deletePocion(@PathVariable Long id){
        this.iPocionService.delete(id);
    }
}
