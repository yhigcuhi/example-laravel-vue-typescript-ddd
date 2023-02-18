<?php

use App\Http\Controllers\PlayerController;
use App\Http\Controllers\PlayerSchedulesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

// 選手系
Route::group(['prefix' => '/players', 'as' => 'api.player.'], function() {
    Route::get('/', [PlayerController::class, 'list'])->name('list'); // 選手一覧
    Route::get('/{id}/schedules', [PlayerController::class, 'schedules'])->name('schedules'); // 選手予定表 一覧
});

// 選手予定表 直接
Route::group(['prefix' => '/player/schedules', 'as' => 'api.player.schedule.'], function() {
    Route::get('/', [PlayerSchedulesController::class, 'list'])->name('list'); // 全選手予定表一覧
});



