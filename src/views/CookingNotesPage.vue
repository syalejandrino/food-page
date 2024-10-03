<template>
  <div class="cooking-notes container">
    <h1>Cooking Notes</h1>
    <ol class="notes-list">
      <li>Always ask your mom!</li>
      <li>Your mom's taste buds are always right!</li>
      <li>If you’re unsure, just call your mom!</li>
      <li>Your dad might not be of much help!</li>
    </ol>
    <button @click="goToRecipes">See List of Recipes</button>
  </div>
</template>

<script>
export default {
  name: 'CookingNotesPage',
  methods: {
    goToRecipes() {
      this.$router.push({ name: 'RecipePage' });
    }
  }
}
</script>