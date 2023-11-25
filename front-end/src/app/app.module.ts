import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalEliminarComponent } from './view/layouts/modal-eliminar/modal-eliminar.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './view/layouts/toolbar/toolbar.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AgregarProductoComponent } from './view/Products/agregar-producto/agregar-producto.component';
import { ListarProductoComponent } from './view/Products/listar-producto/listar-producto.component';
import { EditarProductoComponent } from './view/Products/editar-producto/editar-producto.component';
import { ProductoExternoComponent } from './view/Products/producto-externo/producto-externo.component';
import { LoginComponent } from './view/login/login/login.component';
import { ModalInformacionComponent } from './view/layouts/modal-informacion/modal-informacion.component';

/*Modulo principal donde importamos nuestros componentes y algunos
otros componentes externos*/ 
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    ToolbarComponent,
    ModalEliminarComponent,
    AgregarProductoComponent,
    EditarProductoComponent,
    ListarProductoComponent,
    ProductoExternoComponent,
    LoginComponent,
    ModalInformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule ,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
