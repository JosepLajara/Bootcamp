import { Component, OnInit, Input } from '@angular/core';
import { Pocion } from '../pocion';

@Component({
  selector: 'app-pocion-grid',
  templateUrl: './pocion-grid.component.html',
  styleUrls: ['./pocion-grid.component.css']
})
export class PocionGridComponent implements OnInit {

  @Input() pociones: Pocion[];
  @Input() botones: Boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
