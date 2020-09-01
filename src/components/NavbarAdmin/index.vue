<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <!-- Brand -->
    <a class="navbar-brand" href="#">Navbar Admin</a>

    <!-- Toggler/collapsibe Button -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar links -->
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link active-class="active" exact class="nav-link" to="/admin/dashboard">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" exact class="nav-link" to="/admin/stations">Stations</router-link>
        </li>
        <li class="nav-item">
          <button class="nav-link logout" @click="handleLogout">Logout</button>
        </li>
        <!-- <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/stations">Stations</router-link>
        </li>-->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    handleLogout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style scoped>
.active {
  background-color: white;
  color: red !important;
}
.logout {
  color: black !important;
}
</style>