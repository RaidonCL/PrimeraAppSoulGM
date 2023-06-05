import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-contrasenna',
  templateUrl: './recuperar-contrasenna.page.html',
  styleUrls: ['./recuperar-contrasenna.page.scss'],
})
export class RecuperarContrasennaPage implements OnInit {
  email: string='';

  constructor(private router: Router) { }
  login(){
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
