import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClienteService {
  private urlEndPoint: string = 'http://localhost:4200/api/clientes';
  constructor(private http:HttpClient) { }
  
  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }
}
