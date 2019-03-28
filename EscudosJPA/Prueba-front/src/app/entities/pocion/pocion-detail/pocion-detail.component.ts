import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PocionService } from '../pocion.service';
import { Pocion } from '../pocion';

@Component({
  selector: 'app-pocion-detail',
  templateUrl: './pocion-detail.component.html',
  styleUrls: ['./pocion-detail.component.css']
})
export class PocionDetailComponent implements OnInit {

  idPocion:String;
  pocion: Pocion;

  constructor(private route: ActivatedRoute, private _pocionService: PocionService, public router: Router) {
    this.idPocion = this.route.snapshot.paramMap.get("id");
   }

  ngOnInit() {
    this.getPocionById(this.idPocion);
  }
//Funcion que hace una suscripción a pocion para sacar una poción proporcionándole el id
  getPocionById(id:String){
    this._pocionService.getPocionById(id).subscribe(
      (pocion) => {
        this.pocion=pocion;
      },
      (error) => {
        console.log(error);
      }
    )
  }
// Funcion que borra una poción pidiendo la confirmación
  deletePocion(){
    let respuesta = confirm("Está seguro que quiere borrar la poción "+this.idPocion);
    if (respuesta == true) {
      this._pocionService.deletePocion(this.idPocion).subscribe(
        (mensaje) => {
          alert(mensaje);
        },
        (error) =>{
          console.log(error);
        }
      );
      this.router.navigate(['/pocion'])
    }
  }

}
