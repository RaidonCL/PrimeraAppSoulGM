import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nintendo',
  templateUrl: './nintendo.page.html',
  styleUrls: ['./nintendo.page.scss'],
})
export class NintendoPage implements OnInit {

constructor(private router: Router) { }

  ngOnInit() {
  }
  home(){
    this.router.navigateByUrl('/home');
  }

}
