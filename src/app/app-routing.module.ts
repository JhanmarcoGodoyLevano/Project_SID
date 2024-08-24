import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetamaskComponent } from './metamask/metamask.component';  // Asegúrate de que la ruta sea correcta

const routes: Routes = [
  { path: '', redirectTo: '/metamask', pathMatch: 'full' },  // Redirige a la ruta /metamask
  { path: 'metamask', component: MetamaskComponent }          // Ruta que apunta a MetamaskComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
