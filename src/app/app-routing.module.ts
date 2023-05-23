import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';

//AQUÍ SE CONFIGURAN LAS RUTAS CUANDO SE ENTRA EN UN NAVEGADOR
//Le estoy diciendo en Routes que cuando entre a la URL con path empleados
//voy a redireccionar a listaEmpleadosComponent, y cuando entre a una ruta vacía, redirecciona a la ruta empleados, completa (full)
const routes: Routes = [
  { path: 'empleados', component: ListaEmpleadosComponent },
  { path: '', redirectTo: 'empleados', pathMatch: 'full' },
  { path: 'registrar-empleado', component: RegistrarEmpleadoComponent },
  { path: 'actualizar-empleado/:id', component: ActualizarEmpleadoComponent },
  { path: 'empleado-detalles/:id', component: EmpleadoDetallesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
