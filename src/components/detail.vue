<template>
  <div class="container-fluid" style="margin-top: 50px; padding-left: 100px;padding-right: 100px;">
    <div class="col-md-8 order-md-1">
      <div class="row">
        <div class="col-md-3 mb-3">
          <label>姓</label>
          <input type="text" class="form-control" name="last_name" placeholder="姓" v-if="customer" :value="customer.last_name" readonly />
        </div>
        <div class="col-md-3 mb-3">
          <label>名</label>
          <input type="text" class="form-control" name="first_name" placeholder="名" v-if="customer" :value="customer.first_name" readonly />
        </div>
      </div>

      <div class="row">
        <div class="col-md-3 mb-3">
          <label>姓かな</label>
          <input type="text" class="form-control" name="last_kana" placeholder="姓かな" v-if="customer" :value="customer.last_kana" readonly />
        </div>
        <div class="col-md-3 mb-3">
          <label>名かな</label>
          <input type="text" class="form-control" name="first_kana" placeholder="名かな" v-if="customer" :value="customer.first_kana" readonly />
        </div>
      </div>

      <div class="row">
        <div class="col-md-2 mb-3">
          <label>性別</label>
          <input type="text" class="form-control" name="gender" v-if="customer" :value='customer.gender == 1 ? "男" : "女"' readonly />
        </div>
      </div>

      <div class="row">
        <div class="col-md-2 mb-3">
          <label>郵便番号</label>
          <input type="text" class="form-control" name="post_code" placeholder="郵便番号" v-if="customer" :value="customer.post_code" readonly />
        </div>
      </div>

      <div class="row">
        <div class="col-md-7 mb-3">
          <label>住所</label>
          <input type="text" class="form-control" name="address" placeholder="渋谷区道玄坂2丁目11-1" v-if="customer" :value="customer.address" readonly />
        </div>
      </div>

      <div class="row">
        <div class="col-md-7 mb-3">
          <label>建物名</label>
          <input type="text" class="form-control" name="building" placeholder="Ｇスクエア渋谷道玄坂 4F" v-if="customer" :value="customer.building" readonly />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label>メールアドレス</label>
          <input type="email" class="form-control" name="email" placeholder="you@example.com" v-if="customer" :value="customer.email" readonly />
        </div>
      </div>
    </div>
    <hr class="mb-4">
    <div class="form-group">
      <router-link class="btn btn-secondary" to="/" style="width:150px; margin-right: 15px;">戻る</router-link>
      <button id="complete" type="button" class="btn btn-danger" style="width:150px"><i class="fas fa-database pr-1"></i> 削除</button>
    </div>

    <div id="complete-confirm" title="確認" style="display: none;">
      <p><span class="ui-icon ui-icon-info" style="float:left; margin:12px 12px 20px 0;"></span>削除しますか？</p>
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
    this.detail();

    $("#complete").click(function() {
      completeConfirm(function(result){
        if (result) {
          location.replace('http://localhost/api/v1/customer/delete/' + this.$route.params.id);
        }
      });
    });

    function completeConfirm(response){
      var buttons = {};
      buttons['キャンセル'] = function(){
        $(this).dialog('close');
        response(false);
      };
      buttons['削除'] = function(){
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
    detail: function() {
      this.axios.get('http://localhost/api/v1/customer/detail/' + this.$route.params.id, {
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