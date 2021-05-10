import { Component, OnInit } from '@angular/core';
import { Cliente } from  'src/app/cliente';
/*import {FormGroup, FormControl} from '@angular/forms';*/

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  cliente: Cliente;

  constructor() { }

  ngOnInit() {
    this.cliente = new Cliente();
  
  }
   onSubmit(){
     console.log(this.cliente);

 }
}


