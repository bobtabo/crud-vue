<template>
  <div class="container-fluid" style="margin-top: 50px; padding-left: 100px;padding-right: 100px;">
    <div class="alert alert-danger" role="alert" style="display: none;">
      【メッセージサンプル】エラーです。
    </div>

    <form id="form" @submit.prevent="update">
      <div class="col-md-8 order-md-1">
        <div class="row">
          <div class="col-md-3 mb-3">
            <label>姓 <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" v-if="customer" v-model="customer.last_name" name="last_name" placeholder="姓" required />
          </div>
          <div class="col-md-3 mb-3">
            <label>名 <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" v-if="customer" v-model="customer.first_name" name="first_name" placeholder="名" required />
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 mb-3">
            <label>姓かな <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" v-if="customer" v-model="customer.last_kana" name="last_kana" placeholder="姓かな" required />
          </div>
          <div class="col-md-3 mb-3">
            <label>名かな <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" v-if="customer" v-model="customer.first_kana" name="first_kana" placeholder="名かな" required />
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 mb-3">
            <label>性別 <span class="badge badge-danger">必須</span></label>
            <div class="col-sm-10 text-left">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" v-if="customer" v-model="customer.gender" name="gender" value="1" checked />
                <label class="form-check-label">男</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" v-if="customer" v-model="customer.gender" name="gender" value="2" />
                <label class="form-check-label">女</label>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-2 mb-3">
            <label>郵便番号 <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" v-if="customer" v-model="customer.post_code" name="post_code" placeholder="郵便番号" required />
          </div>
        </div>

        <div class="row">
          <div class="col-md-7 mb-3">
            <label>住所 <span class="badge badge-danger">必須</span></label>
            <input type="text" class="form-control" v-if="customer" v-model="customer.address" name="address" placeholder="渋谷区道玄坂2丁目11-1" required />
          </div>
        </div>

        <div class="row">
          <div class="col-md-7 mb-3">
            <label>建物名</label>
            <input type="text" class="form-control" v-if="customer" v-model="customer.building" name="building" placeholder="Ｇスクエア渋谷道玄坂 4F" />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label>メールアドレス <span class="badge badge-danger">必須</span></label>
            <input type="email" class="form-control" v-if="customer" v-model="customer.email" name="email" placeholder="you@example.com" required />
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
        $(this).dialog('close');
        response(false);
      };
      buttons['更新'] = function(){
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
    },
    update: function() {
      const formData = new FormData();
      formData.appned('id', this.$route.params.id);
      formData.appned('last_name', this.customer.last_name);
      formData.appned('first_name', this.customer.first_name);
      formData.appned('last_kana', this.customer.last_kana);
      formData.appned('first_kana', this.customer.first_kana);
      formData.appned('gender', this.customer.gender);
      formData.appned('post_code', this.customer.post_code);
      formData.appned('address', this.customer.address);
      formData.appned('building', this.customer.building);
      formData.appned('email', this.customer.email);
      this.axios.put('http://localhost/api/v1/customer/update', formData, {
        headers: {
          'X-HTTP-Method-Override': 'PUT'
        }
      })
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