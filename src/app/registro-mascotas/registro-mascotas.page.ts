import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-registro-mascotas',
  templateUrl: './registro-mascotas.page.html',
  styleUrls: ['./registro-mascotas.page.scss'],
  standalone: true,
  imports: [RouterLink],
  schemas: [NO_ERRORS_SCHEMA]
})
export class RegistroMascotasPage  {
    perfilForm: FormGroup;
  
    constructor(private fb: FormBuilder, private router: Router) {
      this.perfilForm = this.fb.group({
        fullName: ['', Validators.required],
        phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        photo: ['', Validators.required], // Campo para subir foto
        petName: ['', Validators.required], // Nombre de la mascota
        hairColor: ['', Validators.required], // Color de pelo
        enfermedades: ['', Validators.required], 
        breed: ['', Validators.required], // Raza
        birthDate: ['', Validators.required], // Fecha de nacimiento
        edad: ['', Validators.required],
      });
    }
  
    saveperfil() {
      console.log('Perfil guardado:', this.perfilForm.value);
      this.router.navigate(['./perfil']);
    }
  }