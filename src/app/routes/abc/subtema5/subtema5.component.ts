import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abc-subtema5',
  templateUrl: './subtema5.component.html',
  styleUrls: ['./subtema5.component.scss'],
})
export class AbcSubtema5Component implements OnInit {
  resultado1 = 0;
  resultado2 = 0;
  resultado3 = 0;
  resultado4 = 0;
  resultado5 = 0;
  resultado6 = 0;
  resultado7 = 0;
  resultado8 = 0;
  resultado9 = 0;
  resultado10 = 0;
  resultado11 = 0;
  resultado12 = 0;
  resultado13 = 0;
  resultado14 = 0;

  total1 = 0;
  total2 = 0;
  total3 = 0;
  total4 = 0;
  total5 = 0;
  total6 = 0;
  total7 = 0;
  total8 = 0;
  total9 = 0;
  total10 = 0;
  total11 = 0;
  total12 = 0;
  total13 = 0;
  total14 = 0;
  total15 = 0;
  final1 = 0;



  dato1 = 2.8;
  dato2 = 75.32;
  dato3 = 2.9;
  dato4 = 80.07;
  dato5 = 1.4;
  dato6 = 70.50;
  dato7 = 1.8;
  dato8 = 74.60;
  dato9 = 0.5;
  dato10 = 70.80;
  dato11 = 0.4;
  dato12 = 85.80;
  dato13 = 1.4;
  dato14 = 43;
  dato15 = 1.6;
  dato16 = 42.27;
  dato17 = 4;
  dato18 = 49.76;
  dato19 = 4.1;
  dato20 = 62.42;

  sobremi0: any;
  sobremi1: any;
  sobremi2: any;
  sobremi3: any;
  sobremi4: any;
  sobremi5: any;
  sobremi6: any;
  sobremi7: any;
  sobremi8: any;
  sobremi9: any;
  sobremi10: any;


  afectado0: any;
  afectado1: any;
  afectado2: any;
  afectado3: any;
  afectado4: any;
  afectado5: any;
  afectado6: any;
  afectado7: any;
  afectado8: any;
  afectado9: any;
  afectado10: any;
  afectado11: any;
  afectado12: any;
  afectado13: any;
  afectado14: any;
  afectado15: any;
  afectado16: any;
  afectado17: any;
  afectado18: any;
  afectado19: any;
  afectado20: any;
  afectado21: any;
  afectado22: any;
  afectado23: any;
  afectado24: any;
  afectado25: any;
  afectado26: any;
  afectado27: any;
  afectado28: any;
  afectado29: any;
  afectado30: any;



  constructor() {}

