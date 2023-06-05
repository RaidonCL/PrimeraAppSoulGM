import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NintendoPageRoutingModule } from './nintendo-routing.module';

import { NintendoPage } from './nintendo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NintendoPageRoutingModule
  ],
  declarations: [NintendoPage]
})
export class NintendoPageModule {}
