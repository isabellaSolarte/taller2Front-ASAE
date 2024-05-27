import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  
  clientes?: Cliente[];
  constructor(private objClienteService:ClienteService) { }
  ngOnInit(): void {
    this.objClienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

}