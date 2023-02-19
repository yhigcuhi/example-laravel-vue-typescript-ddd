<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\PlayerScheduleService;
use Illuminate\Http\JsonResponse;

/**
 * 選手予定 コントローラー
 */
class PlayerSchedulesController extends Controller
{
    /* 利用サービス一覧 */
    private PlayerScheduleService $service; // 選手予定 サービス

    /**
     * コンストラクタ
     * @param PlayerScheduleService $service
     */
    public function __construct(PlayerScheduleService $service)
    {
        $this->service = $service;
    }

    /**
     * API 選手予定一覧
     * @return JsonResponse 結果
     */
    public final function list(): JsonResponse
    {
        // 選手予定一覧 取得
        return response()->json($this->service->getAll());
    }
}
