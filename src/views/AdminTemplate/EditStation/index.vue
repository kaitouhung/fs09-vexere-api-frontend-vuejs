<template>
  <div>
    <template v-if="loading">
      <Loader />
    </template>

    <div class="container">
      <div class="row">
        <div class="col-sm-6 mx-auto">
          <h3>Edit Station</h3>
          <div v-if="err" class="alert alert-danger">{{err.response.data.message}}</div>
          <form @submit.prevent="handleEditStation(formStation)">
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
            <button class="btn btn-success" type="submit">Edit</button>
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
  created(){
    this.$store.dispatch('fetchDetailStation',this.$route.params.id)  
  },
  methods: {
      handleEditStation(formStation){
          this.$store.dispatch("fetchEditStation",{
              _id: this.$route.params.id,
              station: formStation
          });
      }
  },
  computed: {
    loading() {
      return this.$store.state.stations.loading;
    },
    err() {
      return this.$store.state.stations.err;
    },
    stationDetail() {
      return this.$store.state.stations.data;
    }
  },
  watch:{
      stationDetail(newValue){
        this.formStation = newValue;
      }
  }
};
</script>

<style>
</style>