import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocionModule } from './entities/pocion/pocion.module';
import { PocionComponent } from './entities/pocion/pocion/pocion.component';
import { PocionListComponent } from './entities/pocion/pocion-list/pocion-list.component';
import { PocionGridComponent } from './entities/pocion/pocion-grid/pocion-grid.component';
import { PocionDetailComponent } from './entities/pocion/pocion-detail/pocion-detail.component';
import { HomeComponent } from './shared/home/home.component';
import { NavComponent } from './shared/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PocionComponent,
    PocionListComponent,
    PocionGridComponent,
    PocionDetailComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PocionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
