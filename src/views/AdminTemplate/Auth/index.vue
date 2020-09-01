<template>
  <div>
    <template v-if="loading">
      <Loader />
    </template>
    <div v-else class="container mt-5">
      <div class="row">
        <div class="col-sm-6 mx-auto">
          <div class="alert alert-danger" v-if="err">{{err.response.data.message}}</div>
          <form @submit.prevent="handleLogin">
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" v-model="email" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" v-model="password" />
            </div>
            <button type="submit" class="btn btn-success">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "./../../../components/Loader";
export default {
  components: {
    Loader
  },
  created() {
    if (this.$store.state.auth.token) {
      this.$router.replace("/admin/dashboard");
    }
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    handleLogin() {
      const formData = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("login", formData);
    }
  },

  computed: {
    loading() {
      return this.$store.state.auth.loading;
    },
    err() {
      return this.$store.state.auth.err;
    }
  }
};
</script>

<style>
</style>