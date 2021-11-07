<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Propietario;
use App\Models\Vehiculo;

class VehiculoController extends Controller
{
    //
    public function create(Request $data){
        
        //creamos el propietario
        $propietario=new Propietario();
        $propietario->nombre=$data['nombre'];
        $propietario->documento=$data['documento'];
        $propietario->save(); 
        //creamos el vehiculo 

        $vehiculo=new Vehiculo();
        $vehiculo->marca=$data['marca'];
        $vehiculo->color=$data['color'];
        $vehiculo->ano_vehiculo=$data['ano_vehiculo'];
        $vehiculo->propierario_id=$propietario["id"];
        $vehiculo->save();
        if($vehiculo){
            return json_encode(array('codigo'=>200, 'res'=>'Se creo Correctamente', 'object'=>$vehiculo)); 
        }else{
            return json_encode(array('codigo'=>400, 'res'=>'Error en base de datos', 'object'=>null )); 
        }
        
    }

    //endpoint lista 
    public function list(){
        $list=[];
        $vehiculo=new Vehiculo();
        $list=$vehiculo->list();
        foreach($list as $key=>$value){
            $list[$key]->marca=ucfirst($value->marca);            
        }
        if($list){
            return json_encode(array('codigo'=>200, 'res'=>'Consulta Correcta', 'object'=>$list)); 
        }else{
            return json_encode(array('codigo'=>400, 'res'=>'Error en base de datos', 'object'=>null )); 
        }
    } 
}
