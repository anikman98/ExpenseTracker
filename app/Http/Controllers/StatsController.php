<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class StatsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $labels = [];
        for($i=0; $i<12; $i++){
            if($i==0){
                $labels[] = Carbon::now()->shortLocaleMonth." ".Carbon::now()->year;
            }else{
                $labels[] = Carbon::parse($labels[$i-1])->subMonth()->shortLocaleMonth." ".Carbon::parse($labels[$i-1])->subMonth()->year;
            }
        }
        $dataset = Expense::where('user_id', Auth::user()->id)->get();
        $values = array(
            $labels[11] => 0,
            $labels[10] => 0,
            $labels[9] => 0,
            $labels[8] => 0,
            $labels[7] => 0,
            $labels[6] => 0,
            $labels[5] => 0,
            $labels[4] => 0,
            $labels[3] => 0,
            $labels[2] => 0,
            $labels[1] => 0,
            $labels[0] => 0
        );
        foreach($dataset as $data){
            $date=Carbon::parse($data->date)->shortLocaleMonth." ".Carbon::parse($data->date)->year;
            if(in_array($date, $labels)){
               $values[$date] += $data->amount;
           }
        }
        $categories = Expense::where('user_id', Auth::user()->id)->groupBy('category')->pluck('category');
        $categoryAmount = Expense::where('user_id', Auth::user()->id)->select(DB::raw('sum(amount)'))->groupBy('category')->pluck('sum');
        $methods = Expense::where('user_id', Auth::user()->id)->groupBy('method')->pluck('method');
        $methodAmount = Expense::where('user_id', Auth::user()->id)->select(DB::raw('sum(amount)'))->groupBy('method')->pluck('sum');
        return Inertia::render('Stats/Index',[
            'labels' => array_reverse($labels),
            'values' => $values,
            'categories' => $categories,
            'categoryAmount' => $categoryAmount,
            'methods' => $methods,
            'methodAmount' => $methodAmount,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
