import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre:string="iron man";
    edad:number=45;
    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }
    obtenerNombre():string{
        return this.nombre + " " + this.edad;
    }
    cambiarNombre(){
        this.nombre = "Spiderhulk";
    }
    cambiarEdad(){
        this.edad = 30;
    }
}