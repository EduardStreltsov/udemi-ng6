import {Component, OnInit} from '@angular/core';
import {RecipeBook} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeBook[] = [
    new RecipeBook('1 recipe', '1 recipe desc', 'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg'),
    new RecipeBook('2 recipe', '2 recipe desc', 'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
