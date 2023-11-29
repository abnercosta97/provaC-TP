import { Comparable } from "./Types";
import File from "./FIle";

export default class SetGeneric<T extends Comparable> {
    private items: T[] = [];
        
    constructor(item: T) {
        this.items.push(item);
        this.sort();
        File.append(this.items);
    }
    
    private sort(): void {
        this.items.sort((a: T, b: T) => a.compareTo(b));
    }
    
    public getItems(): T[] {

        return this.items;
    }





    }
