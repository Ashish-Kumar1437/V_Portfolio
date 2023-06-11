import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  templateUrl: './custom-cursor.component.html',
  styleUrls: ['./custom-cursor.component.scss'],
})
export class CustomCursorComponent {
  mouseX = 0;
  mouseY = 0;
  isCursorVisible = true;
  isMobileView = false;
  mobileScreenWidthThreshold = 700;

  @ViewChild('cursor', { static: false }) cursor!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(){

    if (window.innerWidth < this.mobileScreenWidthThreshold) {
      this.isMobileView = true
      this.renderer.setStyle(this.cursor.nativeElement, 'opacity', '0');
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX - 10;
    this.mouseY = event.clientY - 10;
    if (!this.isCursorVisible) {
      this.showCursor();
    }
    this.updateCursor();
  }

  @HostListener('document:mouseenter')
  onMouseEnter() {
    this.showCursor();
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    this.hideCursor();
  }

  showCursor() {
    if (!this.isCursorVisible && !this.isMobileView) {
      this.isCursorVisible = true;
      this.renderer.setStyle(this.cursor.nativeElement, 'opacity', '1');
    }
  }

  hideCursor() {
    if (this.isCursorVisible && !this.isMobileView) {
      this.isCursorVisible = false;
      this.renderer.setStyle(this.cursor.nativeElement, 'opacity', '0');
    }
  }

  updateCursor() {
    let frameCount = 0;

    const update = () => {
      this.cursor.nativeElement.style.transform = `translate(${this.mouseX}px, ${this.mouseY}px)`;
      if (frameCount < 9) {
        frameCount++;
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }
}
