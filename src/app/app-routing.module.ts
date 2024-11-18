import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { AppPage } from './app.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'registro-mascotas',
    loadChildren: () => import('./registro-mascotas/registro-mascotas.module').then(m => m.RegistroMascotasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })  // Estrategia de pre-carga
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
