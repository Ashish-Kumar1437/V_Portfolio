import { Component } from '@angular/core';
import { PreloaderService } from 'src/app/services/preloader.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private preloaderService: PreloaderService) {}

  ngOnInit() {
    // this.preloaderService.startLoading();

    setTimeout(() => {
      this.preloaderService.stopLoading();
    }, 2800);
  }
}
