import { Component, OnInit } from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes:Recipe[] = [
      new Recipe("Fish","Fish curry","http://www.newsdon.com/wp-content/uploads/2017/06/fish.jpg"),
      new Recipe("Fish","Fish curry","http://www.newsdon.com/wp-content/uploads/2017/06/fish.jpg")
    ];
  constructor() { }

  ngOnInit() {
  }

}
