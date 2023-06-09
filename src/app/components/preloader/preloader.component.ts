import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss'],
})
export class PreloaderComponent {
  @ViewChild('wrapper', { static: false }) preloaderWrapper!: ElementRef;
  @ViewChild('left', { static: false }) left!: ElementRef;
  @ViewChild('right', { static: false }) right!: ElementRef;
  timeline!: GSAPTimeline;

  ngOnInit() {
    this.timeline = gsap.timeline();
  }

  ngAfterViewInit() {
    console.log(this.preloaderWrapper.nativeElement)
    this.timeline
      .to(this.left.nativeElement, { x: 0, duration: 1.25 })
      .to(this.right.nativeElement, { x: 0, duration: 1.25 }, '<0' )
      .to(this.preloaderWrapper.nativeElement, {
        y: '-130vh',
        duration: 1.5,
        ease: 'circ.out',
      });
      
  }
}
