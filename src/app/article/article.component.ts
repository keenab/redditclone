import { Component, HostBinding, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {
@HostBinding('attr.class') cssClass ='row';

article: Article;
  
constructor() { 
this.article = new Article('google', 'google.com', 50)
  }
  voteUp() {
this.article.votes+=1;

  }
  voteDown() {
    this.article.votes-=1;
  }    
  ngOnInit(): void {
  }

}
