import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template:
  `<form ng*If ="editRecipe">
  <div class="form-group">
    <lable name="edit-title">Edit title </lable>
    <input [(ngModel)]="recipe.title">
  </div>
  <div class="form-group">
    <lable name="edit-ingredients">Edit ingredients</lable>
    <input [(ngModel)]="recipe.ingredients">
  </div>
  <div class="form-group">
    <lable name="edit-directions">Edit directions</lable>
    <input [(ngModel)]="recipe.directions">
  </div>
   <button (click)="editRecipe()">Edit!</button>
   </form>
  `
})

export class EditRecipeComponent {



}
