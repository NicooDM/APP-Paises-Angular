import { Component } from '@angular/core';
import { RESTCountrieResponse } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises : RESTCountrieResponse [] = [];
  paisesSugeridos : RESTCountrieResponse[]=[];
  mostrarSugerencias : boolean = false;
  constructor(private paisService: PaisService) {}

  buscar(termino:string) {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
       
      },
      (err) => {
        this.hayError = true;
        this.paises = []
      }
    );
  }
  porSugerencias(termino : string){
    this.mostrarSugerencias = true;
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarPais(termino).subscribe(paises=> this.paisesSugeridos = paises.splice(0,5),(err=>this.paisesSugeridos=[]))
    

  }
  buscarSugerido(termino : string){
    this.buscar(termino)

  }
}
