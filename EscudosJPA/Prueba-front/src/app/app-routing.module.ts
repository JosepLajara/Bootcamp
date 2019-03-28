import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { PocionListComponent } from './entities/pocion/pocion-list/pocion-list.component';
import { PocionDetailComponent } from './entities/pocion/pocion-detail/pocion-detail.component';
import { PocionFormComponent } from './entities/pocion/pocion-form/pocion-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'pocion', component: PocionListComponent, pathMatch: 'full'},
  {path: 'pocion/:id', component: PocionDetailComponent, pathMatch: 'full'},
  {path: 'crear', component: PocionFormComponent, pathMatch: 'full'},
  {path: 'crear/:id', component: PocionFormComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
