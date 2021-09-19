<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Erik</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link id="nav-link-texts" to="/texts" class="nav-link">Texts</router-link>
        </li>
        <li class="nav-item">
          <router-link id="nav-link-add" to="/add" class="nav-link">Add</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
