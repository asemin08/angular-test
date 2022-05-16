import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.services';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string = "";  
  @Input() appareilStatus: string = "";  
  @Input() appareilIndex: number = 0;  
  @Input() id: number = 0;  

  // appareilName = "machine à laver";
  // appareilStatus = 'éteint';

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor(){
    if(this.appareilStatus === 'allumer'){
      return 'green';
    }else {
      return 'red';
    }
  }

  onSwitchOn() {
    this.appareilService.switchOnOne(this.appareilIndex)
  }

  onSwitchOff() {
    this.appareilService.switchOffOne(this.appareilIndex)
  }

  test() {
    console.log("erzerzetrss")
  }
}
