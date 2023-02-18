<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * チーム
 */
class Teams extends Model
{
    use HasFactory;

    // 主キーカラム名を指定
    protected $primaryKey = 'team_cd';
    // オートインクリメント無効化
    public $incrementing = false;
    // PK key type
    protected $keyType = 'string';
    // 登録更新する際に設定できる項目(カラム)
    protected $fillable = [
        'team_cd',
        'name'
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
}
