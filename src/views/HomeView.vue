<template>
  <div class="home container">
    <h1>Home Page</h1>
    <p>Welcome to Sy's cooking website! <br> Discover delicious recipes, cooking notes, and tips!</p>
    <button @click="goToRecipes">See List of Recipes</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    goToRecipes() {
      this.$router.push({ name: 'RecipePage' });
    }
  }
}
</script>