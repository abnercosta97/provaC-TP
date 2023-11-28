import { MovieProps } from "./Types";

export default class Movie {
    constructor(private title: string, private year: number) {}
        toJson():MovieProps {
            return {
                title: this.title,
                year: this.year
            };
        }
        compareTo(movie: Movie): number {
            return this.title.localeCompare(movie.title);    
        }    
}
