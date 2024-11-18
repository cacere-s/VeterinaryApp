import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroMascotasPageRoutingModule } from './registro-mascotas-routing.module';
import { RegistroMascotasPage } from './registro-mascotas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegistroMascotasPageRoutingModule,
    RegistroMascotasPage,
  ],

})
export class RegistroMascotasPageModule {}
