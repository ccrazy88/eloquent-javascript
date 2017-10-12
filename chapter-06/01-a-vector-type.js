class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

Vector.prototype.plus = other => new Vector(this.x + other.x, this.y + other.y);

Vector.prototype.minus = other =>
  new Vector(this.x - other.x, this.y - other.y);

Object.defineProperty(Vector.prototype, "length", {
  get: () => Math.sqrt(this.x ** 2 + this.y ** 2)
});
