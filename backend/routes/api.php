<?php

use App\Http\Controllers\Api\V1\CartController;
use App\Http\Controllers\Api\V1\LoginController;
use App\Http\Controllers\Api\V1\ProductController;
use App\Http\Controllers\Api\V1\CartsItemsController;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// Route::prefix(prefix:'v1')->group(callback:function(){
// });

Route::get('/v1/products', action:[ProductController::class, 'index']);
Route::post('/v1/login', action:[LoginController::class, 'login']);
Route::post('/v1/register', action:[LoginController::class, 'store']);

Route::group(['middleware' => ['auth:sanctum']], function(){
    Route::post('/v1/checkout', action:[CartsItemsController::class, 'store']);
    Route::get('/v1/carts', action:[CartController::class, 'index']);
    Route::post('/v1/carts', action:[CartController::class, 'store']);
});

