import { Component, OnInit } from '@angular/core';

interface Transaction {
  item: string;
  cost1: number;
  cost2: number;
  cost3: number;
  cost4: number;
  cost5: number;
  cost6: number;
  cost7: number;
  cost8: number;
  cost9: number;
  cost10: number;
}

@Component({
  selector: 'app-abc-subtema2',
  templateUrl: './subtema2.component.html',
  styleUrls: ['./subtema2.component.scss'],
})
export class AbcSubtema2Component implements OnInit {
  resultado1 = 0;
  resultado2 = 0;
  resultado3 = 0;
  resultado4 = 0;
  resultado5 = 0;
  resultado6 = 0;
  resultado7 = 0;
  resultado8 = 0;
  resultado9 = 0;

  dato1 = 5;
  dato2 = 15;
  dato3 = 10;
  dato4 = 10;
  dato5 = 10;
  dato6 = 10;
  dato7 = 5;
  dato8 = 6;
  dato9 = 20;
  dato10 = 15;
  dato11 = 10;
  dato12 = 15;
  dato13 = 10;
  dato14 = 20;
  dato15 = 5;
  dato16 = 20;
  dato17 = 7;
  dato18 = 20;
  dato19 = 20;
  dato20 = 15;
  dato21 = 10;
  dato22 = 15;
  dato23 = 10;
  dato24 = 7;

  total1 = 0;
  total2 = 0;
  total3 = 0;
  total4 = 0;
  total5 = 0;
  total6 = 0;
  total7 = 0;
  total8 = 0;
  total9 = 0;


  totalFinal1 = 0;
  totalFinal2 = 0;
  totalFinal3 = 0;
  totalFinal4 = 0;

  total11 = 0;
  total22 = 0;
  total33 = 0;
  total44 = 0;
  total55 = 0;
  total66 = 0;

  totalCompras = 0;
  totalInversion = 0;
  totalPIBG = 0;
  totalPIBY = 0;
  totalSyS = 0;



  ngOnInit() {
    this.sumas();
    this.as();
  }

  longTitle1 = `Compra de Bienes Intermedios`;
  longText1 = `Compra de Semillas`;
  longText2 = `Compra de Fertilizantes`;
  longText3 = `Pago de Fletes`;

  longTitle2 = `Valor Agregado`;
  longText4 = `Pago de Salarios`;
  longText5 = `Pago de Rentas`;
  longText6 = `Rentabilidad del Capital`;
  longText7 = `Beneficios Extraordinario`;

  longTitle3 = `Valor Bruto de Produccion`;
  longText8 = `Compra de Bienes de Capital`;

  longText9 = `Compra de Algodon`;
  longText10 = `Compra Combustible`;
  longText11 = `Pago de Telefono`;

  longText12 = `Vende Bienes de Capital`;

  longText13 = `Pago de Comunicaciones`;
  sobremi: any;
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
  sobremi11: any;
  sobremi12: any;
  sobremi13: any;
  sobremi14: any;
  sobremi15: any;
  sobremi16: any;
  sobremi17: any;
  sobremi18: any;
  sobremi19: any;
  sobremi20: any;
  sobremi21: any;
  sobremi22: any;
  sobremi23: any;
  sobremi24: any;
  sobremi25: any;




  afectado: any;
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
  afectado31: any;
  afectado32: any;
  afectado33: any;
  afectado34: any;
  afectado35: any;
  afectado36: any;
  afectado37: any;
  afectado38: any;
  afectado39: any;
  afectado40: any;
  afectado41: any;
  afectado42: any;
  afectado43: any;
  afectado44: any;
  afectado45: any;
  afectado46: any;
  afectado47: any;




