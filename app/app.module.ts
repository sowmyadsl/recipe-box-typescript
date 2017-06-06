import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { NewRecipeComponent } from './new-recipe.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NewRecipeComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
