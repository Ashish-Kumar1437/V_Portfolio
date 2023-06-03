import { Component, OnInit } from '@angular/core';
import { PreloaderService } from './services/preloader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading$!: Observable<boolean>;

  constructor(private preloaderService: PreloaderService) {}

  ngOnInit() {
    this.isLoading$ = this.preloaderService.loading$;
  }
}
