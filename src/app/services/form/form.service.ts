import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  createTable(numDecision: number, numStatesNature: number) {
    const table = Array();
    const arrayDesicion = Array.from(Array(numDecision).keys());  
    arrayDesicion.forEach(item => {
        table[item] = Array.from(Array(numStatesNature).keys())
    });
    return table;
  }
}
