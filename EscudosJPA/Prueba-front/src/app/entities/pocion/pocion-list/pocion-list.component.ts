import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PocionService } from '../pocion.service';
import { Pocion } from '../pocion';

@Component({
  selector: 'app-pocion-list',
  templateUrl: './pocion-list.component.html',
  styleUrls: ['./pocion-list.component.css']
})
export class PocionListComponent implements OnInit {

pocion: Pocion[];
  
  constructor(private route: ActivatedRoute, private _pocionService: PocionService, public router: Router) { }

  ngOnInit() {
    this.obtenerPociones();
  }

  private refresh(){
    location.reload();
  }

  private obtenerPociones(){
    this._pocionService.getPociones().subscribe(
      (pocion) => {
        this.pocion=pocion;
      },
      (error) => {
        console.log(error);
      }
    )
  }


  
}
