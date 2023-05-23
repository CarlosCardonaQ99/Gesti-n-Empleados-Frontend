import { Empleado } from '../empleado';
import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado();
  //Inyectamos dentro del constructor el empleadoservice
  constructor(private empleadoService: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
  }

  //
  guardarEmpleado() {
    this.empleadoService.registrarEmpleado(this.empleado).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeEmpleados();

    }, error => console.log(error));
  }

  irALaListaDeEmpleados() {
    this.router.navigate(['/empleados']);
  }
  onSubmit() {
    this.guardarEmpleado();
  }

}
