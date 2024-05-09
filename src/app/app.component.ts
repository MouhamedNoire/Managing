import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, Subject, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  /*interval$ !: Observable<number>;
  stop$ !: Subject<boolean>;*/
  constructor(){

  }

  ngOnInit() {
    /**this.stop$ = new Subject<boolean>();
    interval(1000).pipe(
      /**takeUntil(this.stop$)*/
      /*take(10),
      map(value => value *3),
      tap(log => this.multiple(log))
    ).subscribe();  **/
  }

  /**multiple(entry:number){
    console.log(entry)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.stop$.next(true);
  }*/
}
