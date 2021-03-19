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
      customers: {},
    };
  },
  mounted: function () {
    $("#search").click(function() {
      $("form").submit();
    });

    let self = this;
    let url = 'http://localhost/api/v1/customer';
    this.axios.get(url).then(function(response){
      self.customers = response.data;
    });
  },
  filters: {
    moment: function (string) {
      return moment(string).format('YYYY/MM/DD HH:mm:ss');
    }
  },
  name: 'SearchCustomer',
  methods: {
    getIndex() {
      this.axios.get('http://localhost/api/v1/customer')
        .then((response) => {
          console.log(response.data.origin);
        })
        .catch((e) => {
          alert(e);
        });
    }
  }
};
</script>
