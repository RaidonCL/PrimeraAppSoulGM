import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  email: string='';
  password: string='';

  constructor(private router: Router) { }

  login(){
    this.router.navigateByUrl('/home');
  }
  registro(){
    this.router.navigateByUrl('/registro');
  }
  recuperar_contrasenna(){
    this.router.navigateByUrl('/recuperar-contrasenna');
  }
  

  ngOnInit() {
  }

}
