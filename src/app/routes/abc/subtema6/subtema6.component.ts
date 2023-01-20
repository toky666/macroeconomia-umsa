import { Component, OnInit, ViewChild} from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-abc-subtema6',
  templateUrl: './subtema6.component.html',
  styleUrls: ['./subtema6.component.scss']
})


export class AbcSubtema6Component implements OnInit {
  favoriteSeason: any;
  selectedValue:any;
  seasons: string[] = ['2017', '2018', '2019'];
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
  resultado15 = 0;
  resultado16 = 0;
  resultado17 = 0;
  resultado18 = 0;
  resultado19 = 0;
  resultado20 = 0;
  resultado21 = 0;
  resultado22 = 0;
  resultado23 = 0;
  resultado24 = 0;
  resultado25 = 0;
  resultado26 = 0;
  resultado27 = 0;

  dato1 = 21;
  dato2 = 20;
  dato3 = 10;
  dato4 = 10;
  dato5 = 20;
  dato6 = 22;
  dato7 = 9;
  dato8 = 12;
  dato9 = 22;
  dato10 = 21;
  dato11 = 10;
  dato12 = 11;

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

  mensaje1: any;
  mensaje2: any;
  mensaje3: any;
  mensaje4: any;
  mensaje5: any;
  panelOpenState = false;
  panelOpenState1 = false;
  panelOpenState2 = false;



  foods: Food[] = [
    {value: '2017', viewValue: '2017'},
    {value: '2018', viewValue: '2018'},
    {value: '2019', viewValue: '2019'},
  ];

  constructor() {}

