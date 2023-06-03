import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { PreloaderService } from 'src/app/services/preloader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  openNav=false

  @ViewChild('logo',{static: false}) logo:ElementRef | undefined;

  constructor(private router: Router,private preloaderService: PreloaderService) { }

  ngAfterViewInit(){
    gsap.from(this.logo?.nativeElement,{opacity:0,duration:2})
  }

  navigateTo(route: string): void {
    this.openNav=false
    this.preloaderService.startLoading();
    this.router.navigate([route]);
  }
}
