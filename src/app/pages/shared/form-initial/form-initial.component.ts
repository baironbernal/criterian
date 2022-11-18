import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form/form.service';
import { Criterian } from '../../../models/criterian';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form-initial',
  templateUrl: './form-initial.component.html',
  styleUrls: ['./form-initial.component.css']
})
export class FormInitialComponent {
  
  @Output() spread = new EventEmitter();

  constructor(private formSer: FormService) {}

  table = Array();
  loading: boolean = false; 
  formMatriz: FormGroup = new FormGroup('');
  formMatrizWithData: FormGroup = new FormGroup('');

  ngOnInit() {
    this.formMatriz= new FormGroup({
      numDecision: new FormControl(''),
      numStatesNature: new FormControl(''),
    });
  }

  cancel() {
    this.table = Array()
  }

  save() {
    if(this.formMatriz.invalid) {return;}
    const { numDecision, numStatesNature }: Criterian  = this.formMatriz.value;
    
    this.table = this.formSer.createTable(numDecision,numStatesNature);
  }

  onSubmit(f: NgForm) {
    this.spread.emit(f.value);
      
  }
}