  ngOnInit() {
    this.selectedValue = '2017';
    this.sumas();
    this.as();
  }
  as() {
    this.sobremi0 = document.getElementById('sobremi0');
    this.sobremi1 = document.getElementById('sobremi1');
    this.sobremi2 = document.getElementById('sobremi2');
    this.sobremi3 = document.getElementById('sobremi3');
    this.sobremi4 = document.getElementById('sobremi4');
    this.sobremi5 = document.getElementById('sobremi5');
    this.sobremi6 = document.getElementById('sobremi6');
    this.sobremi7 = document.getElementById('sobremi7');
    this.sobremi8 = document.getElementById('sobremi8');





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


    this.sobremi0.addEventListener(
      'mouseover',
      () => {
        this.afectado0.className = 'afectadoFinal1';
        this.afectado1.className = 'afectadoFinal1';
        this.afectado2.className = 'afectadoFinal1';
        this.afectado3.className = 'afectadoFinal1';
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
      },
      false
    );
    this.sobremi1.addEventListener(
      'mouseover',
      () => {
        this.afectado4.className = 'afectadoFinal1';
        this.afectado5.className = 'afectadoFinal1';
        this.afectado6.className = 'afectadoFinal1';
        this.afectado7.className = 'afectadoFinal1';
      },
      false
    );
    this.sobremi1.addEventListener(
      'mouseout',
      () => {
        this.afectado4.className = '';
        this.afectado5.className = '';
        this.afectado6.className = '';
        this.afectado7.className = '';
      },
      false
    );
    this.sobremi2.addEventListener(
      'mouseover',
      () => {
        this.afectado8.className = 'afectadoFinal1';
        this.afectado9.className = 'afectadoFinal1';
        this.afectado10.className = 'afectadoFinal1';
        this.afectado11.className = 'afectadoFinal1';
      },
      false
    );
    this.sobremi2.addEventListener(
      'mouseout',
      () => {
        this.afectado8.className = '';
        this.afectado9.className = '';
        this.afectado10.className = '';
        this.afectado11.className = '';
      },
      false
    );
    this.sobremi3.addEventListener(
      'mouseover',
      () => {
        if(this.selectedValue == '2017'){
          this.afectado0.className = 'afectadoFinal2';
          this.afectado1.className = 'afectadoFinal2';
          this.afectado2.className = 'afectadoFinal2';
          this.afectado3.className = 'afectadoFinal2';
        }
        if(this.selectedValue == '2018'){
          this.afectado4.className = 'afectadoFinal2';
          this.afectado1.className = 'afectadoFinal2';
          this.afectado6.className = 'afectadoFinal2';
          this.afectado3.className = 'afectadoFinal2';
        }
        if(this.selectedValue == '2019'){
          this.afectado8.className = 'afectadoFinal2';
          this.afectado1.className = 'afectadoFinal2';
          this.afectado10.className = 'afectadoFinal2';
          this.afectado3.className = 'afectadoFinal2';
        }
      },
      false
    );
    this.sobremi3.addEventListener(
      'mouseout',
      () => {
        if(this.selectedValue == '2017'){
          this.afectado0.className = '';
          this.afectado1.className = '';
          this.afectado2.className = '';
          this.afectado3.className = '';
        }
        if(this.selectedValue == '2018'){
          this.afectado4.className = '';
          this.afectado1.className = '';
          this.afectado6.className = '';
          this.afectado3.className = '';
        }
        if(this.selectedValue == '2019'){
          this.afectado8.className = '';
          this.afectado1.className = '';
          this.afectado10.className = '';
          this.afectado3.className = '';
        }
      },
      false
    );

    this.sobremi4.addEventListener(
      'mouseover',
      () => {
        if(this.selectedValue == '2017'){
          this.afectado0.className = 'afectadoFinal2';
          this.afectado5.className = 'afectadoFinal2';
          this.afectado2.className = 'afectadoFinal2';
          this.afectado7.className = 'afectadoFinal2';
        }
        if(this.selectedValue == '2018'){
          this.afectado4.className = 'afectadoFinal2';
          this.afectado5.className = 'afectadoFinal2';
          this.afectado6.className = 'afectadoFinal2';
          this.afectado7.className = 'afectadoFinal2';
        }
        if(this.selectedValue == '2019'){
          this.afectado8.className = 'afectadoFinal2';
          this.afectado5.className = 'afectadoFinal2';
          this.afectado10.className = 'afectadoFinal2';
          this.afectado7.className = 'afectadoFinal2';
        }
      },
      false
    );
    this.sobremi4.addEventListener(
      'mouseout',
      () => {
        if(this.selectedValue == '2017'){
          this.afectado0.className = '';
          this.afectado5.className = '';
          this.afectado2.className = '';
          this.afectado7.className = '';
        }
        if(this.selectedValue == '2018'){
          this.afectado4.className = '';
          this.afectado5.className = '';
          this.afectado6.className = '';
          this.afectado7.className = '';
        }
        if(this.selectedValue == '2019'){
          this.afectado8.className = '';
          this.afectado5.className = '';
          this.afectado10.className = '';
          this.afectado7.className = '';
        }
      },
      false
    );
    this.sobremi5.addEventListener(
      'mouseover',
      () => {
        if(this.selectedValue == '2017'){
          this.afectado0.className = 'afectadoFinal2';
          this.afectado9.className = 'afectadoFinal2';
          this.afectado2.className = 'afectadoFinal2';
          this.afectado11.className = 'afectadoFinal2';
        }
        if(this.selectedValue == '2018'){
          this.afectado4.className = 'afectadoFinal2';
          this.afectado9.className = 'afectadoFinal2';
          this.afectado6.className = 'afectadoFinal2';
          this.afectado11.className = 'afectadoFinal2';
        }
        if(this.selectedValue == '2019'){
          this.afectado8.className = 'afectadoFinal2';
          this.afectado9.className = 'afectadoFinal2';
          this.afectado10.className = 'afectadoFinal2';
          this.afectado11.className = 'afectadoFinal2';
        }
      },
      false
    );
    this.sobremi5.addEventListener(
      'mouseout',
      () => {
        if(this.selectedValue == '2017'){
          this.afectado0.className = '';
          this.afectado9.className = '';
          this.afectado2.className = '';
          this.afectado11.className = '';
        }
        if(this.selectedValue == '2018'){
          this.afectado4.className = '';
          this.afectado9.className = '';
          this.afectado6.className = '';
          this.afectado11.className = '';
        }
        if(this.selectedValue == '2019'){
          this.afectado8.className = '';
          this.afectado9.className = '';
          this.afectado10.className = '';
          this.afectado11.className = '';
        }
      },
      false
    );

    this.sobremi6.addEventListener(
      'mouseover',
      () => {
          this.afectado12.className = 'afectadoFinal3';
          this.afectado13.className = 'afectadoFinal3';
      },
      false
    );
    this.sobremi6.addEventListener(
      'mouseout',
      () => {
          this.afectado12.className = '';
          this.afectado13.className = '';
      },
      false
    );
    this.sobremi7.addEventListener(
      'mouseover',
      () => {
          this.afectado14.className = 'afectadoFinal3';
          this.afectado15.className = 'afectadoFinal3';
      },
      false
    );
    this.sobremi7.addEventListener(
      'mouseout',
      () => {
          this.afectado14.className = '';
          this.afectado15.className = '';
      },
      false
    );
    this.sobremi8.addEventListener(
      'mouseover',
      () => {
          this.afectado16.className = 'afectadoFinal3';
          this.afectado17.className = 'afectadoFinal3';
      },
      false
    );
    this.sobremi8.addEventListener(
      'mouseout',
      () => {
          this.afectado16.className = '';
          this.afectado17.className = '';
      },
      false
    );
  }

