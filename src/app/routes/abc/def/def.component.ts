import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-abc-def',
  templateUrl: './def.component.html',
  styleUrls: ['./def.component.scss'],
})
export class AbcDefComponent implements OnInit {
  resultado1 = 0;
  resultado2 = 0;
  resultado3 = 0;

  dato1 = 40;
  dato2 = 40;
  dato3 = 120;
  dato5 = 100;
  dato6 = 69;
  dato7 = 1;
  dato9 = 40;
  dato10 = 100;
  dato11 = 0;
  dato12 = 0;

  total1 = 0;
  total2 = 0;
  total3 = 0;

  totalFinal1 = 0;
  totalFinal2 = 0;

  total11 = 0;
  total22 = 0;
  total33 = 0;

  longText1 = `Ingresos`;
  longText2 = `Salarios`;
  longText3 = `Arrendamientos`;
  longText4 = `Beneficios`;
  longText5 = `Compras`;

  constructor() {}

  ngOnInit() {
    this.sumas();
    this.as();
  }
  sobremi: any;
  afectado: any;

  as() {
    this.sobremi = document.getElementById('sobremi');
    this.afectado = document.getElementById('rowFinal2');
    this.sobremi.addEventListener(
      'mouseover',
      () => {
        this.afectado.className = 'afectado';
      },
      false
    );
    this.sobremi.addEventListener(
      'mouseout',
      () => {
        this.afectado.className = '';
      },
      false
    );
  }

  sumas() {
    this.resultado1 = this.dato1 + this.dato2 + this.dato3;
    this.resultado2 = this.resultado1 + this.dato5 + this.dato6 + this.dato7;
    this.resultado3 = this.resultado2 + this.dato9 + this.dato10;

    this.total1 = this.resultado1;
    this.total2 = this.resultado2 - this.resultado1;
    this.total3 = this.resultado3 - this.resultado2;

    this.totalFinal1 = this.total1 + this.total2 + this.total3;

    this.total11 = this.dato1 + this.dato5 + this.dato9;
    this.total22 = this.dato3 + this.dato7 + this.dato10;
    this.total33 = this.dato2 + this.dato6;

    this.totalFinal2 = this.total11 + this.total22 + this.total33;
  }
  suma2() {
    this.resultado2 = this.resultado1 + this.dato5 + this.dato6 + this.dato7;
  }

  suma3() {
    this.resultado3 = this.resultado2 + this.dato9 + this.dato10;
  }
}
