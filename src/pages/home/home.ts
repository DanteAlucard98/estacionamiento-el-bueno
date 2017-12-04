import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';
import {MetercarroPage} from '../metercarro/metercarro';
import {SacarcarroPage} from '../sacarcarro/sacarcarro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public mapas(tipo:Number){
    console.log(tipo)
    this.navCtrl.push(MapaPage,{tipo:tipo})
  }
}
