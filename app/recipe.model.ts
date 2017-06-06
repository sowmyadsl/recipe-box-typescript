export class Recipe {
  showDetails: boolean = false;
  editRecipe: boolean = false;
  constructor(public title: string, public ingredients: string, public directions: string){}
}
