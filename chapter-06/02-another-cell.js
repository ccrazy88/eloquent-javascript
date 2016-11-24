function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = () =>
  Math.max(this.width, this.inner.minWidth());

StretchCell.prototype.minHeight = () =>
  Math.max(this.height, this.inner.minHeight());

StretchCell.prototype.draw = (width, height) => this.inner.draw(width, height);
