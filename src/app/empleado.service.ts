import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Empleado} from './empleado';

@Injectable({
  //servicio que puede ser utilizado por componentes
  providedIn: 'root'
})
export class EmpleadoService {

  //PONEMOS LA URL DE LA RUTA DE LA PETICIÓN GET DEL BACKEND EN SPRING BOOT
  //ESTA URL OBTIENE EL LISTADO DE TODOS LOS EMPLEADOS EN EL BACKEND
  private baseUrl = "http://localhost:8084/api/v1/empleados";

  constructor(private httpClient: HttpClient) { }

  //Creamos el método obtener lista de empleados
  obtenerListaDeEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseUrl}`);
  }
   // Método para obtener empelado por id
  obtenerEmpleadoPorId(id: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(`${this.baseUrl}/${id}`)
  }
  
  //Creamos el método para guardar empleados
  registrarEmpleado(empleado: Empleado): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, empleado);
  }

  //Método actualizar empleado
  actualizarEmpleado(id: number, empleado: Empleado): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, empleado);
  }
  //Eiminar empleado
  eliminarEmpleado(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}
