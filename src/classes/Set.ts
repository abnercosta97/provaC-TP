import Movie from "./Movie";

export default class Set {
    private static items: Movie[];
    constructor(item: Movie) {
        Set.items.push(item);
    }
    private sort(): void {
        Set.items.sort((a: Movie, b: Movie) => a.compareTo(b));
    }
    public getItems(): Movie[] {
        this.sort();
        return Set.items;
    }
}