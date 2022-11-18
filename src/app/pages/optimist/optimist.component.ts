import { Component } from '@angular/core';

@Component({
  selector: 'app-optimist',
  templateUrl: './optimist.component.html',
  styleUrls: ['./optimist.component.css']
})
export class OptimistComponent {
  title: string = 'Metodo Optimista';
  data: any[] = [];

  processSpread(t: any[]) {
    this.data = t;
    console.log("Evento padre con la información del hujo" , this.data)
  }
}
