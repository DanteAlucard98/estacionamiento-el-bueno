import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaPage } from './mapa';
import {MetercarroPage} from '../metercarro/metercarro';
import {SacarcarroPage} from '../sacarcarro/sacarcarro';

@NgModule({
  declarations: [
    MapaPage,
  ],
  imports: [
    IonicPageModule.forChild(MapaPage),
  ],
})
export class MapaPageModule {}
