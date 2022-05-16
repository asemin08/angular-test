import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Compte } from '../add-compte-template/Compte.model';
import { CompteService } from 'src/app/services/compte.services';

@Component({
  selector: 'app-add-compte-template',
  templateUrl: './add-compte-template.component.html',
  styleUrls: ['./add-compte-template.component.scss']
})
export class AddCompteTemplateComponent implements OnInit {

  compteForm = this.fb.group({
    solde: ['', Validators.required],
    type: ['',Validators.required],
  });

  constructor(private fb:FormBuilder, private compteService: CompteService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.compteForm.valid) {
      let compte : Compte = {
        code: undefined,
        solde: this.compteForm.value.solde,
        dateCreation: new Date(),
        type: this.compteForm.value.type,
      }
      console.log(compte);
      this.compteService.addComptes(compte).subscribe({
        next: (value) => {
          error : (error: string) => {
            console.log(error);
          }
        }
      });
      this.compteForm.reset();
    }else {
      console.log("pas ok!")
    }
  }



}
