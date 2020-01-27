function Range(from, to) {
    this.from = from;
    this.to = to;
}
Range.prototype = {
    includes: function (x) {
        return x >= this.from && x <= this.to
    }
}

var r = new Range(1, 3)
console.log(r.includes(2));

