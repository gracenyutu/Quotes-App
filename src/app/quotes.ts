export class Quotes {
  //vote: number;
  constructor(public id: number,public content: string,public author: string,public upvote: number,public downvote: number,public createDate:Date)
  {
    //this.vote=0;
  }
}
