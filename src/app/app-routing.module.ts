import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { AppPage } from './app.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./ingreso/ingreso.module').then(m => m.IngresoModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'registro-mascotas',
    loadChildren: () => import('./registro-mascotas/registro-mascotas.module').then(m => m.RegistroMascotasPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'veterinarios',
    loadChildren: () => import('./veterinarios/veterinarios.module').then( m => m.VeterinariosPageModule)
  },
  {
    path: 'citas',
    loadChildren: () => import('./citas/citas.module').then( m => m.CitasPageModule)
  },
  {
    path: 'recomendaciones',
    loadChildren: () => import('./recomendaciones/recomendaciones.module').then( m => m.RecomendacionesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })  // Estrategia de pre-carga
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

