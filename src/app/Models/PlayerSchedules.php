<?php

namespace App\Models;

use App\Enums\ScheduleType;
use App\ValueObjects\casts\PlayerIdForCast;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * 選手予定
 */
class PlayerSchedules extends Model
{
    use HasFactory;
    // 登録更新できないフィールド
    protected $guarded = ['id'];
    // 登録更新する際に設定できる項目(カラム)
    protected $fillable = [
        'player_id',
        'schedule_day',
        'schedule_start_at',
        'schedule_end_at',
        'schedule_type',
        'name',
        'overview',
        'note',
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
    // シリアライズに含める リレーション
    protected $with = [
        'player'
    ];
    // 型変換
    protected $casts = [
        'schedule_type' => ScheduleType::class, // Enum
        'player_id' => PlayerIdForCast::class, // TODO: PlayerId implements CastsAttributes で使えるのだが... get, setってメソッド名はちょっと...
    ];

    /**
     * @return HasOne 所属チーム
     */
    public function player(): HasOne
    {
        return $this->hasOne(Players::class, 'id', 'player_id');
    }
}
