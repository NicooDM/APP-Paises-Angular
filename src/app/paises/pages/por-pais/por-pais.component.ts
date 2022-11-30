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
  constructor(private paisService: PaisService) {}

  buscar(termino:string) {
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
    this.hayError = false;
    

  }
}
