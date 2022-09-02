<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ExpenseController extends Controller
{

    protected $expense_category;
    protected $payment_method;
    protected $rules;


    public function __construct()
    {
        $this->expense_category = config('expense.category');
        $this->payment_method = config('expense.method');
        $this->rules = [
            'description' => ['required', 'min:3'],
            'date' => ['required', 'date'],
            'amount' => ['required', 'min:1'],
            'category' => ['required', Rule::in($this->expense_category)],
            'method' => ['required', Rule::in($this->payment_method)]
        ];
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $expenses = Expense::where('user_id', Auth::user()->id)->orderBy('date')->paginate(10);
        // return $expenses;
        return Inertia::render('Expense/Index', [
            'expenses' => $expenses
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Expense/Add', [
            'expense' => new Expense,
            'expense_category' => $this->expense_category,
            'payment_method' => $this->payment_method
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $validatedData = $this->validate($request, $this->rules);
        $validatedData['user_id'] = Auth::user()->id;

        Expense::create($validatedData);

        return redirect()->route('expense.list')->with('success', 'Expense added succesfully!');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function show(Expense $expense)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function edit(Expense $expense)
    {
        return Inertia::render('Expense/Edit', [
            'expense' => $expense,
            'expense_category' => $this->expense_category,
            'payment_method' => $this->payment_method
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Expense $expense)
    {

        $validatedData = $this->validate($request, $this->rules);
        unset($validatedData['id']);

        $action = $expense->update($validatedData);

        if($action == 1){
            return redirect()->route('expense.list')->with('success', 'Expense updated!');
        }else{
            return redirect()->back()->withInput($request->input())->with('errors', 'Something went wrong!');
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function destroy(Expense $expense)
    {
        // return $expense;
        $expense->delete();
        return redirect()->route('expense.list')->with('success', 'Expense delete Successfully!');
    }
}
