import { CarProps, Comparable } from "./Types";

export default class Car implements Comparable {
  constructor(private brand: string, private model: string) {}

  toJson(): CarProps {
    return {
      brand: this.brand,
      model: this.model,
    };
  }

  compareTo(car: Car): number {
    return this.model.localeCompare(car.model);
  }
}
