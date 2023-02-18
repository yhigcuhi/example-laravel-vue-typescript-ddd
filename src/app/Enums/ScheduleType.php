<?php

namespace App\Enums;

/**
 * PHP8.1から Enum利用
 * スケジュール種別
 */
enum ScheduleType: string
{
    // Mリーグ 予定
    case MLEAGUE = 'MLEAGUE';
    // その他
    case ETC = 'ETC';
}
