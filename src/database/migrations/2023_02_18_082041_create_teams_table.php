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
        // チームマスター
        Schema::create('teams', function (Blueprint $table) {
            // PK
            $table->string('team_cd')->primary()->comment('チームコード'); // 主キー = チームコード
            // フィールド
            $table->string('name')->comment('チーム名');
            // created_at, updated_at
            $table->timestamps();
            // テーブル名
            $table->comment('チーム');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teams');
    }
};
