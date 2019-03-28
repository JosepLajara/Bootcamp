import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocionGridComponent } from './pocion-grid/pocion-grid.component';
import { PocionListComponent } from './pocion-list/pocion-list.component';
import { PocionDetailComponent } from './pocion-detail/pocion-detail.component';
import { PocionFormComponent } from './pocion-form/pocion-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PocionGridComponent, PocionListComponent, PocionDetailComponent, PocionFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    PocionGridComponent
  ]
})
export class PocionModule { }
