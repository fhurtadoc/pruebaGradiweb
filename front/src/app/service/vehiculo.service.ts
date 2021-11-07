import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';


export interface cliente_create {
  nombre:string;
  documento:string;
  marca:string;
  color:string;
  ano_vehiculo:string;
}


export interface vehiculos_list {
  codigo: number;
  res: string;
  object: []; 
}

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private URL = 'http://127.0.0.1:8080';
  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<vehiculos_list>(this.URL + '/list'); 
  }

  crear(cliente_create:cliente_create){
    return this.http.post<any>(this.URL + '/save', cliente_create); 
  }  
}
