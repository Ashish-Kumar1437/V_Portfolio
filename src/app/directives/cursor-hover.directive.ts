import {
  Directive,
  HostListener,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Directive({
  selector: '[appCursorHover]',
})
export class CursorHoverDirective {
  @Input('cursorSize') size!: string;

  constructor(private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.setCustomCursorSize(this.size);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.resetCustomCursorSize();
  }

  private setCustomCursorSize(size: string) {
    const customCursor = document.querySelector('.custom-cursor');
    this.renderer.setStyle(customCursor, 'transform', `scale(${size})`);
    this.renderer.setStyle(customCursor, 'opacity', `0.5`);
  }

  private resetCustomCursorSize() {
    const customCursor = document.querySelector('.custom-cursor');
    this.renderer.setStyle(customCursor, 'transform', 'scale(1)');
    this.renderer.setStyle(customCursor, 'opacity', `1`);
  }
}
