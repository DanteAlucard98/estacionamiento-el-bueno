import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MetercarroPage } from '../metercarro/metercarro';
import {SacarcarroPage} from '../sacarcarro/sacarcarro';

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage implements OnInit{

  tipo:Number
  titulo:String
  imagen:String
  autos:Array<any>[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private modCtrl:ModalController) {
    this.tipo = this.navParams.get('tipo')
    this.autos = []
  }

  ngOnInit(): void {
    if(this.tipo == 1){
      this.titulo = "Profesores"
      this.imagen = "assets/imgs/EstacionamientoMaestros.png"  
    }else{
      this.titulo = "Alumnnos"
      this.imagen = "assets/imgs/EstacionamientoAlumno.png"
    }
  }

  meterCarro(){
    console.log("Huevos")
   //this.navCtrl.push(MetercarroPage);
    let modal = this.modCtrl.create(MetercarroPage)
    modal.onDidDismiss(auto=>{
      console.log(auto)
      if(auto!=null){
        this.autos.push(auto)
      }
    })
    modal.present()
  }
  
  eliminarAuto(){
    this.autos.pop()
  }
  
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }

}
