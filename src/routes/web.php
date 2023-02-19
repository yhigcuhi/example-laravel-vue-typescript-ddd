<?php

use App\Http\Controllers\Blade\PlayersController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// org
//Route::get('/', function () {
//    return view('welcome');
//});

// 画面の一覧
Route::get('/', fn() => view('app'))->name('dashboard');
//Route::get('/', fn() => view('pages.dashboard'))->name('dashboard');
Route::get('/players', [PlayersController::class, 'index'])->name('page.players'); // Mリーガー 一覧
//// ↓ sample
//Route::get('/tables', fn() => view('pages.tables')->with(['hoge' => 'TEST']))->name('page.tables');
//Route::get('/cards', fn() => view('pages.cards')->with(['hoge' => 'TEST']))->name('page.cards');
