import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[oppositeDirectionMove]'
})
export class OppositeDirectionMoveDirective {
  @Input('movementSpeed') movementSpeed!: string;
  private element: HTMLElement;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const rect = this.element.getBoundingClientRect();

    // Calculate the distance between the mouse and the element's center
    const distanceX = rect.left + rect.width / 2 - mouseX;
    const distanceY = rect.top + rect.height / 2 - mouseY;

    // Set the movement values based on the distance and direction
    const movementX = distanceX * Number(this.movementSpeed);
    const movementY = distanceY * Number(this.movementSpeed);

    // Use GSAP to animate the element's position
    gsap.to(this.element, {
      x: -movementX,
      y: -movementY,
      duration: 0.3
    });
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // Reset the element to its default position
    gsap.to(this.element, {
      x: 0,
      y: 0,
      duration: 0.3
    });
  }
}
