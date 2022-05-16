import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareil.services';

@Component({
  selector: 'app-simgle-appareil',
  templateUrl: './simgle-appareil.component.html',
  styleUrls: ['./simgle-appareil.component.scss']
})
export class SimgleAppareilComponent implements OnInit {

  name: string | undefined = 'Appareil';
  // status: string = 'Status';
  status: string | undefined = 'Status';


  constructor(private appareilService: AppareilService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+id)?.name;
    // this.status = this.appareilService.getAppareilById(+id)!.status;
    this.status = this.appareilService.getAppareilById(+id)?.status;

  }

}
