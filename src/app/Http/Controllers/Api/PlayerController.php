<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\PlayerScheduleService;
use App\Services\PlayerService;
use App\ValueObjects\PlayerId;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * 選手コントローラー
 */
final class PlayerController extends Controller
{
    /* 利用サービス一覧 */
    private PlayerService $service; // メイン = 選手サービス
    private PlayerScheduleService $playerScheduleService; // 選手予定 サービス

    /**
     * コンストラクタ
     * @param PlayerService $service
     * @param PlayerScheduleService $playerScheduleService
     */
    public function __construct(PlayerService $service, PlayerScheduleService $playerScheduleService)
    {
        $this->service = $service;
        $this->playerScheduleService = $playerScheduleService;
    }

    /**
     * API 選手一覧
     * @return JsonResponse 結果
     */
    public final function list(): JsonResponse
    {

        // 選手一覧 取得
        return response()->json($this->service->getAll());
    }

    /**
     * API 指定選手の 選手予定 一覧
     * @param int $id 指定選手ID
     * @param Request $request 検索条件リクエスト
     * @return JsonResponse 結果
     */
    public final function schedules(int $id, Request $request): JsonResponse
    {
        // 指定選手の選手予定一覧 取得 TODO: 検索条件クエリは今後
        return response()->json($this->playerScheduleService->findByPlayerId(PlayerId::of($id)));
    }

}
