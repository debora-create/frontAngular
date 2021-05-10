import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormularioComponent } from './components/template/formulario/formulario.component';
import { Cliente } from './cliente';



@NgModule({
  declarations: [
    AppComponent,
   FormularioComponent,
  
         
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   Cliente
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }