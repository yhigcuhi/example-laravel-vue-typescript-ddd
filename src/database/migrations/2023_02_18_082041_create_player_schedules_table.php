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
        // 選手予定
        Schema::create('player_schedules', function (Blueprint $table) {
            // pk
            $table->id()->comment('選手予定ID');
            // who
            $table->unsignedBigInteger('player_id')->comment('選手ID'); // FK = 選手ID
            // when
            $table->date('schedule_day')->comment('予定 日');
            $table->time('schedule_start_at')->comment('予定 開始時間');
            $table->time('schedule_end_at')->comment('予定 終了時間');
            // what
            $table->enum('schedule_type', ['MLEAGUE', 'ETC'])->comment('スケジュール種別'); // MLEAGUE:Mリーグ,ETC:その他
            $table->string('name')->comment('予定 名'); // 予定名
            $table->text('overview')->nullable()->comment('予定 概要'); // 予定概要
            $table->text('note')->nullable()->comment('予定 内容'); // 予定内容
            // created_at, updated_at
            $table->timestamps();
            // テーブル名
            $table->comment('選手予定');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('player_schedules');
    }
};
