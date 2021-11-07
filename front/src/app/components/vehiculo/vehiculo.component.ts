import { Component, ElementRef, OnInit, ViewChild, Output, Renderer2, Input, Inject} from '@angular/core';
import {VehiculoService} from '../../service/vehiculo.service';
import {MatTableModule} from '@angular/material/table'; 


export interface vehiculos_dto {
  cuenta: number;
  marca: string;  
}

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  dataSource = [];
  displayedColumns: string[] = ['cuenta', 'marca'];  
  cliente_create={
    nombre:"",
    documento:"",
    marca:"",
    color:"",
    ano_vehiculo:"",
  };
  listError=["Sin Validar"];
  
  @ViewChild('myVideo', {static: false}) myVideo: HTMLVideoElement | undefined;
  constructor(
    private VehiculoService:VehiculoService,            
  ) { }

  ngOnInit(): void {
    this.list();        
    setTimeout(()=>{      
      document.getElementById('continer_list')?.removeAttribute('hidden');            
      /*if(this.myVideo!=undefined){
        this.myVideo.pause();        
      } */        
    },5300);        
  }

  list(){
    this.VehiculoService.list().subscribe(
      res=>{
        if(res.codigo==200){          
          this.dataSource=res.object;
        }else{          
        }
      },
      err=>{
      console.log(err);  
      }
    )
    
    
  }

  validate(){
    let nombre=this.cliente_create.nombre;
    let documento=this.cliente_create.documento;
    let marca=this.cliente_create.marca;
    let color=this.cliente_create.color;
    let ano_vehiculo=this.cliente_create.ano_vehiculo;
    console.log(this.listError);    
    if(nombre.length<=1 || nombre===undefined || nombre===null ){
      this.listError.push('Error en el Nombre');
    }
    if(documento.length<=1 || documento===undefined || documento===null ){
      this.listError.push('Error en el Documento');
    }

    if(marca.length<=1 || marca===undefined || marca===null ){
      this.listError.push('Error en el Marca');
    }
    if(color.length<=1 || color===undefined || color===null ){
      this.listError.push('Error en el Color');
    }
    if(ano_vehiculo.length<=1 && ano_vehiculo.length>=4  || color===undefined || color===null ){
      this.listError.push('Error en el Año del vehiculo');
    }
    
    
    if(this.listError.length>1){
      
    }else{
      this.create();
    }    
  }

  create(){    
    let respuesta;
    this.VehiculoService.crear(this.cliente_create).subscribe(
      res=>{
        if(res.codigo==200){
          this.list() 
        }else{
          this.listError.push('Error en la Consulta')        
        }
      },
      err=>{
        this.listError.push('Error en la Conexion')        
      }
    )
  }

}


