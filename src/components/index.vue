<template>
  <div class="py-5 text-center">
    <div class="alert alert-success" role="alert" style="display: none;">
      【メッセージサンプル】登録しました。
    </div>

    <div style="margin-bottom:20px;">
      <form id="form" @submit.prevent="search">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">姓かな</label>
              <div class="col-sm-6">
                <input v-model="lastKana" type="text" class="form-control" name="last_kana" placeholder="姓かな">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">名かな</label>
              <div class="col-sm-6">
                <input v-model="firstKana" type="text" class="form-control" name="first_kana" placeholder="名かな">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">性別</label>
              <div class="col-sm-10 text-left">
                <div class="form-check form-check-inline">
                  <input v-model="gender1" class="form-check-input" type="checkbox" name="gender1" value="1">
                  <label class="form-check-label">男</label>
                </div>
                <div class="form-check form-check-inline">
                  <input v-model="gender2" class="form-check-input" type="checkbox" name="gender2" value="2">
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
      <div id="messageSearch" class="alert alert-warning" role="alert">
        【メッセージサンプル】該当データが見つかりません。
      </div>
      <div class="form-group row">
        <router-link class="btn btn-success" to="/create" style="width:150px"><i class="fas fa-chalkboard-teacher pr-1"></i> 新規登録</router-link>
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
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.id }}</td>
          <td><router-link :to="{ name: 'detail', params: { id: customer.id } }">{{ customer.last_name }}  {{ customer.first_name }}</router-link></td>
          <td>{{ customer.last_kana }} {{ customer.first_kana }}</td>
          <td>{{ customer.gender == 1 ? "男" : "女" }}</td>
          <td>{{ customer.post_code }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.created_at | moment }}</td>
          <td>{{ customer.updated_at | moment }}</td>
          <td><router-link class="btn btn-info" :to="{ name: 'edit', params: { id: customer.id } }">編集</router-link></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      lastKana: '',
      firstKana: '',
      gender1: false,
      gender2: false,
      customers: {},
    };
  },
  mounted: function () {
    $("#search").click(function() {
      $("form").submit();
    });

    this.search();
  },
  filters: {
    moment: function (string) {
      return moment(string).format('YYYY/MM/DD HH:mm:ss');
    }
  },
  name: 'SearchCustomer',
  methods: {
    search: function() {
      console.log(this.gender1);
      let params = new URLSearchParams();
      params.append('last_kana', this.lastKana);
      params.append('first_kana', this.firstKana);
      this.axios.post('http://localhost/api/v1/customer', {
        headers: {
          "Content-Type": "application/json",
        },
        responseType: 'json',
      }, params)
      .then((response) => {
        this.customers = response.data;
        if (!this.customers) {
          $("#messageSearch").show();
        } else {
          $("#messageSearch").hide();
        }
        console.log("検索");
      })
      .catch((e) => {
        alert(e);
      });
    }
  }
};
</script>
