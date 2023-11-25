import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoExternoComponent } from './view/Products/producto-externo/producto-externo.component';
import { ListarProductoComponent } from './view/Products/listar-producto/listar-producto.component';
import { LoginComponent } from './view/login/login/login.component';


  
 /*Manejo de rutas de nuestra aplicacion web  */

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'crud', component: ListarProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
