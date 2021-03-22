<template>
  <div class="container-fluid" style="margin-top: 50px; padding-left: 100px;padding-right: 100px;">
    <div class="alert alert-danger" role="alert" style="display: none;">
      【メッセージサンプル】エラーです。
    </div>

    <form id="form" method="post" action="index.html">
      <input type="hidden" class="form-control" name="id" :value="1" required>
      <div class="col-md-8 order-md-1">
        <div class="row">
          <div class="col-md-3 mb-3">
            <label>姓 <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" name="last_name" placeholder="姓" v-if="customer" :value="customer.last_name" required />
          </div>
          <div class="col-md-3 mb-3">
            <label>名 <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" name="first_name" placeholder="名" v-if="customer" :value="customer.first_name" required />
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 mb-3">
            <label>姓かな <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" name="last_kana" placeholder="姓かな" v-if="customer" :value="customer.last_kana" required />
          </div>
          <div class="col-md-3 mb-3">
            <label>名かな <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" name="first_kana" placeholder="名かな" v-if="customer" :value="customer.first_kana" required />
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 mb-3">
            <label>性別 <span class="badge badge-danger">必須</span></label>
            <div class="col-sm-10 text-left">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" value="1" checked />
                <label class="form-check-label">男</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" value="2" />
                <label class="form-check-label">女</label>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-2 mb-3">
            <label>郵便番号 <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" name="post_code" placeholder="郵便番号" v-if="customer" :value="customer.post_code" required />
          </div>
        </div>

        <div class="row">
          <div class="col-md-7 mb-3">
            <label>住所 <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" name="address" placeholder="渋谷区道玄坂2丁目11-1" v-if="customer" :value="customer.address" required />
          </div>
        </div>

        <div class="row">
          <div class="col-md-7 mb-3">
            <label>建物名</label>
            <input type="text" class="form-control" name="building" placeholder="Ｇスクエア渋谷道玄坂 4F" v-if="customer" :value="customer.building" />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label>メールアドレス <span class="badge badge-danger">必須</span></label>
            <input type="email" class="form-control" name="email" placeholder="you@example.com" v-if="customer" :value="customer.email" required />
          </div>
        </div>
      </div>
    </form>
    <hr class="mb-4">
    <div class="form-group">
      <router-link class="btn btn-secondary" to="/" style="width:150px; margin-right: 15px;">戻る</router-link>
      <button id="complete" type="button" class="btn btn-info" style="width:150px"><i class="fas fa-database pr-1"></i> 更新</button>
    </div>

    <div id="complete-confirm" title="確認" style="display: none;">
      <p><span class="ui-icon ui-icon-info" style="float:left; margin:12px 12px 20px 0;"></span>更新しますか？</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customer: null,
    };
  },
  mounted: function () {
    this.edit();

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
      buttons['更新'] = function(){
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
  },
  methods: {
    edit: function() {
      this.axios.get('http://localhost/api/v1/customer/edit/' + this.$route.params.id, {
        headers: {
          "Content-Type": "application/json",
        },
        responseType: 'json',
      })
      .then((response) => {
        this.customer = response.data;
      })
      .catch((e) => {
        alert(e);
      });
    }
  }
};
</script>