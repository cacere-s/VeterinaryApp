import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IngresoRoutingModule } from './ingreso-routing.module';
import { IngresoComponent } from './ingreso.component';



@NgModule({
  declarations: [IngresoComponent],
  imports: [
    CommonModule,
    IonicModule,
    IngresoRoutingModule
  ]
})
export class IngresoModule { }
