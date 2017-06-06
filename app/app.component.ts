import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
  <h1>Recipe Box</h1>
  </div>
  <div class="container">
  <div class="col-md-6">
    <new-recipe (newRecipeSender)="addRecipe($event)"></new-recipe>
  </div>
  <ul class="col-md-6">
    <li *ngFor="let recipe of recipes">
      <h3
      (click)="onSelect(recipe)">{{recipe.title}}</h3>
      <div *ngIf="recipe.showDetails">
        <ul>
          <li><strong>Ingredients:</strong> {{recipe.ingredients}}</li>
          <li><strong>Directions: </strong>{{recipe.directions}}</li>
        </ul>
        <div *ngIf="recipe.editRecipe">
            <br>
            <label name="edit-title">Edit title </label>
            <input [(ngModel)]="recipe.title">
            <br>
            <label name="edit-ingredients">Edit ingredients</label>
            <input [(ngModel)]="recipe.ingredients">
            <br>
            <label name="edit-directions">Edit directions</label>
            <input [(ngModel)]="recipe.directions">
            <br>
            <button (click)="editRecipe(recipe)">Done!</button>
        </div>
        <button *ngIf="recipe.editRecipe == false" (click)="editRecipe(recipe)">Edit</button>
      </div>
    </li>
  </ul>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Steak','Meat,potatoes,butter,rosemary, garlic, salt','Sear the meat and serve warm with mashed potatoes on the side'),
    new Recipe('Guacamole','Avacadoes,Jalapenos,Tomatoes,Onions,Cilantro,Salt,lemon','Cut the avacadoes and add diced onions,tomatoes,Jalapenos and salt and serve it chilled with cilantro on the top'),
    new Recipe('Garlic Bread','Store bought italian Bread, chopped fresh garlic, some parmesan cheese, salt, butter', 'Mix all the ingredients other than bread and top it on the bread and bake it in the oven and serve warm')
  ];

  onSelect(recipe){
    if (recipe.showDetails) {
      recipe.showDetails = false;
    } else {
      recipe.showDetails = true;
    }
  }

  editRecipe(recipe){
    if(recipe.editRecipe){
      recipe.editRecipe = false;
    } else {
      recipe.editRecipe = true;
    }
  }

  addRecipe(newRecipeFromChild: Recipe) {
    this.recipes.push(newRecipeFromChild);
  }

}
