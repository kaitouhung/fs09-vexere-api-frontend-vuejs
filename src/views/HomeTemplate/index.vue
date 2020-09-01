<template>
  <div>
    <NavbarHome />
    <router-view />
  </div>
</template>

<script>
import NavbarHome from "./../../components/NavbarHome";
export default {
  components: {
    NavbarHome
  }
};
</script>

<style>
</style>