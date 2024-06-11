<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\CartResource;
use App\Models\Cart;
use Illuminate\Foundation\Exceptions\Renderer\Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Stmt\TryCatch;

class CartController extends Controller
{
    // public readonly Cart $cart;
    // public function __construct() {

    //     $this->cart = new Cart();
    // }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return CartResource::collection(resource:Cart::with(relations:'user')->get());
        
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
        DB::beginTransaction();

        try{

           $cart = Cart::create([
                'user_id' => $request->user_id,
            ]);

            DB::commit();

            return response() -> json(
                [
                'message' => 'cadastrado com sucesso!',
                'cart' => $cart,
                ], 200);


        }catch(Exception $e){
            
            DB::rollBack();

            return response() -> json(
                [
                    'message' => 'Error',
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
