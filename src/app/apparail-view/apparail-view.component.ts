import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.services';
@Component({
  selector: 'app-apparail-view',
  templateUrl: './apparail-view.component.html',
  styleUrls: ['./apparail-view.component.scss']
})

export class ApparailViewComponent implements OnInit{

  // property bindings
  isAuth = false;
  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  appareils: any[] = [];

  ngOnInit() {
    this.appareils = this.appareilService.appareils
  }

  // event binding
  onAllumer() {
    this.appareilService.switchOnAll();
  }

    // event binding
  onEteindre() {
    this.appareilService.switchOffAll();
  }

  // Pour le pipe avec async;
  lastUpdate: Promise<Date> = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );  

}