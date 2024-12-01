import { Component } from '@angular/core';

@Component({
  selector: 'app-veterinarios',
  templateUrl: './veterinarios.page.html',
  styleUrls: ['./veterinarios.page.scss'],
})
export class VeterinariosPage {
  veterinarios = [
    {
      nombre: 'Dra. Ana Maria Gomez',
      especialidad: 'Comportamiento veterinario',
      imagen: 'assets/imagenes/vet1.jpg',
      rating: 4.8,
      distancia: 12,
    },
    {
      nombre: 'Dr. Camilo Gonzalez',
      especialidad: 'Cirugía Veterinaria',
      imagen: 'assets/imagenes/vet2.jpg',
      rating: 4.9,
      distancia: 8,
    },
    {
      nombre: 'Dra. Laura Torres',
      especialidad: 'Nutrición Animal',
      imagen: 'assets/imagenes/vet3.jpg',
      rating: 4.7,
      distancia: 10,
    },
    {
      nombre: 'Dr. Pedro Martinez',
      especialidad: 'Oncología Veterinaria',
      imagen: 'assets/imagenes/vet4.jpg',
      rating: 4.6,
      distancia: 15,
    },
    {
      nombre: 'Dra. Sofia Ramirez',
      especialidad: 'Dermatología Veterinaria',
      imagen: 'assets/imagenes/vet6.jpg',
      rating: 4.8,
      distancia: 9,
    },
    {
      nombre: 'Dr. Luis Fernando Alvarez',
      especialidad: 'Cardiología Veterinaria',
      imagen: 'assets/imagenes/vet6.png',
      rating: 4.9,
      distancia: 11,
    },
    
  ];
}

