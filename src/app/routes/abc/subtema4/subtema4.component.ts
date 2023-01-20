import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abc-subtema4',
  templateUrl: './subtema4.component.html',
  styleUrls: ['./subtema4.component.scss'],
})
export class AbcSubtema4Component implements OnInit {
  resultado1 = 0;
  resultado2 = 0;
  resultado3 = 0;
  resultado4 = 0;
  resultado5 = 0;
  resultado6 = 0;
  resultado7 = 0;
  resultado8 = 0;
  resultado9 = 0;

  dato1 = 33.76;
  dato2 = 34.34;
  dato3 = 122.81;
  dato4 = 126.81;
  dato5 = 22.33;
  dato6 = 22.99;
  dato7 = 43;
  dato8 = 46.24;
  dato9 = 65.51;
  dato10 = 66.47;
  dato11 = 19.06;
  dato12 = 19.16;

  constructor() {}

  ngOnInit() {
    this.sumas();
  }

  sumas() {
    this.resultado1 = Math.round((this.dato2 / this.dato1) * 100 * 100) / 100;
    this.resultado2 = Math.round((this.dato4 / this.dato3) * 100 * 100) / 100;
    this.resultado3 = Math.round((this.dato6 / this.dato5) * 100 * 100) / 100;
    this.resultado4 = Math.round((this.dato8 / this.dato7) * 100 * 100) / 100;
    this.resultado5 = Math.round((this.dato10 / this.dato9) * 100 * 100) / 100;
    this.resultado6 = Math.round((this.dato12 / this.dato11) * 100 * 100) / 100;

    this.resultado7 =
      this.resultado1 +
      this.resultado2 +
      this.resultado3 +
      this.resultado4 +
      this.resultado5 +
      this.resultado6;

    this.resultado8 = Math.round((this.resultado7 / 6) * 100) / 100;
    this.resultado9 = Math.round((this.resultado8 - 100) * 100) / 100;

  }
}
