import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, merge, Observable, of, range, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-observar',
  imports: [],
  templateUrl: './observar.html',
  styleUrl: './observar.scss'
})
export class Observar implements OnInit, OnDestroy {
  sub!: Subscription;

  private of = of("lol first");
  private from = from(["lol second"]);

  obs = new Observable((observer) => {
    setTimeout(() => {
      this.of.subscribe((data) => observer.next(data));
    }, 1000);

    setTimeout(() => {
      this.from.subscribe((data) => observer.next(data));
    }, 2000);

    setTimeout(() => {
      observer.next('Go Next Kids');
    }, 3000);
  });

  //  private of= of("lol first")
   
  //  private from = from(["lol second"])

  private interval = interval(1000).pipe(take(5)); 

  private range = range(10, 5);
 
  ngOnInit(): void {
   const merged = merge(this.interval, this.range ,this.of , this.from);

    this.sub = merged.subscribe({
      next: (data) => console.log(data),
    });

  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe(); 
   
  }

}