package com.nunsys.bootcamp.Prueba.DB.JPA.webrest;

import com.nunsys.bootcamp.Prueba.DB.JPA.domain.Pocion;
import com.nunsys.bootcamp.Prueba.DB.JPA.service.IPocionService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
    @GetMapping("/pociones/pocion/{id}")
    public Optional<Pocion> getPocionById(@PathVariable Long id){
        return  iPocionService.findById(id);
    }

    @PostMapping("/pociones/create")
    public void creaPociones(@RequestBody Pocion pocion){
        iPocionService.save(pocion);
    }
    @PutMapping("/pociones/update")
    public void modificaPocion(@RequestBody Pocion nuevaPocion){
        iPocionService.save(nuevaPocion);
    }

    @DeleteMapping("/pociones/delete/{id}")
    public void borraPocion(@PathVariable Long id) {
        iPocionService.deleteById(id);
    }

}
