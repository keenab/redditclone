import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'redditclone';
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{ 
    // this helps to check if my button is working.
console.log(title.value, link.value);

return false;
  }
}
