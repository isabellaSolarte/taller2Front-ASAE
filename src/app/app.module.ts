import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientesComponent } from './components/clientes/clientes.component';
import { HeaderComponent } from './components/header/header.component';
import { ClienteService } from './components/clientes/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/clientes/form.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    ClientesComponent,
    HeaderComponent,
    FormComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
