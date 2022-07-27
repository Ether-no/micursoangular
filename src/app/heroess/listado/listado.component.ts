import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  // constructor() { }

  // ngOnInit(): void {
  // }
  // borrados:string[] = [];
  borrados:string='';
  heroes: string[] = ['Spiderman','thor','iron man','hulk','wolverine'];
  borrarheroe(){
    // this.borrados.push(this.heroes[0]);
    // this.heroes.shift();
    this.borrados = this.heroes.shift() || '';
  }
}
