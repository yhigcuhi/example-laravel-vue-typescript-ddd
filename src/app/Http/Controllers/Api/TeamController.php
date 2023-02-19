<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\TeamService;
use Illuminate\Http\JsonResponse;

/**
 * チームコントローラー
 */
final class TeamController extends Controller
{
    /* 利用サービス一覧 */
    private TeamService $service; // メイン サービス

    /**
     * コンストラクタ
     * @param TeamService $service
     */
    public function __construct(TeamService $service)
    {
        $this->service = $service;
    }

    /**
     * API チーム一覧
     * @return JsonResponse 結果
     */
    public final function list(): JsonResponse
    {
        // 選手一覧 取得
        return response()->json($this->service->getAll());
    }
}
