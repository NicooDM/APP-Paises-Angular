import { Component } from '@angular/core';
import { RESTCountrieResponse } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
  regiones : string[]=['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  regionActiva : string ='';
  paises : RESTCountrieResponse[] = []


  constructor(private paisService : PaisService){}

  activarRegion(region:string){
    if(region===this.regionActiva){return;}
    this.regionActiva = region;
    this.paises=[];
    this.paisService.buscarRegion(region).subscribe((paises)=>{
      this.paises = paises;
      console.log(paises)
    })

  }

  getClaseCSS(region : string){
    return ( region === this.regionActiva ? 'btn btn-primary' : 'btn btn-outline-primary')

  }


}
