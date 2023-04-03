export class Businesses {

  constructor(
    public id: number,
    public alias: string,
    public name: string,
    public imageUrl: string,
    public isClosed: boolean,
    public url: string,
    public reviewCount: number,
    public rating: number,
    public phone: string,
    public displayPhone: string,
    public distance: number,
    public categories: number[],
    public locations: number[],
    public transactions: number[]
  ) {
  }
}
