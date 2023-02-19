<?php

namespace App\Services;

use App\Models\Players;
use App\Models\Teams;
use App\Repositories\PlayerRepository;
use App\Repositories\TeamRepository;
use Illuminate\Support\Collection;

/**
 * チームサービス
 */
class TeamService
{
    /* 利用リポジトリ */
    private TeamRepository $repository; // メイン リポジトリ

    /**
     * @param TeamRepository $repository
     */
    public function __construct(TeamRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * チーム一覧取得
     * @return Collection<Teams> 結果
     */
    public function getAll(): Collection
    {
        return $this->repository->getAll();
    }
}
