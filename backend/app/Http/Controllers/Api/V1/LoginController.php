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
                'cart'=> $cart['id'],
            ], 201);

        }else{
            return response()->json([
                'status' => false,
                'message' => 'Login invalido',
            ], 404);
        }
    }
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
        $user = User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => bcrypt($request['password']),
        ]);

         $token = $user->createToken('api-token')->plainTextToken;
         $cart = Cart::create([
            'user_id' => $user['id'],
         ]);

        return response()->json([
            'status' => true,
            'token'=> $token,
            'cart'=> $cart['id'],
        ], 201);
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
