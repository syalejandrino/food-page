<template>
  <div id="app">
    <nav>
      <div class="nav-container">
        <RouterLink to="/">Home</RouterLink>
        <span class="separator">|</span>
        <RouterLink to="/about">About</RouterLink>
        <span class="separator">|</span>
        <RouterLink to="/cooking-notes">Cooking Notes</RouterLink>
      </div>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #131111;
  margin: 0;
}

nav {
  background-color: #333;
  color: white;
  padding: 15px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.nav-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.2s;
}

nav a:hover {
  background-color: #555;
  transform: scale(1.05);
  text-decoration: underline;
}

.separator {
  color: white;
  font-size: 18px;
  padding: 0 10px;
}
</style>
