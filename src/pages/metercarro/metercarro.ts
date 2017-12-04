import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-metercarro',
  templateUrl: 'metercarro.html',
})
export class MetercarroPage {

  //Formulario de alta de pulqueria
  formulario: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public formBuilder: FormBuilder,
    public viewCtrl:ViewController) {
      this.formulario = formBuilder.group({
        marca: ['',Validators.compose([Validators.maxLength(12), Validators.pattern('[a-zA-Z0-9 \-_.áéóíúÁÉÍÓÚäöüßÄËÏÖÜñÑ]*'), Validators.required])],
        propietario: ['',Validators.compose([Validators.maxLength(12), Validators.pattern('[a-zA-Z0-9 \-_.áéóíúÁÉÍÓÚäöüßÄËÏÖÜñÑ ]*'),Validators.required])],
        placas: ['',Validators.compose([Validators.maxLength(8), Validators.pattern('[a-zA-Z0-9 \-_.áéóíúÁÉÍÓÚäöüßÄËÏÖÜñÑ ]*'),Validators.required])],
        numero: ['',Validators.compose([Validators.maxLength(10), Validators.pattern('[0-9]*'),Validators.required])]
      });
  }

  agregarAuto(){
    let auto = {
      marca:this.formulario.value.marca,
      propietario:this.formulario.value.propietario,
      placas:this.formulario.value.placas,
      numero:this.formulario.value.numero,
    }
    this.viewCtrl.dismiss(auto);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MetercarroPage');
  }

  //Cerrar el modal
  cerrarModal(){
    this.viewCtrl.dismiss()
  }
  
}
