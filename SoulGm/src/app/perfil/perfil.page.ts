import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss'],
})
export class PerfilPage {
  nombre: string = "";
  email: string ="";
  pais: string ="";

  constructor(private router: Router) { }

  guardarPerfil() {
    console.log('Perfil guardado');
  }
  home(){
    this.router.navigateByUrl('/home');
  }
}
