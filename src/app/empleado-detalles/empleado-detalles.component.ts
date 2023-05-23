import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent implements OnInit {

  id: number;
  empleado: Empleado;
  constructor(private route: ActivatedRoute, private EmpleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    this.EmpleadoService.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.empleado = dato;
    });
  }

}
