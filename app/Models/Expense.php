<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    use HasFactory;

    protected $table = "expenses";

    protected $fillable = [
        'date',
        'description',
        'amount',
        'category',
        'method',
        'user_id'
    ];
}
