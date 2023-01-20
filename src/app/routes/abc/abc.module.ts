import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AbcRoutingModule } from './abc-routing.module';
import { AbcDefComponent } from './def/def.component';
import { AbcSubtema2Component } from './subtema2/subtema2.component';
import { AbcSubtema3Component } from './subtema3/subtema3.component';
import { AbcSubtema4Component } from './subtema4/subtema4.component';
import { AbcSubtema5Component } from './subtema5/subtema5.component';
import { AbcSubtema6Component } from './subtema6/subtema6.component';

const COMPONENTS: any[] = [AbcDefComponent, AbcSubtema2Component, AbcSubtema3Component, AbcSubtema4Component, AbcSubtema5Component, AbcSubtema6Component];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [
    SharedModule,
    AbcRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ]
})
export class AbcModule { }
