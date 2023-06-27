import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SsoulgmService } from '../services/ssoulgm.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss'],
})

export class PerfilPage {
  nombre: String='';
  email: string='';
  password: string='';
  Soulgm: any[] = [];
  

  constructor(private router: Router, private SoulgmServ:SsoulgmService, private LoadingCtrl:LoadingController) { }
  

  ionViewWillEnter(){
  this.loadSoulgm ()
  }

  guardarPerfil() {
    console.log('Perfil guardado');
  }
  home(){
    this.router.navigateByUrl('/home');
  }

  async loadSoulgm(event?: InfiniteScrollCustomEvent){
    const loading = await this.LoadingCtrl.create({
        message: "Cargando",
        spinner: "bubbles"
      }
    )
    await loading.present();

    this.SoulgmServ.listarSoulgm().subscribe(
      (resp) =>{
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.Soulgm = JSON.parse(listString)
        event?.target.complete()
      },
      (err) =>{
        console.log(err.message)
        loading.dismiss();
      }

    )
  }
  
}
