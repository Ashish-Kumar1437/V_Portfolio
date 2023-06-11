import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { PreloaderService } from '../../services/preloader.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  @ViewChildren('intro') introText!: QueryList<ElementRef>

  constructor(private preloaderService: PreloaderService) {}

  ngOnInit() {
    // this.preloaderService.startLoading();

    setTimeout(() => {
      this.preloaderService.stopLoading();
    }, 2000);
  }

  ngAfterViewInit(){
    this.introText.forEach(intro =>{
      gsap.to(intro.nativeElement,{y:0,duration:0.75,delay:1.5})
    })
  }
}
