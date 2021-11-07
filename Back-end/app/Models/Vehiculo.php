<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Vehiculo extends Model
{
    use HasFactory;

    protected $fillable = [
        'marca',
        'color',
        'ano_vehiculo',
        'propierario_id',        
    ];

    public $timestamps = false;
    protected $table = 'vehiculos';
    
    // Relacion one to one 
    public function propietarios(){
        return $this->hasOne('App\propietario');
    }

    public function list(){
        $list=DB::select('select COUNT(marca) as cuenta, marca from vehiculos GROUP by marca');                
        return $list;
    }

}
