<template>
  <div class="container">
    <div v-if="loading">
      <Loader />
    </div>
    <div v-else>
      <h3>Stations</h3>
      <div class="row">
        <StationItem v-for="(station) in stations" :key="station._id" :station="station" />
      </div>
    </div>
  </div>
</template>

<script>
import StationItem from "./../../../components/StationItem";
import Loader from "./../../../components/Loader";
export default {
  components: {
    StationItem,
    Loader
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