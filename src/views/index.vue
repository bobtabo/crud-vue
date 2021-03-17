<template>
      <div class="py-5 text-center">
        <div class="alert alert-success" role="alert">
          【メッセージサンプル】登録しました。
        </div>

        <div style="margin-bottom:20px;">
          <form id="form" method="post" action="src/views/index.vue">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">姓かな</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" name="last_kana" placeholder="姓かな">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">名かな</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" name="first_kana" placeholder="名かな">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">性別</label>
                  <div class="col-sm-10 text-left">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" name="gender1" value="1">
                      <label class="form-check-label">男</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" name="gender2" value="2">
                      <label class="form-check-label">女</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div class="form-group">
            <button type="button" id="search" class="btn btn-primary" style="width:150px"><i class="fas fa-search pr-1"></i> 検索</button>
          </div>
          <div class="alert alert-warning" role="alert">
            【メッセージサンプル】該当データが見つかりません。
          </div>
          <div class="form-group row">
            <a class="btn btn-success" href="create.vue" style="width:150px"><i class="fas fa-chalkboard-teacher pr-1"></i> 新規登録</a>
          </div>
        </div>

        <div class="row">
          <table class="table table-bordered table-hover">
            <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">名前</th>
              <th scope="col">かな</th>
              <th scope="col">性別</th>
              <th scope="col">郵便番号</th>
              <th scope="col">メールアドレス</th>
              <th scope="col">作成日時</th>
              <th scope="col">更新日時</th>
              <th scope="col"></th>
            </tr>
            </thead>
            <tbody id="content">
            <tr>
              <td scope="col">1</td>
              <td scope="col"><a href="detail.vue">苗字  名前</a></td>
              <td scope="col">みょうじ なまえ</td>
              <td scope="col">男</td>
              <td scope="col">123-4567</td>
              <td scope="col">bobtabo.buhibuhi@gmail.com</td>
              <td scope="col">2020/08/30  23：12：34</td>
              <td scope="col">2020/08/30  23：12：34</td>
              <td scope="col"><a class="btn btn-info" href="edit.vue">編集</a></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

</template>
