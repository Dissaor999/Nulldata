<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    //
    public function empleado()
    {
      return $this->belongsTo('App\Empleado', 'id');
    }
}
