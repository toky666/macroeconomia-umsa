import { Component, OnInit } from '@angular/core';


interface Food {
  value: number;
  viewValue: string;
}
interface Food1 {
  value1: number;
  viewValue1: string;
}

@Component({
  selector: 'app-abc-subtema3',
  templateUrl: './subtema3.component.html',
  styleUrls: ['./subtema3.component.scss']
})


export class AbcSubtema3Component implements OnInit {

  selectedValue:any;
  selectedValue1:any;
  anio1:any;
  anio2:any;

  resultado1: any;
  resultado2 = 0;
  resultado3: any;

  final=0;

  foods: Food[] = [
    {value: 11.51, viewValue: '2019'},
    {value: 11.67, viewValue: '2020'},
    {value: 11.83, viewValue: '2021'},
  ];
  foods1: Food1[] = [
    {value1: 11.51, viewValue1: '2019'},
    {value1: 11.67, viewValue1: '2020'},
    {value1: 11.83, viewValue1: '2021'},
  ];
  constructor() {}

  ngOnInit() {
    this.selectedValue = 1;
    this.selectedValue1 = 1;

    this.resultado1 = 0;
    this.resultado3 = 0;
    this.anio1 = 'xxxx';
    this.anio2 = 'xxxx';

  }

  calculoOperacion(){
    this.resultado2 = Math.round(((this.selectedValue / this.selectedValue1) * 100) * 100) / 100;

    this.resultado1 = this.foods.findIndex(mascota => mascota.value === this.selectedValue);
    this.anio1 = this.foods[this.resultado1].viewValue;

    this.resultado3 = this.foods1.findIndex(mascota1 => mascota1.value1 === this.selectedValue1);
    this.anio2 = this.foods1[this.resultado3].viewValue1;

    this.final = Math.round((this.resultado2 - 100)* 100) / 100;

  }

}
