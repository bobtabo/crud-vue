<template>
  <div class="py-5 text-center">
    <div class="alert alert-success" role="alert">
      【メッセージサンプル】登録しました。
    </div>

    <div style="margin-bottom:20px;">
      <form id="form" method="post" action="/">
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
        <router-link class="btn btn-success" :to="{ name: 'create' }" style="width:150px"><i class="fas fa-chalkboard-teacher pr-1"></i> 新規登録</router-link>
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
          <td>1</td>
          <td><router-link :to="{ name: 'detail', params: { id: 1 } }">苗字  名前</router-link></td>
          <td>みょうじ なまえ</td>
          <td>男</td>
          <td>123-4567</td>
          <td>bobtabo.buhibuhi@gmail.com</td>
          <td>2020/08/30  23：12：34</td>
          <td>2020/08/30  23：12：34</td>
          <td><router-link class="btn btn-info" :to="{ name: 'edit', params: { id: 1 } }">編集</router-link></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    $("#search").click(function() {
      $("form").submit();
    });
  }
}
</script>
