<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{

    public function login(Request $request): JsonResponse
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){

            $user = Auth::user();
            $token = $request->user()->createToken('user-token')->plainTextToken;
            $cart = Cart::create([
                'user_id' => $user['id'],
             ]);

            return response()->json([
                'status' => true,
                'token'=> $token,
                'name'=> $user->name,
                'email'=> $user->email,
                'cart'=> $cart['id'],
            ], 201);

        }else{
            return response()->json([
                'status' => false,
                'message' => 'Login invalido',
            ], 404);
        }
    }

    public function logout(Request $request): JsonResponse
    {
        auth()->user()->tokens()->delete();
        
        return response()->json(
            [
                'status' => true,
                'message' => 'Logout'
            ], 200);
    }

    public function store(Request $request)
    {
        $user = User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => bcrypt($request['password']),
        ]);

         $token = $user->createToken('user-token')->plainTextToken;
         $cart = Cart::create([
            'user_id' => $user['id'],
         ]);

        return response()->json([
            'status' => true,
            'token'=> $token,
            'name'=> $user->name,
            'email'=> $user->email,
            'cart'=> $cart['id'],
        ], 201);
    }

}
