<?php

namespace App\Models;

use App\Enums\Gender;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * 選手
 */
class Players extends Model
{
    use HasFactory;
    // 登録更新できないフィールド
    protected $guarded = ['id'];
    // 登録更新する際に設定できる項目(カラム)
    protected $fillable = [
        'last_name',
        'first_name',
        'last_name_kana',
        'first_name_kana',
        'belong_team_cd',
        'gender',
    ];
    // Carbon インスタンスとして扱うところ
    protected $dates = [
        'created_at',
        'updated_at',
    ];
    // シリアライズさせないところ
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
    // シリアライズに含める リレーション ※ hasMany N + 1問題避けるようにしたいのでシリアライズに含めない
    protected $with = [
        'belongTeam',
    ];
    // 型変換
    protected $casts = [
        'gender' => Gender::class // Enum
        // TODO: 名前などの value object
    ];

    /**
     * @return HasOne 所属チーム
     */
    public function belongTeam(): HasOne
    {
        return $this->hasOne(Teams::class, 'team_cd', 'belong_team_cd');
    }
}
