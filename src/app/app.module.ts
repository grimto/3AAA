import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AlertModule } from 'ngx-bootstrap';
import {Location} from '@angular/common';
import { ProposComponent } from './components/propos/propos.component';
import { ServiceComponent } from './components/service/service.component';
import { FaitsComponent } from './components/faits/faits.component';
import { PortefeuilleComponent } from './components/portefeuille/portefeuille.component';
@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    NavBarComponent,
    HomeComponent,
    ProposComponent,
    ServiceComponent,
    FaitsComponent,
    PortefeuilleComponent
  ],
  imports: [
    AlertModule.forRoot(),
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
