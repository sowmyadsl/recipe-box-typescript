import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Recipe Box</h1>
  <ul>
      <li *ngFor="let recipe of recipes">{{recipe.title}}</li>
    </ul>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Steak','Meat,potatoes,butter,rosemary, garlic, salt','Sear the meat and serve warm with mashed potatoes on the side'),
    new Recipe('Guacamole','Avacadoes,Jalapenos,Tomatoes,Onions,Cilantro,Salt,lemon','Cut the avacadoes and add diced onions,tomatoes,Jalapenos and salt and serve it chilled with cilantro on the top'),
    new Recipe('Garlic Bread','Store bought italian Bread, chopped fresh garlic, some parmesan cheese, salt, butter', 'Mix all the ingredients other than bread and top it on the bread and bake it in the oven and serve warm')
  ];

}

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string){}
}
