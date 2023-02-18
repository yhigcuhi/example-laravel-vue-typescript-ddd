<?php

namespace Database\Seeders\initialize;

use App\Models\Teams;
use Illuminate\Database\Seeder;

class TeamsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // TRUNCATE
        Teams::truncate();
        // 初期値設定
        Teams::insert($this->values());
    }

    /**
     * @return array 初期値
     */
    private function values(): array
    {
        return [
            [
                'team_cd' => '001',
                'name' => '赤坂ドリブンズ',
            ],
            [
                'team_cd' => '002',
                'name' => 'EX風林火山',
            ],
            [
                'team_cd' => '003',
                'name' => 'KADOKAWAサクラナイツ',
            ],
            [
                'team_cd' => '004',
                'name' => 'KONAMI麻雀格闘倶楽部',
            ],
            [
                'team_cd' => '005',
                'name' => '渋谷ABEMAS',
            ],
            [
                'team_cd' => '006',
                'name' => 'セガサミーフェニックス',
            ],
            [
                'team_cd' => '007',
                'name' => 'TEAM RAIDEN / 雷電',
            ],
            [
                'team_cd' => '008',
                'name' => 'U-NEXT Pirates',
            ],
        ];
    }
}
