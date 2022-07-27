import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Contador App';
  numero: number = 10;
  base: number = 5;
  // sumar(){
  //   this.numero+=1;
  // }
  // restar(){this.numero-=1;}
  acumular(valor:number){
    this.numero+=valor;
  }
  acumulabase(bandera:boolean){
    if (bandera) {
        this.base+=5;
    } else {
      this.base-=5;
    }
  }
}