  sumas() {
    this.resultado1 = (this.dato1 * this.dato2) + (this.dato3  * this.dato4);
    this.resultado2 = (this.dato5 * this.dato6) + (this.dato7  * this.dato8);
    this.resultado3 = (this.dato9 * this.dato10) + (this.dato11 *  this.dato12);

    if(this.selectedValue == '2017'){
      this.resultado4 = (this.dato1 * this.dato2) + (this.dato3  * this.dato4);
      this.resultado5 = (this.dato1 * this.dato6) + (this.dato3  * this.dato8);
      this.resultado6 = (this.dato1 * this.dato10) + (this.dato3  * this.dato12);
      this.mensaje1 = this.dato1;
      this.mensaje2 = this.dato3;

    }
    if(this.selectedValue == '2018'){
      this.resultado4 = (this.dato5 * this.dato2) + (this.dato7  * this.dato4);
      this.resultado5 = (this.dato5 * this.dato6) + (this.dato7  * this.dato8);
      this.resultado6 = (this.dato5 * this.dato10) + (this.dato7  * this.dato12);
      this.mensaje1 = this.dato5;
      this.mensaje2 = this.dato7;

    }
    if(this.selectedValue == '2019'){
      this.resultado4 = (this.dato9 * this.dato2) + (this.dato11  * this.dato4);
      this.resultado5 = (this.dato9 * this.dato6) + (this.dato11  * this.dato8);
      this.resultado6 = (this.dato9 * this.dato10) + (this.dato11  * this.dato12);
      this.mensaje1 = this.dato9;
      this.mensaje2 = this.dato11;

    }


    this.resultado7 = Math.round((((this.resultado1 / this.resultado4))*100) * 100) / 100;
    this.resultado8 = Math.round((((this.resultado2 / this.resultado5))*100) * 100) / 100;
    this.resultado9 = Math.round((((this.resultado3 / this.resultado6))*100) * 100) / 100;

    this.resultado10 = Math.round(((((this.resultado2 - this.resultado1))/ this.resultado1)*100) * 100) / 100;
    this.resultado11 = Math.round(((((this.resultado3 - this.resultado2))/ this.resultado2)*100) * 100) / 100;

    this.resultado12 = Math.round(((((this.resultado5 - this.resultado4))/ this.resultado4)*100) * 100) / 100;
    this.resultado13 = Math.round(((((this.resultado6 - this.resultado5))/ this.resultado5)*100) * 100) / 100;

    this.resultado14 = Math.round(((((this.resultado8 - this.resultado7))/ this.resultado7)*100) * 100) / 100;
    this.resultado15 = Math.round(((((this.resultado9 - this.resultado8))/ this.resultado8)*100) * 100) / 100;

  }
}
