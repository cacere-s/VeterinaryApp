import { Component } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PerfilPage {
  mascota = {
    name: 'Firulais',
    age: 5,
    raza: 'Pincher mini',
    gender: 'Hembra',
    weight: '15kg',
    foto: 'assets/imagenes/perfil_mascota.jpg'
  };
}

