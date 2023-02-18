<?php

namespace Database\Seeders\initialize;

use App\Enums\Gender;
use App\Enums\ScheduleType;
use App\Models\Players;
use App\Models\PlayerSchedules;
use Illuminate\Database\Seeder;

/**
 * 開発環境用 選手予定
 */
class ForDevPlayerSchedulesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // TRUNCATE
        PlayerSchedules::truncate();
        // 初期値設定
        PlayerSchedules::insert($this->values());
    }

    /**
     * @return array 初期値
     */
    private function values(): array
    {
        return [
            [
                'player_id' => 1,
                'schedule_day' => '2023-02-20',
                'schedule_start_at' => '19:00:00',
                'schedule_end_at' => '21:00:00',
                'schedule_type' => ScheduleType::MLEAGUE,
                'name' => 'Mリーグ 2023-02-30 先発 (仮)',
                'overview' => 'Mリーグ 先発 (仮)',
            ],
        ];
    }
}
