<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\CartResource;
use App\Models\Cart;
use Illuminate\Foundation\Exceptions\Renderer\Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    public function store(Request $request)
    {

        try{
            $oldcart = Cart::find($request->cart);

            $cart = Cart::create([
                'user_id' => $oldcart->user_id,
            ]);

            DB::commit();

            return response()->json(
                [
                'message' => 'cadastrado com sucesso!',
                'cart' => $cart->id,
                ], 200);

        }catch(Exception){
            
            DB::rollBack();

            return response()->json(
                [
                    'message' => 'Error',
                ], 400);
        }
    }

}
