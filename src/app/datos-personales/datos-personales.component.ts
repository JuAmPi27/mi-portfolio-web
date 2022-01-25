import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from '../servicios/datos-porfolio.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  constructor(private datosPorfolio: DatosPorfolioService) { }

  miPorfolio: any;


  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{ this.miPorfolio = data; });
  }

}
