<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->foreignId(column:'user_id')->references('id')->on('users');
            $table->timestamps();
        });

        Schema::create('carts_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId(column:'cart_id')->references('id')->on('carts');
            $table->foreignId(column:'product_id')->references('id')->on('products');
            $table->integer('quantity');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carts');
        Schema::dropIfExists('carts_items');
    }
};
