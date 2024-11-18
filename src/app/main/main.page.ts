import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})

export class MainPage {
    vets = [
      {
        name: 'Dr. Ana Maria Gomez',
        speciality: 'Comportamiento veterinario',
        rating: 4.8,
        distance: 12,
        image: 'assets/imagenes/vet1.jpg',
      },
      {
        name: 'Dr. Camilo Gonzalez',
        speciality: 'Cirugía Veterinaria',
        rating: 4.9,
        distance: 8,
        image: 'assets/imagenes/vet2.jpg',
      },
    ];
  }