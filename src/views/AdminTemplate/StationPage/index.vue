<template>
  <div>
    <template v-if="loading">
      <Loader />
    </template>

    <div v-else class="container">
      <div class="row">
        <div class="col-sm-10 mx-auto">
          <router-link class="btn btn-success" to="/admin/create-station">Create Station</router-link>
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Province</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="stations">
                <tr v-for="(station) in stations" :key="station._id">
                  <td>{{station.name}}</td>
                  <td>{{station.address}}</td>
                  <td>{{station.province}}</td>
                  <td>
                    <button class="btn btn-success mr-2"><router-link :to="`/admin/stations/${station._id}/edit`">Edit</router-link></button>
                    <button
                      class="btn btn-danger"
                      data-toggle="modal"
                      data-target="#modelId"
                      @click="id=station._id"
                    >Delete</button>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
      <DeleteConfirm :id="id" />
    </div>
  </div>
</template>

<script>
import Loader from "./../../../components/Loader";
import DeleteConfirm from "./../../../components/DeleteConfirm";
export default {
  components: {
    DeleteConfirm,
    Loader
  },
  data() {
    return {
      id: ""
    };
  },
  created() {
    this.$store.dispatch("fetchListStations");
  },
  computed: {
    loading() {
      return this.$store.state.stations.loading;
    },
    stations() {
      return this.$store.state.stations.data;
    }
  }
};
</script>

<style>
</style>