<?php

namespace Database\Seeders\initialize;

use App\Enums\Gender;
use App\Models\Players;
use Illuminate\Database\Seeder;

class PlayersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // TRUNCATE
        Players::truncate();
        // 初期値設定
        Players::insert($this->values());
    }

    /**
     * @return array 初期値
     */
    private function values(): array
    {
        return [
            [
                'last_name' => '園田',
                'first_name' => '賢',
                'last_name_kana' => 'そのだ',
                'first_name_kana' => 'けん',
                'belong_team_cd' => '001', // 所属チームコード外部キー
                'gender' => Gender::MEN->value,
            ],
            [
                'last_name' => '村上',
                'first_name' => '淳',
                'last_name_kana' => 'むらかみ',
                'first_name_kana' => 'じゅん',
                'belong_team_cd' => '001', // 所属チームコード外部キー
                'gender' => Gender::MEN->value, // 性別(Enum)
            ],
            [
                'last_name' => '鈴木',
                'first_name' => 'たろう',
                'last_name_kana' => 'すずき',
                'first_name_kana' => 'たろう',
                'belong_team_cd' => '001', // 所属チームコード外部キー
                'gender' => Gender::MEN->value, // 性別(Enum)
            ],
            [
                'last_name' => '丸山',
                'first_name' => '奏子',
                'last_name_kana' => 'まるやま',
                'first_name_kana' => 'かなこ',
                'belong_team_cd' => '001', // 所属チームコード外部キー
                'gender' => Gender::WOMEN->value, // 性別(Enum)
            ],
            [
                'last_name' => '二階堂',
                'first_name' => '亜樹',
                'last_name_kana' => 'にかいどう',
                'first_name_kana' => 'あき',
                'belong_team_cd' => '002', // 所属チームコード外部キー
                'gender' => Gender::WOMEN->value, // 性別(Enum)
            ],
        ];
    }
}
