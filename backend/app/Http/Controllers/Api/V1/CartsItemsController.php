<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\CartsItems;
use Illuminate\Http\Request;
use Illuminate\Foundation\Exceptions\Renderer\Exception;

class CartsItemsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        try {
            $item = CartsItems::create([
                'cart_id' => $request->cart,
                'product_id' => $request->id,
                'quantity' => $request->quantity,
            ]);

            return response()->json(
                [
                    'message' => 'Cadastrado com sucesso!',
                    'item' => $item
                ],200);

        } catch (Exception $err) {

            return response()->json(
                [
                    'message' => 'Error' 
                ], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
