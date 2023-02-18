<?php

namespace App\Services;

use App\Models\PlayerSchedules;
use App\Repositories\PlayerScheduleRepository;
use App\ValueObjects\PlayerId;
use Illuminate\Support\Collection;

/**
 * 選手予定 サービス
 */
class PlayerScheduleService
{
    /* 利用リポジトリ */
    private PlayerScheduleRepository $repository; // メイン = 選手予定リポジトリ

    /**
     * @param PlayerScheduleRepository $repository
     */
    public function __construct(PlayerScheduleRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * 選手予定一覧取得
     * @return Collection<PlayerSchedules> 結果
     */
    public function getAll(): Collection
    {
        return $this->repository->getAll();
    }

    /**
     * 指定選手の 選手予定 一覧取得
     * @param PlayerId $playerId 選手
     * @return Collection<PlayerSchedules> 結果
     */
    public function findByPlayerId(PlayerId $playerId): Collection
    {
        // 指定選手の選手予定取得
        return $this->repository->findBy(['player_id' => $playerId]);
    }
}
