class StringBuilder {
  constructor(value) {
    this.value = value;
  }

  get value() {
    return this._value;
  }

  append(str) {
    return this._value + str;
  }

  prepend(str) {
    return str + this._value;
  }

  pad(str) {
    return str + this._value + str;
  }
}

const builder = new StringBuilder(".");
builder.append("^");
console.log(builder.value); // '.^'
builder.prepend("^");
console.log(builder.value); // '^.^'
builder.pad("=");
console.log(builder.value); // '=^.^='
