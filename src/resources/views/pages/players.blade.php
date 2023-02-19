@extends('layouts.parent')
@section('content')
    <div class="row">
        <!-- タイトル -->
        <h1 class="h3 mb-2 text-gray-800">Mリーガー</h1>
        <!-- 選手追加フォーム -->
        <div class="card shadow mb-4">
            <div class="card=header py-3">
                <h6 class="m-0 font-weight-bold text-primary">選手 追加</h6>
            </div>
            <div class="card-body">
                <player-form></player-form>
            </div>
        </div>
        <!-- 選手一覧 -->
        <div class="card shadow mb-4">
            <!-- 表タイトル -->
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">選手 一覧</h6>
            </div>
            <!-- 表wrapper -->
            <div class="card-body">
                <div class="table-responsive">
                    <div class="dataTables_wrapper dt-bootstrap4">
                        <!-- 表 ヘッダーメニュー -->
                        <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <div class="dataTables_length" id="dataTable_length"> <label>Show
                                        <select name="dataTable_length" aria-controls="dataTable" class="custom-select custom-select-sm form-control form-control-sm">
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select>
                                        entries
                                    </label>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <div class="form-group">
                                    <label for="search">Search</label>
                                    <input id="search" type="search" class="form-control form-control-sm" placeholder="作ってないけどねw">
                                </div>
                            </div>
                        </div>
                        <!-- 表 -->
                        <div class="row">
                            <div class="col-sm-12">
                                <players :players=@json($players)></players>
                            </div>
                        </div>
                        <!-- 表フッター -->
                        <div class="row">
                            <div class="col-sm-12 col-md-5">
                                <div class="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                            </div>
                            <div class="col-sm-12 col-md-7">
                                <div class="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                                    <ul class="pagination">
                                        <li class="paginate_button page-item previous disabled" id="dataTable_previous"><a href="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li>
                                        <li class="paginate_button page-item active"><a href="#" aria-controls="dataTable" data-dt-idx="1" tabindex="0" class="page-link">1</a></li>
                                        <li class="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="2" tabindex="0" class="page-link">2</a></li>
                                        <li class="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="3" tabindex="0" class="page-link">3</a></li>
                                        <li class="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="4" tabindex="0" class="page-link">4</a></li>
                                        <li class="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="5" tabindex="0" class="page-link">5</a></li>
                                        <li class="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="6" tabindex="0" class="page-link">6</a></li>
                                        <li class="paginate_button page-item next" id="dataTable_next"><a href="#" aria-controls="dataTable" data-dt-idx="7" tabindex="0" class="page-link">Next</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
