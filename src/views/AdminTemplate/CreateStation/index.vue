<template>
  <div>
    <template v-if="loading">
      <Loader />
    </template>

    <div class="container">
      <div class="row">
        <div class="col-sm-6 mx-auto">
          <h3>Create Station</h3>
          <div v-if="err" class="alert alert-danger">{{err.response.data.message}}</div>
          <form @submit.prevent="handleCreateStation(formStation)">
            <div class="form-group">
              <label>Name</label>
              <input type="text" class="form-control" v-model="formStation.name" />
            </div>
            <div class="form-group">
              <label>Address</label>
              <input type="text" class="form-control" v-model="formStation.address" />
            </div>
            <div class="form-group">
              <label>Province</label>
              <input type="text" class="form-control" v-model="formStation.province" />
            </div>
            <button class="btn btn-success" type="submit">Create</button>
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
  data() {
    return {
      formStation: {
        name: "",
        address: "",
        province: ""
      }
    };
  },
  methods: {
    handleCreateStation(formStation) {
      this.$store.dispatch("fetchCreateStation", formStation);
      //   this.$router.replace("/admin/stations");
    }
  },
  computed: {
    loading() {
      return this.$store.state.stations.loading;
    },
    err() {
      return this.$store.state.stations.err;
    }
  }
};
</script>

<style>
</style>