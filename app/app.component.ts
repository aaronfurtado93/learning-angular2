import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  templateUrl: "./app/templates/app/app.component.html",
})

export class AppComponent  {
 title = "Tour of Heroes";
 hero = {
   id: 1,
   name: "WindStorm"
 }
}
