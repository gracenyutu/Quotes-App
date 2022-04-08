import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quotes[] = [
    new Quotes(1,'When something is important enough, you do it even if the odds are not in your favor','Elon Musk'),
    new Quotes(2,'Its good to learn from mistakes, not just your own', 'Elon Musk'),
    new Quotes(3,'He who has a why to live can bear almost any how', 'Fredrich Nietzsche'),
    new Quotes(4,'Do not take life too seriously. You will never get out of it alive','Elbert Hubbard'),
    new Quotes(5,'Life is what happens while you are busy making other plans', 'John Lennon'),
    new Quotes(6,'The only disability in life is a bad attitude', 'Scott Hamilton'),
    new Quotes(7,'Goodness is the only investment that never fails', 'Henry David Thoreau'),
    new Quotes(8,'Integrity reveals beauty', 'Thomas Leonard'),
  ];
}
