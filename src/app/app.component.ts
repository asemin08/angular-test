import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable, interval, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy  {

  secondes: number = 0;

  counterSubscription: Subscription | undefined;

  constructor() {
    
  }

  ngOnInit(): void {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe({
      next : (value: number) => this.secondes = value}
      );
    // counter.subscribe({
    //   next : (value) => this.secondes = value,
    //   error: () => console.log("Une erreur est survenue"),
    //   complete: () => console.log("Observable complété")
    //  });
    }

    ngOnDestroy() : void {
      this.counterSubscription?.unsubscribe();
    }


}

