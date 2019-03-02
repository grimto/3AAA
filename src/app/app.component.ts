import {Component, ElementRef, Inject, OnInit, Renderer, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
