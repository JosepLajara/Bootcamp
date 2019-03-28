package com.nunsys.bootcamp.Prueba.DB.JPA.webrest;

import com.nunsys.bootcamp.Prueba.DB.JPA.domain.Pocion;
import com.nunsys.bootcamp.Prueba.DB.JPA.service.IPocionService;
import org.springframework.web.bind.annotation.*;

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
    public Optional<String> creaPociones(@RequestBody Pocion pocion){
        iPocionService.save(pocion);
        return iPocionService.mensaje_create;
    }
    @PutMapping("/pociones/update")
    public Optional<String> modificaPocion(@RequestBody Pocion nuevaPocion){
        iPocionService.save(nuevaPocion);
        return IPocionService.mensaje_update;
    }

    @DeleteMapping("/pociones/delete/{id}")
    public Optional<String> borraPocion(@PathVariable Long id) {
        iPocionService.deleteById(id);
        return iPocionService.mensaje_delete;
    }

    @GetMapping("/pociones/findEpic")
    public List<Pocion> findByEsEpica() {
        return iPocionService.findByEsEpica(true);
    }

}
