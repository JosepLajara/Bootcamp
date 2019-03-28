import { Component, OnInit } from '@angular/core';
import { Pocion } from '../pocion.model';
import { PocionService } from '../pocion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pocion-detail',
  templateUrl: './pocion-detail.component.html',
  styleUrls: ['./pocion-detail.component.css']
})
export class PocionDetailComponent implements OnInit {
  idPocion: String
  pocion: Pocion;
  
  constructor(private route: ActivatedRoute, private _pocionService : PocionService) { 
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
}
