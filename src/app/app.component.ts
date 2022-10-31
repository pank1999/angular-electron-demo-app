import { Component } from '@angular/core';
import { interval, Observable, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-electron-demo-app';
  max = 1;
  current = 0;

  start() {
    console.log('start', this.max);
    const Interval$ = interval(100);
    Interval$.pipe(
      takeWhile((_) => !this.isFinished()),
      tap((i) => (this.current += 0.1))
    ).subscribe();
  }

  finish() {
    this.current = this.max;
  }
  reset() {
    this.current = 0;
  }

  //prevent the maxval error
  maxVal() {
    console.log('maxVal', this.max);

    return isNaN(this.max) || this.max < 0.1 ? 0.1 : this.max;
  }
  currentVal() {
    console.log('currentVal', this.max);

    return isNaN(this.current) || this.current < 0 ? 0 : this.current;
  }

  isFinished() {
    return this.currentVal() >= this.maxVal();
  }
}
