import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { DemoComponent } from './components/demo/demo.component';
import { CreateVehiculoComponent } from './components/create-vehiculo/create-vehiculo.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




import {MatTableModule} from '@angular/material/table'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 





@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    DemoComponent,
    CreateVehiculoComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,    
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,    
    ReactiveFormsModule, 
    MatTableModule,
    MatInputModule,
    MatButtonModule   

  ],
  providers: [],
  bootstrap: [AppComponent, VehiculoComponent ] 
})
export class AppModule { }
