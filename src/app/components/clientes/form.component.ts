import { Component,OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente();
  public titulo: string = 'Crear cliente';

  ngOnInit(): void {
  }
}