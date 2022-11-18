import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form/form.service';
import { Criterian } from '../../../models/criterian';

@Component({
  selector: 'app-form-initial',
  templateUrl: './form-initial.component.html',
  styleUrls: ['./form-initial.component.css']
})
export class FormInitialComponent {
  
  constructor(private formSer: FormService) {}

  table = Array();
  loading: boolean = false; 
  formMatriz: FormGroup = new FormGroup('');

  ngOnInit() {
    this.formMatriz= new FormGroup({
      numDecision: new FormControl(''),
      numStatesNature: new FormControl(''),
    });
  }

  save() {
    if(this.formMatriz.invalid) {return;}  
    const { numDecision, numStatesNature }: Criterian  = this.formMatriz.value;
    
    this.table = this.formSer.createTable(numDecision,numStatesNature);
  }
}
