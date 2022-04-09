export class Quotes {
  vote: number;
  constructor(public id: number,public content: string,public author: string)
  {
    this.vote=0;
  }
}
