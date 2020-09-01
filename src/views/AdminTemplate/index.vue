<template>
  <div>
    <NavbarAdmin />
    <router-view />
  </div>
</template>

<script>
import NavbarAdmin from "./../../components/NavbarAdmin";
export default {
  components: {
    NavbarAdmin
  }
};
</script>

<style>
</style>