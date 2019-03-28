import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { PocionListComponent } from './entities/pociones/pocion-list/pocion-list.component';
import { PocionDetailComponent } from './entities/pociones/pocion-detail/pocion-detail.component';
import { PocionFormComponent } from './entities/pociones/pocion-form/pocion-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'pociones', component: PocionListComponent, pathMatch: 'full'},
  {path: 'pocionDetalle/:id', component: PocionDetailComponent, pathMatch: 'full'},
  {path: 'pocionForm', component: PocionFormComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
