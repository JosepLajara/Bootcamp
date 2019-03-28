import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocionFormComponent } from './pocion-form/pocion-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PocionFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PocionModule { }
