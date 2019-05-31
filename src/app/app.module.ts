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
import { ClientsComponent } from './components/clients/clients.component';
import { TemoignageComponent } from './components/temoignage/temoignage.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    NavBarComponent,
    HomeComponent,
    ProposComponent,
    ServiceComponent,
    FaitsComponent,
    PortefeuilleComponent,
    ClientsComponent,
    TemoignageComponent,
    EquipeComponent,
    ContactComponent,
    FooterComponent,
    DialogComponent,
    LoginComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  entryComponents: [
    PortefeuilleComponent,
    DialogComponent,
  ],
  providers: [
    Location,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
