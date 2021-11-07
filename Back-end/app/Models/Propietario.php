<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Propietario extends Model
{
    use HasFactory;
    protected $table = 'propietarios';
    public $timestamps = false;

    protected $fillable = [
        'nombre',
        'documento'        
    ];

    public function vehiculos(){
        return $this->hasOne('App\vehiculo');
    }
    





}
