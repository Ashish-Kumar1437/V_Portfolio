import { Component } from '@angular/core';
import { PreloaderService } from 'src/app/services/preloader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private preloaderService: PreloaderService) {}

  ngOnInit() {
    // this.preloaderService.startLoading();

    setTimeout(() => {
      this.preloaderService.stopLoading();
    }, 2000);
  }
}