  as() {
    this.sobremi = document.getElementById('sobremi');
    this.sobremi1 = document.getElementById('sobremi1');
    this.sobremi2 = document.getElementById('sobremi2');
    this.sobremi3 = document.getElementById('sobremi3');
    this.sobremi4 = document.getElementById('sobremi4');
    this.sobremi5 = document.getElementById('sobremi5');
    this.sobremi6 = document.getElementById('sobremi6');
    this.sobremi7 = document.getElementById('sobremi7');
    this.sobremi8 = document.getElementById('sobremi8');
    this.sobremi9 = document.getElementById('sobremi9');
    this.sobremi10 = document.getElementById('sobremi10');
    this.sobremi11 = document.getElementById('sobremi11');
    this.sobremi12 = document.getElementById('sobremi12');
    this.sobremi13 = document.getElementById('sobremi13');
    this.sobremi14 = document.getElementById('sobremi14');
    this.sobremi15 = document.getElementById('sobremi15');
    this.sobremi16 = document.getElementById('sobremi16');
    this.sobremi17 = document.getElementById('sobremi17');
    this.sobremi18 = document.getElementById('sobremi18');
    this.sobremi19 = document.getElementById('sobremi19');
    this.sobremi20 = document.getElementById('sobremi20');
    this.sobremi21 = document.getElementById('sobremi21');
    this.sobremi22 = document.getElementById('sobremi22');
    this.sobremi23 = document.getElementById('sobremi23');









    this.afectado = document.getElementById('afectado');
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
    this.afectado30 = document.getElementById('afectado30');
    this.afectado31 = document.getElementById('afectado31');
    this.afectado32 = document.getElementById('afectado32');
    this.afectado33 = document.getElementById('afectado33');
    this.afectado34 = document.getElementById('afectado34');
    this.afectado35 = document.getElementById('afectado35');
    this.afectado36 = document.getElementById('afectado36');
    this.afectado37 = document.getElementById('afectado37');
    this.afectado38 = document.getElementById('afectado38');
    this.afectado39 = document.getElementById('afectado39');
    this.afectado40 = document.getElementById('afectado40');
    this.afectado41 = document.getElementById('afectado41');
    this.afectado42 = document.getElementById('afectado42');
    this.afectado43 = document.getElementById('afectado43');
    this.afectado44 = document.getElementById('afectado44');
    this.afectado45 = document.getElementById('afectado45');
    this.afectado46 = document.getElementById('afectado46');
    this.afectado47 = document.getElementById('afectado47');











    this.sobremi.addEventListener(
      'mouseover',
      () => {
        this.afectado.className = 'afectadoFinal';
        this.afectado1.className = 'afectadoFinal';
        this.afectado2.className = 'afectadoFinal';

      },
      false
    );
    this.sobremi.addEventListener(
      'mouseout',
      () => {
        this.afectado.className = '';
        this.afectado1.className = '';
        this.afectado2.className = '';
      },
      false
    );

    this.sobremi1.addEventListener(
      'mouseover',
      () => {
        this.afectado3.className = 'afectadoFinal';
        this.afectado4.className = 'afectadoFinal';
        this.afectado5.className = 'afectadoFinal';

      },
      false
    );
    this.sobremi1.addEventListener(
      'mouseout',
      () => {
        this.afectado3.className = '';
        this.afectado4.className = '';
        this.afectado5.className = '';
      },
      false
    );

    this.sobremi2.addEventListener(
      'mouseover',
      () => {
        this.afectado6.className = 'afectadoFinal';
        this.afectado7.className = 'afectadoFinal';
        this.afectado8.className = 'afectadoFinal';

      },
      false
    );
    this.sobremi2.addEventListener(
      'mouseout',
      () => {
        this.afectado6.className = '';
        this.afectado7.className = '';
        this.afectado8.className = '';
      },
      false
    );
    this.sobremi3.addEventListener(
      'mouseover',
      () => {
        this.afectado.className = 'afectadoFinal1';
        this.afectado3.className = 'afectadoFinal1';
        this.afectado6.className = 'afectadoFinal1';

      },
      false
    );
    this.sobremi3.addEventListener(
      'mouseout',
      () => {
        this.afectado.className = '';
        this.afectado3.className = '';
        this.afectado6.className = '';
      },
      false
    );
    this.sobremi4.addEventListener(
      'mouseover',
      () => {
        this.afectado1.className = 'afectadoFinal1';
        this.afectado4.className = 'afectadoFinal1';
        this.afectado7.className = 'afectadoFinal1';

      },
      false
    );
    this.sobremi4.addEventListener(
      'mouseout',
      () => {
        this.afectado1.className = '';
        this.afectado4.className = '';
        this.afectado7.className = '';
      },
      false
    );
    this.sobremi5.addEventListener(
      'mouseover',
      () => {
        this.afectado2.className = 'afectadoFinal1';
        this.afectado5.className = 'afectadoFinal1';
        this.afectado8.className = 'afectadoFinal1';

      },
      false
    );
    this.sobremi5.addEventListener(
      'mouseout',
      () => {
        this.afectado2.className = '';
        this.afectado5.className = '';
        this.afectado8.className = '';
      },
      false
    );
    this.sobremi6.addEventListener(
      'mouseover',
      () => {
        this.afectado9.className = 'afectadoFinal2';
        this.afectado10.className = 'afectadoFinal2';
        this.afectado11.className = 'afectadoFinal2';
        this.afectado12.className = 'afectadoFinal2';
        this.afectado13.className = 'afectadoFinal2';
        this.afectado14.className = 'afectadoFinal2';


      },
      false
    );
    this.sobremi6.addEventListener(
      'mouseout',
      () => {
        this.afectado9.className = '';
        this.afectado10.className = '';
        this.afectado11.className = '';
        this.afectado12.className = '';
        this.afectado13.className = '';
        this.afectado14.className = '';
      },
      false
    );
    this.sobremi7.addEventListener(
      'mouseover',
      () => {
        this.afectado15.className = 'afectadoFinal3';
        this.afectado16.className = 'afectadoFinal3';
        this.afectado17.className = 'afectadoFinal3';
      },
      false
    );
    this.sobremi7.addEventListener(
      'mouseout',
      () => {
        this.afectado15.className = '';
        this.afectado16.className = '';
        this.afectado17.className = '';
      },
      false
    );
    this.sobremi8.addEventListener(
      'mouseover',
      () => {
        this.afectado18.className = 'afectadoFinal3';
        this.afectado19.className = 'afectadoFinal3';
        this.afectado20.className = 'afectadoFinal3';
      },
      false
    );
    this.sobremi8.addEventListener(
      'mouseout',
      () => {
        this.afectado18.className = '';
        this.afectado19.className = '';
        this.afectado20.className = '';
      },
      false
    );
    this.sobremi9.addEventListener(
      'mouseover',
      () => {
        this.afectado21.className = 'afectadoFinal3';
        this.afectado22.className = 'afectadoFinal3';
        this.afectado23.className = 'afectadoFinal3';
      },
      false
    );
    this.sobremi9.addEventListener(
      'mouseout',
      () => {
        this.afectado21.className = '';
        this.afectado22.className = '';
        this.afectado23.className = '';
      },
      false
    );
    this.sobremi10.addEventListener(
      'mouseover',
      () => {
        this.afectado24.className = 'afectadoFinal3';
        this.afectado25.className = 'afectadoFinal3';
        this.afectado26.className = 'afectadoFinal3';
      },
      false
    );
    this.sobremi10.addEventListener(
      'mouseout',
      () => {
        this.afectado24.className = '';
        this.afectado25.className = '';
        this.afectado26.className = '';
      },
      false
    );
    this.sobremi11.addEventListener(
      'mouseover',
      () => {
        this.afectado15.className = 'afectadoFinal1';
        this.afectado18.className = 'afectadoFinal1';
        this.afectado21.className = 'afectadoFinal1';
        this.afectado24.className = 'afectadoFinal1';

      },
      false
    );
    this.sobremi11.addEventListener(
      'mouseout',
      () => {
        this.afectado15.className = '';
        this.afectado18.className = '';
        this.afectado21.className = '';
        this.afectado24.className = '';
      },
      false
    );
    this.sobremi12.addEventListener(
      'mouseover',
      () => {
        this.afectado16.className = 'afectadoFinal1';
        this.afectado19.className = 'afectadoFinal1';
        this.afectado22.className = 'afectadoFinal1';
        this.afectado25.className = 'afectadoFinal1';

      },
      false
    );
    this.sobremi12.addEventListener(
      'mouseout',
      () => {
        this.afectado16.className = '';
        this.afectado19.className = '';
        this.afectado22.className = '';
        this.afectado25.className = '';
      },
      false
    );
    this.sobremi13.addEventListener(
      'mouseover',
      () => {
        this.afectado17.className = 'afectadoFinal1';
        this.afectado20.className = 'afectadoFinal1';
        this.afectado23.className = 'afectadoFinal1';
        this.afectado26.className = 'afectadoFinal1';

      },
      false
    );
    this.sobremi13.addEventListener(
      'mouseout',
      () => {
        this.afectado17.className = '';
        this.afectado20.className = '';
        this.afectado23.className = '';
        this.afectado26.className = '';
      },
      false
    );
    this.sobremi14.addEventListener(
      'mouseover',
      () => {
        this.afectado27.className = 'afectadoFinal2';
        this.afectado28.className = 'afectadoFinal2';
        this.afectado29.className = 'afectadoFinal2';
        this.afectado30.className = 'afectadoFinal2';
        this.afectado31.className = 'afectadoFinal2';
        this.afectado32.className = 'afectadoFinal2';
        this.afectado33.className = 'afectadoFinal2';
      },
      false
    );
    this.sobremi14.addEventListener(
      'mouseout',
      () => {
        this.afectado27.className = '';
        this.afectado28.className = '';
        this.afectado29.className = '';
        this.afectado30.className = '';
        this.afectado31.className = '';
        this.afectado32.className = '';
        this.afectado33.className = '';
      },
      false
    );
    this.sobremi15.addEventListener(
      'mouseover',
      () => {
        this.afectado34.className = 'afectadoFinal2';
        this.afectado35.className = 'afectadoFinal2';
        this.afectado36.className = 'afectadoFinal2';

      },
      false
    );
    this.sobremi15.addEventListener(
      'mouseout',
      () => {
        this.afectado34.className = '';
        this.afectado35.className = '';
        this.afectado36.className = '';
      },
      false
    );
    this.sobremi16.addEventListener(
      'mouseover',
      () => {
        this.afectado37.className = 'afectadoFinal4';
        this.afectado12.className = 'afectadoFinal4';

      },
      false
    );
    this.sobremi16.addEventListener(
      'mouseout',
      () => {
        this.afectado37.className = '';
        this.afectado12.className = '';
      },
      false
    );
    this.sobremi17.addEventListener(
      'mouseover',
      () => {
        this.afectado38.className = 'afectadoFinal4';
        this.afectado13.className = 'afectadoFinal4';

      },
      false
    );
    this.sobremi17.addEventListener(
      'mouseout',
      () => {
        this.afectado38.className = '';
        this.afectado13.className = '';
      },
      false
    );
    this.sobremi18.addEventListener(
      'mouseover',
      () => {
        this.afectado39.className = 'afectadoFinal4';
        this.afectado14.className = 'afectadoFinal4';

      },
      false
    );
    this.sobremi18.addEventListener(
      'mouseout',
      () => {
        this.afectado39.className = '';
        this.afectado14.className = '';
      },
      false
    );
    this.sobremi19.addEventListener(
      'mouseover',
      () => {
        this.afectado40.className = 'afectadoFinal5';

      },
      false
    );
    this.sobremi19.addEventListener(
      'mouseout',
      () => {
        this.afectado40.className = '';
      },
      false
    );
    this.sobremi20.addEventListener(
      'mouseover',
      () => {
        this.afectado34.className = 'afectadoFinal5';
        this.afectado35.className = 'afectadoFinal5';
        this.afectado36.className = 'afectadoFinal5';
        this.afectado41.className = 'afectadoFinal5';

      },
      false
    );
    this.sobremi20.addEventListener(
      'mouseout',
      () => {
        this.afectado34.className = '';
        this.afectado35.className = '';
        this.afectado36.className = '';
        this.afectado41.className = '';
      },
      false
    );
    this.sobremi21.addEventListener(
      'mouseover',
      () => {
        this.afectado42.className = 'afectadoFinal5';

      },
      false
    );
    this.sobremi21.addEventListener(
      'mouseout',
      () => {
        this.afectado42.className = '';
      },
      false
    );
    this.sobremi22.addEventListener(
      'mouseover',
      () => {
        this.afectado43.className = 'afectadoFinal2';
        this.afectado44.className = 'afectadoFinal2';
        this.afectado45.className = 'afectadoFinal2';
      },
      false
    );
    this.sobremi22.addEventListener(
      'mouseout',
      () => {
        this.afectado43.className = '';
        this.afectado44.className = '';
        this.afectado45.className = '';
      },
      false
    );
    this.sobremi23.addEventListener(
      'mouseover',
      () => {
        this.afectado40.className = 'afectadoFinal6';
        this.afectado41.className = 'afectadoFinal6';
        this.afectado42.className = 'afectadoFinal6';
        this.afectado46.className = 'afectadoFinal6';
        this.afectado47.className = 'afectadoFinal6';

      },
      false
    );
    this.sobremi23.addEventListener(
      'mouseout',
      () => {
        this.afectado40.className = '';
        this.afectado41.className = '';
        this.afectado42.className = '';
        this.afectado46.className = '';
        this.afectado47.className = '';
      },
      false
    );
  }
  sumas() {
    this.resultado1 = this.dato1 + this.dato2 + this.dato3;
    this.resultado2 = this.dato4 + this.dato5 + this.dato6 + this.dato7;
    this.resultado3 = this.resultado1 + this.resultado2;
    this.resultado4 = this.dato9 + this.dato10 + this.dato11;
    this.resultado5 = this.dato12 + this.dato13 +this.dato14 + this.dato15;
    this.resultado6 = this.resultado4 + this.resultado5;
    this.resultado7 = this.dato18 + this.dato19;
    this.resultado8 = this.dato20 + this.dato21 + this.dato22 + this.dato23;
    this.resultado9 = this.resultado7 + this.resultado8;

    this.total1 = this.dato1 + this.dato9;
    this.total2 = this.dato2 + this.dato10 + this.dato18;
    this.total3 = this.dato3 + this.dato11 + this.dato19;
    this.total4 = this.resultado1 + this.resultado4 + this.resultado7;
    this.total5 = this.dato4 + this.dato12 + this.dato20;
    this.total6 = this.dato5 + this.dato13 + this.dato21;
    this.total7 = this.dato6 + this.dato14 + this.dato22;
    this.total8 = this.dato7 + this.dato15 + this.dato23;
    this.total9 = this.resultado2 + this.resultado5 + this.resultado8;

    this.total11 = this.resultado3 - this.total1;
    this.total22 = this.resultado6 - this.dato8 - this.dato17 - this.dato24 - this.total2;
    this.total33 = this.resultado9 - this.total3;

    this.total44 = this.total11;
    this.total55 = this.total22 + this.dato8 + this.dato17 + this.dato24;
    this.total66 = this.total33;

    this.totalFinal1 = this.resultado3 + this.resultado6 + this.resultado9;
    this.totalFinal2 = this.total11 + this.total22 + this.total33;

    this.totalCompras = this.total11 + this.total22 + this.total33;
    this.totalInversion = this.dato8 + this.dato17 + this.dato24;
    this.totalPIBG = this.totalCompras + this.totalInversion;
    this.totalSyS = this.total5 + this.total6 + this.total7 + this.total8;
  }
}
