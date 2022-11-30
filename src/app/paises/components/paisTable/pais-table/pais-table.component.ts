import { Component, Input, Output } from '@angular/core';
import { RESTCountrieResponse } from 'src/app/paises/interface/pais.interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.css']
})
export class PaisTableComponent {
  @Input() paises : RESTCountrieResponse[] = [];

  
}
