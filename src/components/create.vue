<template>
  <div class="container-fluid" style="margin-top: 50px; padding-left: 100px;padding-right: 100px;">
    <div class="alert alert-danger" role="alert" style="display: none;">
      【メッセージサンプル】エラーです。
    </div>

    <form id="form" @submit.prevent="store">
      <div class="col-md-8 order-md-1">
        <div class="row">
          <div class="col-md-3 mb-3">
            <label>姓 <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" v-model="last_name" name="last_name" placeholder="姓" required />
          </div>
          <div class="col-md-3 mb-3">
            <label>名 <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" v-model="first_name" name="first_name" placeholder="名" value="" required />
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 mb-3">
            <label>姓かな <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" v-model="last_kana" name="last_kana" placeholder="姓かな" value="" required />
          </div>
          <div class="col-md-3 mb-3">
            <label>名かな <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" v-model="first_kana" name="first_kana" placeholder="名かな" value="" required />
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 mb-3">
            <label>性別 <span class="badge badge-danger">必須</span></label>
            <div class="col-sm-10 text-left">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" v-model="gender" name="gender" value="1" />
                <label class="form-check-label">男</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" v-model="gender" name="gender" value="2" />
                <label class="form-check-label">女</label>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-2 mb-3">
            <label>郵便番号 <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" v-model="post_code" name="post_code" placeholder="郵便番号" value="" required />
          </div>
        </div>

        <div class="row">
          <div class="col-md-7 mb-3">
            <label>住所 <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" v-model="address" name="address" placeholder="渋谷区道玄坂2丁目11-1" value="" required />
          </div>
        </div>

        <div class="row">
          <div class="col-md-7 mb-3">
            <label>建物名</label>
            <input type="text" class="form-control" v-model="building" name="building" placeholder="Ｇスクエア渋谷道玄坂 4F" value="" />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label>メールアドレス <span class="badge badge-danger">必須</span></label>
            <input type="email" class="form-control" v-model="email" name="email" placeholder="you@example.com" value="" required />
          </div>
        </div>
      </div>
    </form>
    <hr class="mb-4">
    <div class="form-group">
      <router-link class="btn btn-secondary" to="/" style="width:150px; margin-right: 15px;">戻る</router-link>
      <button id="complete" type="button" class="btn btn-success" style="width:150px"><i class="fas fa-database pr-1"></i> 登録</button>
    </div>

    <div id="complete-confirm" title="確認" style="display: none;">
      <p><span class="ui-icon ui-icon-info" style="float:left; margin:12px 12px 20px 0;"></span>登録しますか？</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      last_name: '',
      first_name: '',
      last_kana: '',
      first_kana: '',
      gender: '',
      post_code: '',
      address: '',
      building: '',
      email: '',
    };
  },
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
        $(this).dialog('close');
        response(false);
      };
      buttons['登録'] = function(){
        $(this).dialog('close');
        response(true);
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
    store: function() {
      const formData = new FormData();
      formData.appned('last_name', this.last_name);
      formData.appned('first_name', this.first_name);
      formData.appned('last_kana', this.last_kana);
      formData.appned('first_kana', this.first_kana);
      formData.appned('gender', this.gender);
      formData.appned('post_code', this.post_code);
      formData.appned('address', this.address);
      formData.appned('building', this.building);
      formData.appned('email', this.email);
      this.axios.post('http://localhost/api/v1/customer/store', formData)
      .then(res => {
        console.log(res);
        location.replace('/');
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
};
</script>