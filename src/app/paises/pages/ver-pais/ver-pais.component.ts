import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';
import { RESTCountrieResponse } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  pais !: RESTCountrieResponse;
  ngOnInit() {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
      tap(console.log))
      .subscribe((pais) => this.pais=pais);
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}
}
