import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbcDefComponent } from './def/def.component';
import { AbcSubtema2Component } from './subtema2/subtema2.component';
import { AbcSubtema3Component } from './subtema3/subtema3.component';
import { AbcSubtema4Component } from './subtema4/subtema4.component';
import { AbcSubtema5Component } from './subtema5/subtema5.component';
import { AbcSubtema6Component } from './subtema6/subtema6.component';

const routes: Routes = [{ path: 'def', component: AbcDefComponent },
{ path: 'subtema2', component: AbcSubtema2Component },
{ path: 'subtema3', component: AbcSubtema3Component },
{ path: 'subtema4', component: AbcSubtema4Component },
{ path: 'subtema5', component: AbcSubtema5Component },
{ path: 'subtema6', component: AbcSubtema6Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbcRoutingModule { }
