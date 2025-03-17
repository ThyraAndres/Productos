import { RouterModule, Routes } from '@angular/router';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'productos', component: ProductoListComponent },
  { path: 'producto-form/:id', component: ProductoFormComponent },
  { path: 'producto-form', component: ProductoFormComponent },
  { path: '', redirectTo: '/productos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
