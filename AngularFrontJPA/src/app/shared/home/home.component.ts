import { Component, OnInit } from '@angular/core';
import { Pocion } from 'src/app/entities/pociones/pocion.model';
import { PocionService } from 'src/app/entities/pociones/pocion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pociones: Pocion[];
  constructor(private _pocionService: PocionService) {
    this._pocionService.getPociones().subscribe(
      result => {

        if (result.code != 200) {
          console.log(result);
          this.pociones = result;
        } else {
          this.pociones = result.data;
        }
 
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  ngOnInit() {
  }

}
