import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  
  public clientes: Cliente[]= [];
  public sinDatos: string = 'No hay registros en la BD';
  constructor(private objClienteService:ClienteService,private router:Router) { }
  ngOnInit(): void {
    this.getClientes();
  }
  getClientes(){
    this.objClienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }
  crearCliente(){
    this.router.navigate(['cliente/form']);
  }

}
