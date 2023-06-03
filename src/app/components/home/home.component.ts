import { Component } from '@angular/core';
import { PreloaderService } from '../../services/preloader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private preloaderService: PreloaderService) {}

  ngOnInit() {
    // this.preloaderService.startLoading();

    setTimeout(() => {
      this.preloaderService.stopLoading();
    }, 2000);
  }
}
