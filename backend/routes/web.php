<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json(
        [
            'name' => 'Api Simple Webshop',
            'mode' => 'devlopment',
            'from' => 'Diego Ferreira',
            'to' => 'Iete Technical Test'
        ]
    );
});
