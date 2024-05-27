import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent {
  public proyecto: any = {anio: '2024', nombreProyecto: 'Proyecto de Clase'};
  public tecnologia: any = {leyenda: 'WebApp desarrollada con ', tec1: 'Angular ', tec2: 'Spring5'};
  public autor: string = 'ASAE';
}

