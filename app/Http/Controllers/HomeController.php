<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Expense;
use Carbon\Carbon;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $month = new Carbon;
        $labels = [
            $month->now()->subMonth(5)->shortLocaleMonth." ".$month->now()->subMonth(5)->year,
            $month->now()->subMonth(4)->shortLocaleMonth." ".$month->now()->subMonth(4)->year,
            $month->now()->subMonth(3)->shortLocaleMonth." ".$month->now()->subMonth(3)->year,
            $month->now()->subMonth(2)->shortLocaleMonth." ".$month->now()->subMonth(2)->year,
            $month->now()->subMonth()->shortLocaleMonth." ".$month->now()->subMonth()->year,
            $month->now()->shortLocaleMonth." ".$month->now()->year
        ];
        $dataset = Expense::where('user_id', Auth::user()->id)->get();
        $values = array(
            $labels[0] => 0,
            $labels[1] => 0,
            $labels[2] => 0,
            $labels[3] => 0,
            $labels[4] => 0,
            $labels[5] => 0
        );

        foreach($dataset as $data){
            $date=Carbon::parse($data->date)->shortLocaleMonth." ".Carbon::parse($data->date)->year;
            if(in_array($date, $labels)){
               $values[$date] += $data->amount; 
           }
        }
        return Inertia::render('Home',[
            'expenses' => Expense::where('user_id', Auth::user()->id)->latest()->take(10)->get(),
            'labels' => $labels,
            'values' => $values
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function welcome()
    {
        if(Auth::user()){
            return redirect()->route('dashboard');
        }else{
            return Inertia::render('Welcome');
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
