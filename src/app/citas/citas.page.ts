import { Component } from '@angular/core';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage {
  // Lista de veterinarios (puedes reutilizar la lista de veterinarios existente)
  veterinarios = [
    {
      nombre: 'Dr. Ana Maria Gomez',
      especialidad: 'Comportamiento veterinario',
    },
    {
      nombre: 'Dr. Camilo Gonzalez',
      especialidad: 'Cirugía Veterinaria',
    },
    {
      nombre: 'Dra. Laura Torres',
      especialidad: 'Nutrición Animal',
    },
    {
      nombre: 'Dr. Pedro Martinez',
      especialidad: 'Oncología Veterinaria',
    },
    {
      nombre: 'Dra. Sofia Ramirez',
      especialidad: 'Dermatología Veterinaria',
    },
    {
      nombre: 'Dr. Luis Fernando Alvarez',
      especialidad: 'Cardiología Veterinaria',
    },
  ];

  // Objeto para almacenar los datos de la cita
  cita = {
    veterinario: '',
    fecha: '',
    hora: '',
  };

  constructor() {}

  // Método para agendar cita
  agendarCita() {
    if (this.cita.veterinario && this.cita.fecha && this.cita.hora) {
      console.log('Cita agendada:', this.cita);
      alert(`Cita con ${this.cita.veterinario} programada para el ${this.cita.fecha} a las ${this.cita.hora}`);
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}
