export interface IBook {
  _id: string;
  username: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}
export interface IReview {

  name: string;
  review: string;
  _id: string;
}