export default class Random {
  a: number;

  constructor(seed = 1) {
    if (seed < 1)
      throw ('seed must be at least 1')
    this.a = seed >>> 0;
  }

  next() {
    this.a = (this.a ^ (this.a << 13)) >>> 0
    this.a = (this.a ^ (this.a >>> 17)) >>> 0
    this.a = (this.a ^ (this.a << 5)) >>> 0
    return this.a / 0x100000000;
  }

  choose(as) {
    return as[Math.floor(this.next() * as.length)];
  }

  pop(as) {
    return as.splice(Math.floor(this.next() * as.length), 1)[0]
  }
}