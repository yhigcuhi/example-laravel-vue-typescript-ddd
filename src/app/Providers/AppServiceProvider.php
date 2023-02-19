<?php

namespace App\Providers;

use App\Repositories\PlayerRepository;
use App\Repositories\PlayerRepositoryImpl;
use App\Repositories\PlayerScheduleRepository;
use App\Repositories\PlayerScheduleRepositoryImpl;
use App\Repositories\TeamRepository;
use App\Repositories\TeamRepositoryImpl;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // injection
        $this->app->bind(PlayerRepository::class, PlayerRepositoryImpl::class);
        $this->app->bind(PlayerScheduleRepository::class, PlayerScheduleRepositoryImpl::class);
        $this->app->bind(TeamRepository::class, TeamRepositoryImpl::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
