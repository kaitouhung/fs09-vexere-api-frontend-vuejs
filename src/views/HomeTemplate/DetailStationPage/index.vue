<template>
  <div>
    <template v-if="loading">
      <Loader />
    </template>
    <template v-else>
      <h1>Detail Station</h1>
      <p>Name: {{station.name}}</p>
      <p>Address: {{station.address}}</p>
      <p>Province: {{station.province}}</p>
    </template>
  </div>
</template>

<script>
import Loader from "./../../../components/Loader";
export default {
  components: {
    Loader
  },
  created() {
    this.$store.dispatch("fetchDetailStation", this.$route.params.id);
  },

  computed: {
    loading() {
      return this.$store.state.stations.loading;
    },
    station() {
      return this.$store.state.stations.data;
    }
  }
};
</script>

<style>
</style>