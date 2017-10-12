// Provided code
const repeat = (string, times) => {
  let result = "";
  for (var i = 0; i < times; i++) {
    result += string;
  }
  return result;
};

class TextCell {
  constructor(text) {
    this.text = text.split("\n");
  }

  minWidth() {
    return this.text.reduce(function(width, line) {
      return Math.max(width, line.length);
    }, 0);
  }

  minHeight() {
    return this.text.length;
  }

  draw(width, height) {
    const result = [];
    for (let i = 0; i < height; i++) {
      const line = this.text[i] || "";
      result.push(line + repeat(" ", width - line.length));
    }
    return result;
  }
}

// Solution
class StretchCell {
  constructor(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
  }

  minWidth() {
    return Math.max(this.width, this.inner.minWidth());
  }

  minHeight() {
    return Math.max(this.height, this.inner.minHeight());
  }

  draw(width, height) {
    return this.inner.draw(width, height);
  }
}

const sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));
