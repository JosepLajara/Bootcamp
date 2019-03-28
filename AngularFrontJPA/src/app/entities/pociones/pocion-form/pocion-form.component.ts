import { Component, OnInit } from '@angular/core';
import { Pocion } from '../pocion.model';
import { PocionService } from '../pocion.service';

@Component({
  selector: 'app-pocion-form',
  templateUrl: './pocion-form.component.html',
  styleUrls: ['./pocion-form.component.css']
})
export class PocionFormComponent implements OnInit {

  pocion: Pocion;
  imgURL: string | ArrayBuffer;
  imagePath: File;

  constructor(private _pocionService: PocionService) {
    this.pocion = { id: 0, titulo: '', descripcion: '', imagen: '', esEpica: false };
  }

  ngOnInit() {

  }

  crearPocion() {
    this.pocion.imagen = this.imgURL;
    this._pocionService.insertarPocion(this.pocion).subscribe(
      result => {

        if (result.code != 200) {
          console.log(result);
          this.pocion = result;
        } else {
          this.pocion = result.data;
        }

      }, error => {
        console.log(error);
      }
    );
  }

  preview(files) {

    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;

    reader.readAsDataURL(files[0]);

    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };

  }
}
