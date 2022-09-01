<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Paginator::useBootstrap();
        Inertia::share('appName', config('app.name'));
        Inertia::share('auth.user', function(){
            if(Auth::user()){
                return [
                    'id' => Auth::user()->id,
                    'name' => Auth::user()->name
                ];
            }
        });
        Inertia::share([
            'errors' => function(){
                return Session::get('errors') ? Session::get('errors') : (object) [];
            },
            'success' => function(){
                return Session::get('success') ? Session::get('success') : null;
            }
        ]);
    }
}
