import { Component, OnInit } from '@angular/core';
import { Pocion } from '../pocion';
import { ActivatedRoute, Router } from '@angular/router';
import { PocionService } from '../pocion.service';

@Component({
  selector: 'app-pocion-form',
  templateUrl: './pocion-form.component.html',
  styleUrls: ['./pocion-form.component.css']
})
export class PocionFormComponent implements OnInit {

  pocion: Pocion;

  idPocion: String;
  id: number;
  titulo: String;
  descripcion: String;
  imagen: File;
  esEpica: Boolean;
  
  constructor(private route: ActivatedRoute, private _pocionService: PocionService, public router: Router) {
    this.idPocion = this.route.snapshot.paramMap.get("id");
   }

  ngOnInit() {
    if(this.idPocion!==null){
      this.getPocionById(this.idPocion);
      this.id=0;
    }
  }

  getPocionById(id:String){
    this._pocionService.getPocionById(id).subscribe(
      (pocion) => {
        this.id=pocion.id;
        this.titulo=pocion.titulo;
        this.descripcion=pocion.descripcion;
        this.imagen=pocion.imagen;
        this.esEpica=pocion.esEpica;
      },
      (error) => {
        console.log(error);
      }
    )
  }
  //Funcion que crea un poción con los datos que se tienen, no importa si es update o create
  crearPocion(id: Number,titulo: String,descripcion: String,imagen: File,esEpica: Boolean){
    this.pocion = {id: id,titulo: titulo, descripcion: descripcion, imagen: imagen, esEpica: esEpica}; 
  }
  //funcion que envia una pocion a la api y la crea en la db
  enviar(){
    this.crearPocion(this.id,this.titulo,this.descripcion,this.imagen,this.esEpica);
    this._pocionService.createPocion(this.pocion).subscribe(
      (mensaje) => {
        alert(mensaje);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
