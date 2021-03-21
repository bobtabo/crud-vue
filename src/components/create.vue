<template>
  <div class="container-fluid" style="margin-top: 50px; padding-left: 100px;padding-right: 100px;">
    <div class="alert alert-danger" role="alert">
      【メッセージサンプル】エラーです。
    </div>

    <form id="form" method="post" action="src/components/index.vuex.vue">
      <div class="col-md-8 order-md-1">
        <div class="row">
          <div class="col-md-3 mb-3">
            <label>姓 <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" name="last_name" placeholder="姓" value="" required>
          </div>
          <div class="col-md-3 mb-3">
            <label>名 <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" name="first_name" placeholder="名" value="" required>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 mb-3">
            <label>姓かな <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" name="last_kana" placeholder="姓かな" value="" required>
          </div>
          <div class="col-md-3 mb-3">
            <label>名かな <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" name="first_kana" placeholder="名かな" value="" required>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 mb-3">
            <label>性別 <span class="badge badge-danger">必須</span></label>
            <div class="col-sm-10 text-left">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" value="1">
                <label class="form-check-label">男</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" value="2">
                <label class="form-check-label">女</label>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-2 mb-3">
            <label>郵便番号 <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" name="post_code" placeholder="郵便番号" value="" required>
          </div>
        </div>

        <div class="row">
          <div class="col-md-5 mb-3">
            <label>住所 <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" name="address" placeholder="渋谷区道玄坂2丁目11-1" value="" required>
          </div>
        </div>

        <div class="row">
          <div class="col-md-5 mb-3">
            <label>建物名</label>
            <input type="text" class="form-control" name="building" placeholder="Ｇスクエア渋谷道玄坂 4F" value="">
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 mb-3">
            <label>メールアドレス <span class="badge badge-danger">必須</span></label>
            <input type="email" class="form-control" name="email" placeholder="you@example.com" value="" required>
          </div>
        </div>
      </div>
    </form>
    <hr class="mb-4">
    <div class="form-group">
      <router-link class="btn btn-secondary" to="/" style="width:150px">戻る</router-link>
      <button id="complete" type="button" class="btn btn-success" style="width:150px"><i class="fas fa-database pr-1"></i> 登録</button>
    </div>

    <div id="complete-confirm" title="確認" style="display: none;">
      <p><span class="ui-icon ui-icon-info" style="float:left; margin:12px 12px 20px 0;"></span>登録しますか？</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    $("#complete").click(function() {
      completeConfirm(function(result){
        if (result) {
          $("form").submit();
        }
      });
    });

    function completeConfirm(response){
      var buttons = {};
      buttons['キャンセル'] = function(){
        $(this).dialog('close');response(false);
      };
      buttons['登録'] = function(){
        $(this).dialog('close');response(true);
      };

      $("#complete-confirm").dialog({
        show: {
          effect: "drop",
          duration: 500
        },
        hide: {
          effect: "drop",
          duration: 500
        },
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: buttons
      });
    }
  }
};
</script>