import { Component,OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { Router } from '@angular/router';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private objService:ClienteService,private router:Router){}
  public cliente: Cliente = new Cliente();
  public titulo: string = 'Crear cliente';


  ngOnInit(): void {
  }
  public crearCliente():void{
    this.objService.crearCliente(this.cliente).subscribe(
      response =>{
        this.irAtras();
        Swal.fire('Nuevo cliente', `Cliente ${response.nombre} creado con éxito!`, 'success');
      }
    )
  }
  irAtras(){
    this.router.navigate(['/clientes']);
  }
}