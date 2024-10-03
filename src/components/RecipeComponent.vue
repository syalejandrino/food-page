<template>
    <div class="recipe">
      <h2>{{ name }}</h2>
      <img :src="imgPath" alt="Recipe Image" />

      
      <div class="details">
        <p><strong>Preparation Time:</strong> {{ prep }} minutes</p>
        <p><strong>Cooking Time:</strong> {{ cook }} minutes</p>
        <p><strong>Total Time:</strong> {{ total }} minutes</p>
        <p><strong>Servings:</strong> {{ servings }}</p>
      </div>
      
      <div class="ingredients">
        <h3>Ingredients</h3>
        <slot name="ingredients"></slot>
      </div>
      
      <div class="directions">
        <h3>Directions</h3>
        <slot name="directions"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RecipeComponent',
    props: {
      name: {
        type: String,
        required: true
      },
      prep: {
        type: Number,
        required: true
      },
      cook: {
        type: Number,
        required: true
      },
      total: {
        type: Number,
        required: true
      },
      servings: {
        type: Number,
        required: true
      },
      imgPath: {
        type: String,
        required: true
      }
    }
  }
  </script>


<style scoped>
.recipe-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.recipe {
    border: 2px solid rgba(255, 255, 255, 0.271);
    border-radius: 8px;
    padding: 10px;
    margin: 10px;
    background-color: transparent;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    flex: 1 1 calc(30% - 20px);
    max-width: 400px;
}

.recipe img {
    display: block;
    margin: 0 auto;
    max-width: 90%;
    height: auto;
    border: 2px solid #131111;
    border-radius: 8px;
}

h3, h2, p, ul, li, ol {
    color: rgba(255, 255, 255, 0.882);
    margin: 0;
    padding: 15px 0;
}
</style>