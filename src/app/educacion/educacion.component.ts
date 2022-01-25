import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from '../servicios/datos-porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  miPorfolio: any;


  constructor(private datosPorfolio: DatosPorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{ this.miPorfolio = data; });

  }

}
