export class Attributes<T> {
  constructor(private data: T) {}

  get(propName: keyof T): T[keyof T] {
    return this.data[propName];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}
