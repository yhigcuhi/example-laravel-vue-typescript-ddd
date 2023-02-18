<?php

namespace Database\Seeders\initialize;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;

/**
 * 初期構築 Seeder
 */
class InitializeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // 初期構築する対象だけ実行 (全てのステージ)
        $this->call([
            TeamsSeeder::class,
            PlayersSeeder::class,
        ]);
        // ステージごと (for local)
        if (App::environment('local')) {
            $this->call([
                ForDevPlayerSchedulesSeeder::class
            ]);
        }
    }
}
