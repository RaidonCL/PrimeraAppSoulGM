import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Isoulgmm } from '../interfaces/isoulgmm';
import { SsoulgmService } from '../services/ssoulgm.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistroPage implements OnInit {

  newSoulgm: Isoulgmm = {
    nombre:'',
    Correo:'',
    Password:''
  }


  constructor(private router: Router, private SoulgmServ:SsoulgmService) { }

  registro(){
    this.router.navigateByUrl('/home');
  }
  login(){
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

  crearSoulgm(){
    this.SoulgmServ.crearSoulgm(this.newSoulgm).subscribe()

  }

}
