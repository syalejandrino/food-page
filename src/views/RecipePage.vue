<template>
  <h1 class="h1_recipepage">List of Recipes</h1>
  <div class="recipepage container">
    <div v-for="(recipe, index) in recipes" :key="index">
      <RecipeComponent
        :name="recipe.name"
        :prep="recipe.prepTime"
        :cook="recipe.cookTime"
        :total="recipe.totalTime"
        :servings="recipe.servings"
        :imgPath="recipe.imgPath"
      >
        <template #ingredients>
          <ul>
            <li v-for="(ingredient, i) in recipe.ingredients" :key="i">{{ ingredient }}</li>
          </ul>
        </template>
        
        <template #directions>
          <ol>
            <li v-for="(direction, j) in recipe.directions" :key="j">{{ direction }}</li>
          </ol>
        </template>
      </RecipeComponent>
    </div>
  </div>
</template>

<script>
import RecipeComponent from '../components/RecipeComponent.vue';

export default {
  name: 'RecipePage',
  components: {
    RecipeComponent
  },
  data() {
    return {
      recipes: [
        {
          name: 'Pork Adobo',
          prepTime: '15',
          cookTime: '60',
          totalTime: '75',
          servings: '4',
          imgPath: "src/assets/pork-adobo.jpg",
          ingredients: [
            '500g pork belly, cut into cubes',
            '1/2 cup soy sauce',
            '1/2 cup vinegar',
            '4 garlic cloves, minced',
            '2 bay leaves',
            'Salt and pepper to taste'
          ],
          directions: [
            'Combine pork, soy sauce, garlic, and bay leaves in a bowl. Marinate for 30 minutes.',
            'In a pot, add the marinated pork and vinegar. Do not stir.',
            'Bring to a boil, then reduce heat and simmer for 1 hour until tender.',
            'Season with salt and pepper before serving.'
          ]
        },
        {
          name: 'Chicken Inasal',
          prepTime: '50',
          cookTime: '20',
          totalTime: '70',
          servings: '4',
          imgPath: 'src/assets/chicken-inasal.png',
          ingredients: [
            '4 chicken thighs',
            '1/4 cup soy sauce',
            '1/4 cup vinegar',
            '2 tablespoons calamansi juice',
            '4 garlic cloves, minced',
            '1 tablespoon ginger, minced'
          ],
          directions: [
            'Marinate chicken in soy sauce, vinegar, calamansi juice, garlic, and ginger for 30 minutes.',
            'Grill chicken over medium heat for 20 minutes, basting with marinade.',
            'Serve with Java Rice and soy sauce with calamansi and chili.',
            'Let cool before serving.'
          ]
        },
        {
          name: 'Cheesecake',
          prepTime: '15',
          cookTime: '60',
          totalTime: '75',
          servings: '8',
          imgPath: 'src/assets/cheesecake.avif',
          ingredients: [
            '200g graham crackers, crushed',
            '100g butter, melted',
            '500g cream cheese',
            '150g sugar',
            '3 eggs',
            '1 teaspoon vanilla extract'
          ],
          directions: [
            'Preheat oven to 350°F (175°C).',
            'Mix crushed graham crackers with melted butter and press into a springform pan.',
            'In a bowl, beat cream cheese and sugar until smooth. Add eggs one at a time, mixing well after each.',
            'Pour mixture over the crust and bake for 1 hour.',
            'Let cool before serving.'
          ]
        }
      ]
    }
  }
}
</script>