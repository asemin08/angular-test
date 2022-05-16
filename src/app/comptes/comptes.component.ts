import { Component, OnInit } from '@angular/core';
import { CompteService } from '../services/compte.services';
import { compte } from './compte.model';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.scss']
})
export class ComptesComponent implements OnInit {

  constructor(private compteService: CompteService) { }
  public comptes: compte[] = [];

  ngOnInit(): void {
    this.getComptes();
    // console.log(this.compteService.getComptes());
  }

  private getComptes() {
    this.compteService.getComptes().subscribe(comptes => this.comptes = comptes);
    }

}
