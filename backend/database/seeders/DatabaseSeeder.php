<?php

namespace Database\Seeders;

// use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\Product::factory(count:6)->create();
        \App\Models\User::factory(count:6)->create();
        \App\Models\Cart::factory(count:6)->create();
        \App\Models\CartsItems::factory(count:6)->create();
    }
}


