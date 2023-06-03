import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  startLoading(): void {
    this.loadingSubject.next(true);
  }

  stopLoading(): void {
    this.loadingSubject.next(false);
  }
}
