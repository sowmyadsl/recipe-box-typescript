import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'new-recipe',
  template: `
    <h1>New Recipe</h1>
    <div>
      <br>
      <label name="new-title">New title </label>
      <input #newTitle>
      <br>
      <label name="edit-ingredients">New ingredients</label>
      <input #newIngredients>
      <br>
      <label name="edit-directions">New directions</label>
      <input #newDirections>
      <br>
      <button (click)="createRecipe(newTitle.value, newIngredients.value, newDirections.value)">Create!</button>
    </div>
  `
})

export class NewRecipeComponent {
  @Output() newRecipeSender = new EventEmitter();
  
  createRecipe(title: string, ingredients: string, directions: string) {
    var newRecipe: Recipe = new Recipe(title, ingredients, directions);
    this.newRecipeSender.emit(newRecipe);
  }
}
