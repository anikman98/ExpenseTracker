<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\HomeController;
use Inertia\Inertia;

/********************************************************************************************************/
/*                                    Common Routes                                                     */
/********************************************************************************************************/


Route::get('/', [HomeController::class, 'welcome'])->name('welcome');


Route::group(['middleware' => ['auth']], function(){
    Route::get('/dashboard', [HomeController::class, 'index'])->name('dashboard');


/********************************************************************************************************/
/*                                   Expense Routes                                                     */
/********************************************************************************************************/

    Route::group(['prefix' => 'expense'], function(){
        Route::get('/', [ExpenseController::class, 'index'])->name('expense.list');
        Route::get('/add', [ExpenseController::class, 'create'])->name('expense.create');
        Route::post('/add', [ExpenseController::class, 'store']);
        Route::get('/edit/{expense}', [ExpenseController::class, 'edit'])->name('expense.edit');
        Route::post('/update/{expense}', [ExpenseController::class, 'update']);
        Route::get('/delete/{expense}', [ExpenseController::class, 'destroy']);
    });

});


/********************************************************************************************************/
/*                                      Auth Routes                                                     */
/********************************************************************************************************/

Route::get('/register', [RegisterController::class, 'create'])->name('register');
Route::post('/register', [RegisterController::class, 'store']);
Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'login']);
Route::get('/logout', [LoginController::class, 'logout'])->middleware('auth')->name('logout');
Route::get('/thanks', function(){
    return Inertia::render('Auth/Thanks');
})->name('thanks');