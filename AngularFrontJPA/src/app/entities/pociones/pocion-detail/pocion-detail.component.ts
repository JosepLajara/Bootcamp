import { Component, OnInit } from '@angular/core';
import { Pocion } from '../pocion.model';
import { PocionService } from '../pocion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
Router

@Component({
  selector: 'app-pocion-detail',
  templateUrl: './pocion-detail.component.html',
  styleUrls: ['./pocion-detail.component.css']
})
export class PocionDetailComponent implements OnInit {
  idPocion: String
  pocion: Pocion;
  
  constructor(private route: ActivatedRoute, private _pocionService : PocionService, private router: Router) { 
    this.route.paramMap.subscribe(params => {
      this.idPocion = params.get("id")
    })
    
    this._pocionService.getPocionById(this.idPocion).subscribe(
      result => {

        if (result.code != 200) {
          console.log(result);
          this.pocion = result;
        } else {
          this.pocion = result.data;
        }

      },
      error => {
        console.log(<any>error);
      }
    );
  }

  ngOnInit() {
    
  }

  eliminarPocion(){
    console.log("Pulsado ELIMINAR");
    this._pocionService.deletePocion(this.idPocion).subscribe(
      result => {
        console.log("Pocion Borrada");
        this.router.navigate(['/pociones']);
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
