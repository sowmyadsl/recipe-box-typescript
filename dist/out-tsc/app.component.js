"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.recipes = [
            new Recipe('Steak', 'Meat,potatoes,butter,rosemary, garlic, salt', 'Sear the meat and serve warm with mashed potatoes on the side'),
            new Recipe('Guacamole', 'Avacadoes,Jalapenos,Tomatoes,Onions,Cilantro,Salt,lemon', 'Cut the avacadoes and add diced onions,tomatoes,Jalapenos and salt and serve it chilled with cilantro on the top'),
            new Recipe('Garlic Bread', 'Store bought italian Bread, chopped fresh garlic, some parmesan cheese, salt, butter', 'Mix all the ingredients other than bread and top it on the bread and bake it in the oven and serve warm')
        ];
    }
    AppComponent.prototype.onSelect = function (recipe) {
        if (recipe.showDetails) {
            recipe.showDetails = false;
        }
        else {
            recipe.showDetails = true;
        }
    };
    AppComponent.prototype.editRecipe = function (recipe) {
        if (recipe.editRecipe) {
            recipe.editRecipe = false;
        }
        else {
            recipe.editRecipe = true;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n  <div class=\"jumbotron\">\n  <h1>Recipe Box</h1>\n  </div>\n  <ul>\n    <li *ngFor=\"let recipe of recipes\">\n      <h3\n      (click)=\"onSelect(recipe)\">{{recipe.title}}</h3>\n      <div *ngIf=\"recipe.showDetails\">\n        <ul>\n          <li><strong>Ingredients:</strong> {{recipe.ingredients}}</li>\n          <li><strong>Directions: </strong>{{recipe.directions}}</li>\n        </ul>\n        <div *ngIf=\"recipe.editRecipe\">\n            <br>\n            <label name=\"edit-title\">Edit title </label>\n            <input [(ngModel)]=\"recipe.title\">\n            <br>\n            <label name=\"edit-ingredients\">Edit ingredients</label>\n            <input [(ngModel)]=\"recipe.ingredients\">\n            <br>\n            <label name=\"edit-directions\">Edit directions</label>\n            <input [(ngModel)]=\"recipe.directions\">\n            <br>\n            <button (click)=\"editRecipe(recipe)\">Done!</button>\n        </div>\n        <button *ngIf=\"recipe.editRecipe == false\" (click)=\"editRecipe(recipe)\">Edit</button>\n      </div>\n    </li>\n  </ul>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Recipe = (function () {
    function Recipe(title, ingredients, directions) {
        this.title = title;
        this.ingredients = ingredients;
        this.directions = directions;
        this.showDetails = false;
        this.editRecipe = false;
    }
    return Recipe;
}());
exports.Recipe = Recipe;
//# sourceMappingURL=app.component.js.map