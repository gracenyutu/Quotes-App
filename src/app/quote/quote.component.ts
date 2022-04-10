import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quotes[] = [
    new Quotes(1,'When something is important enough, you do it even if the odds are not in your favor','Elon Musk',0,0,new Date(2020,9,9)),
    new Quotes(2,'Its good to learn from mistakes, not just your own', 'Samson Opondo',0,0,new Date(2020,2,17)),
    new Quotes(3,'He who has a why to live can bear almost any how', 'Fredrich Nietzsche',0,0,new Date(2020,1,9)),
    new Quotes(4,'Do not take life too seriously. You will never get out of it alive','Elbert Hubbard',0,0,new Date(1992,3,10)),
    new Quotes(5,'Life is what happens while you are busy making other plans', 'John Lennon',0,0,new Date(1992,8,12)),
    new Quotes(6,'The only disability in life is a bad attitude', 'Scott Hamilton',0,0,new Date(1994,10,10)),
    new Quotes(7,'Goodness is the only investment that never fals', 'Henry David Thoreau',0,0,new Date(1993,11,4)),
    new Quotes(8,'Integrity reveals beauty', 'Thomas Leonard',0,0,new Date(2020,1,9)),
  ];

  voteQuote(quoteUp: any, index: number){
    if (quoteUp) {
      this.quotes.splice(index,1)
    }
  }
  addNewQuote(quote: any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.submitDate = new Date(quote.submitDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
}

}