  ngOnInit() {
    this.sumas();
    this.as();
  }
  as() {
    this.sobremi0 = document.getElementById('sobremi0');
    this.sobremi1 = document.getElementById('sobremi1');
    this.sobremi2 = document.getElementById('sobremi2');
    this.sobremi3 = document.getElementById('sobremi3');


    this.afectado0 = document.getElementById('afectado0');
    this.afectado1 = document.getElementById('afectado1');
    this.afectado2 = document.getElementById('afectado2');
    this.afectado3 = document.getElementById('afectado3');
    this.afectado4 = document.getElementById('afectado4');
    this.afectado5 = document.getElementById('afectado5');
    this.afectado6 = document.getElementById('afectado6');
    this.afectado7 = document.getElementById('afectado7');
    this.afectado8 = document.getElementById('afectado8');
    this.afectado9 = document.getElementById('afectado9');
    this.afectado10 = document.getElementById('afectado10');
    this.afectado11 = document.getElementById('afectado11');
    this.afectado12 = document.getElementById('afectado12');
    this.afectado13 = document.getElementById('afectado13');
    this.afectado14 = document.getElementById('afectado14');
    this.afectado15 = document.getElementById('afectado15');
    this.afectado16 = document.getElementById('afectado16');
    this.afectado17 = document.getElementById('afectado17');
    this.afectado18 = document.getElementById('afectado18');
    this.afectado19 = document.getElementById('afectado19');
    this.afectado20 = document.getElementById('afectado20');
    this.afectado21 = document.getElementById('afectado21');
    this.afectado22 = document.getElementById('afectado22');
    this.afectado23 = document.getElementById('afectado23');
    this.afectado24 = document.getElementById('afectado24');
    this.afectado25 = document.getElementById('afectado25');
    this.afectado26 = document.getElementById('afectado26');
    this.afectado27 = document.getElementById('afectado27');
    this.afectado28 = document.getElementById('afectado28');
    this.afectado29 = document.getElementById('afectado29');




    this.sobremi0.addEventListener(
      'mouseover',
      () => {
        this.afectado0.className = 'afectadoFinal1';
        this.afectado1.className = 'afectadoFinal1';
        this.afectado2.className = 'afectadoFinal1';
        this.afectado3.className = 'afectadoFinal1';
        this.afectado4.className = 'afectadoFinal1';
        this.afectado5.className = 'afectadoFinal1';
        this.afectado6.className = 'afectadoFinal1';
        this.afectado7.className = 'afectadoFinal1';
        this.afectado8.className = 'afectadoFinal1';
        this.afectado9.className = 'afectadoFinal1';

      },
      false
    );
    this.sobremi0.addEventListener(
      'mouseout',
      () => {
        this.afectado0.className = '';
        this.afectado1.className = '';
        this.afectado2.className = '';
        this.afectado3.className = '';
        this.afectado4.className = '';
        this.afectado5.className = '';
        this.afectado6.className = '';
        this.afectado7.className = '';
        this.afectado8.className = '';
        this.afectado9.className = '';

      },
      false
    );
    this.sobremi1.addEventListener(
      'mouseover',
      () => {
        this.afectado1.className = 'afectadoFinal2';
        this.afectado3.className = 'afectadoFinal2';
        this.afectado5.className = 'afectadoFinal2';
        this.afectado7.className = 'afectadoFinal2';
        this.afectado9.className = 'afectadoFinal2';
        this.afectado10.className = 'afectadoFinal2';
        this.afectado11.className = 'afectadoFinal2';
        this.afectado12.className = 'afectadoFinal2';
        this.afectado13.className = 'afectadoFinal2';
        this.afectado14.className = 'afectadoFinal2';

      },
      false
    );
    this.sobremi1.addEventListener(
      'mouseout',
      () => {
        this.afectado1.className = '';
        this.afectado3.className = '';
        this.afectado5.className = '';
        this.afectado7.className = '';
        this.afectado9.className = '';
        this.afectado10.className = '';
        this.afectado11.className = '';
        this.afectado12.className = '';
        this.afectado13.className = '';
        this.afectado14.className = '';
      },
      false
    );
    this.sobremi2.addEventListener(
      'mouseover',
      () => {
        this.afectado15.className = 'afectadoFinal1';
        this.afectado16.className = 'afectadoFinal1';
        this.afectado18.className = 'afectadoFinal1';
        this.afectado19.className = 'afectadoFinal1';
        this.afectado21.className = 'afectadoFinal1';
        this.afectado22.className = 'afectadoFinal1';
        this.afectado24.className = 'afectadoFinal1';
        this.afectado25.className = 'afectadoFinal1';
        this.afectado27.className = 'afectadoFinal1';
        this.afectado28.className = 'afectadoFinal1';

      },
      false
    );
    this.sobremi2.addEventListener(
      'mouseout',
      () => {
        this.afectado15.className = '';
        this.afectado16.className = '';
        this.afectado18.className = '';
        this.afectado19.className = '';
        this.afectado21.className = '';
        this.afectado22.className = '';
        this.afectado24.className = '';
        this.afectado25.className = '';
        this.afectado27.className = '';
        this.afectado28.className = '';
      },
      false
    );
    this.sobremi3.addEventListener(
      'mouseover',
      () => {
        this.afectado15.className = 'afectadoFinal2';
        this.afectado17.className = 'afectadoFinal2';
        this.afectado18.className = 'afectadoFinal2';
        this.afectado20.className = 'afectadoFinal2';
        this.afectado21.className = 'afectadoFinal2';
        this.afectado23.className = 'afectadoFinal2';
        this.afectado24.className = 'afectadoFinal2';
        this.afectado26.className = 'afectadoFinal2';
        this.afectado27.className = 'afectadoFinal2';
        this.afectado29.className = 'afectadoFinal2';

      },
      false
    );
    this.sobremi3.addEventListener(
      'mouseout',
      () => {
        this.afectado15.className = '';
        this.afectado17.className = '';
        this.afectado18.className = '';
        this.afectado20.className = '';
        this.afectado21.className = '';
        this.afectado23.className = '';
        this.afectado24.className = '';
        this.afectado26.className = '';
        this.afectado27.className = '';
        this.afectado29.className = '';
      },
      false
    );

  }
  sumas() {
    this.resultado1 = Math.round(this.dato1 * this.dato2 * 100) / 100;
    this.resultado2 = Math.round(this.dato1 * this.dato4 * 100) / 100;

    this.resultado3 = Math.round(this.dato5 * this.dato6 * 100) / 100;
    this.resultado4 = Math.round(this.dato5 * this.dato8 * 100) / 100;

    this.resultado5 = Math.round(this.dato9 * this.dato10 * 100) / 100;
    this.resultado6 = Math.round(this.dato9 * this.dato12 * 100) / 100;

    this.resultado7 = Math.round(this.dato13 * this.dato14 * 100) / 100;
    this.resultado8 = Math.round(this.dato13 * this.dato16 * 100) / 100;

    this.resultado9 = Math.round(this.dato17 * this.dato18 * 100) / 100;
    this.resultado10 = Math.round(this.dato17 * this.dato20 * 100) / 100;

    this.resultado11 =
      this.resultado1 + this.resultado3 + this.resultado5 + this.resultado7 + this.resultado9;
    this.resultado12 =
      this.resultado2 + this.resultado4 + this.resultado6 + this.resultado8 + this.resultado10;

    this.resultado13 = Math.round((this.resultado12 / this.resultado11)*100 * 100) / 100;
    this.resultado14 = Math.round((this.resultado13 - 100) * 100) / 100;

    this.total1 = Math.round(this.dato3 * this.dato2 * 100) / 100;
    this.total2 = Math.round(this.dato3 * this.dato4 * 100) / 100;

    this.total3 = Math.round(this.dato7 * this.dato6 * 100) / 100;
    this.total4 = Math.round(this.dato7 * this.dato8 * 100) / 100;

    this.total5 = Math.round(this.dato11 * this.dato10 * 100) / 100;
    this.total6 = Math.round(this.dato11 * this.dato12 * 100) / 100;

    this.total7 = Math.round(this.dato15 * this.dato14 * 100) / 100;
    this.total8 = Math.round(this.dato15 * this.dato16 * 100) / 100;

    this.total9 = Math.round(this.dato19 * this.dato18 * 100) / 100;
    this.total10 = Math.round(this.dato19 * this.dato20 * 100) / 100;

    this.total11 =
    this.total1 + this.total3 + this.total5 + this.total7 + this.total9;
  this.total12 =
    this.total2 + this.total4 + this.total6 + this.total8 + this.total10;

    this.total13 = Math.round((this.total12 / this.total11)*100 * 100) / 100;
    this.total14 = Math.round((this.total13 - 100) * 100) / 100;
    this.final1 = Math.round((Math.sqrt(this.resultado13 * this.total13)) * 100) / 100;
  }
}
