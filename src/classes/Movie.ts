import { Comparable, MovieProps } from "./Types";

export default class Movie implements Comparable {
  constructor(private title: string, private year: number) {}

  toJson(): MovieProps {
    return {
      title: this.title,
      year: this.year,
    };
  }

  compareTo(movie: Movie): number {
    return this.title.localeCompare(movie.title);
  }
}
