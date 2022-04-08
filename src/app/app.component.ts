import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quotes[] = [
    {id:1, quote: 'When something is important enough, you do it even if the odds are not in your favor', author: 'Elon Musk'},
    {id:2, quote: 'Its good to learn from mistakes, not just your own', author: 'Elon Musk'},
    {id:3, quote: 'He who has a why to live can bear almost any how', author: 'Fredrich Nietzsche'},
    {id:4, quote: 'Do not take life too seriously. You will never get out of it alive', author: 'Elbert Hubbard'},
    {id:5, quote: 'Life is what happens while you are busy making other plans', author: 'John Lennon'},
    {id:6, quote: 'The only disability in life is a bad attitude', author: 'Scott Hamilton'},
    {id:7, quote: 'Goodness is the only investment that never fails', author: 'Henry David Thoreau'}
    {id:8, quote: 'Integrity reveals beauty', author: 'Thomas Leonard'}
  ];
}
