import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  //añadimos el array de empleado
  empleados: Empleado[];

  //Inyectamos el service en el constructor
  constructor(private empleadoService: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    //Llamamos al método obtenerEmpleados
    this.obtenerEmpleados();
  }

  actualizarEmpleado(id: number){
    this.router.navigate(['actualizar-empleado', id]);
  }

  //Creamos el método obtenerEmpledos que usará el método obtenerListaDeEnpleados del Service
  private obtenerEmpleados() {
    this.empleadoService.obtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
    
  }
   eliminarEmpleado(id: number) {
    this.empleadoService.eliminarEmpleado(id).subscribe(dato => {
      console.log(dato);
      this.obtenerEmpleados();
    });
   }
  
  verDetallesDelEmpleado(id: number) {
    this.router.navigate(['empleado-detalles', id]);
   }
}
