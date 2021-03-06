import {Component, OnInit, ElementRef} from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {$} from 'protractor';
import {style} from '@angular/animations';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private toggleButton: any;
  private sidebarVisible: boolean;
  private navbarcolor = "black" ;
  constructor(public location: Location, private element: ElementRef) {
    this.sidebarVisible = false;
  }
  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
  }


  navbarColorChange(){
     return  window.scrollY >10 ? this.navbarcolor : 'none';
  }
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    // console.log(toggleButton, 'toggle');

    setTimeout(function() {
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;
  }
  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  }
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }
  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    return (titlee === '/home');
  }
}
