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
    this.timeline
      .to(this.left.nativeElement, { x: 0, duration: 1 })
      .to(this.right.nativeElement, { x: 0, duration: 0.75 }, '<0.25')
      .to(this.preloaderWrapper.nativeElement, {
        y: '-110vh',
        duration: 1,
        ease: 'circ.out',
      });
  }
}
