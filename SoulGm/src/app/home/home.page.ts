import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }
  login(){
    this.router.navigateByUrl('/login');
  }
  perfil(){
    this.router.navigateByUrl('/perfil');
  }
  home(){
    this.router.navigateByUrl('/home');
  }
  nintendo(){
    this.router.navigateByUrl('/nintendo');
  }
}
