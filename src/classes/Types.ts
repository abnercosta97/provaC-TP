export interface MovieProps {
  title: string;
  year: number;
}

export interface Comparable {
  compareTo(other: Comparable): number;
  toString(): string;
}

export interface CarProps {
  brand: string;
  model: string;
}
