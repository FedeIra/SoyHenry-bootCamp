function HashTable() {
  this.numBuckets = 35;
  this.arr = new Array(this.numBuckets);
  this.arr.fill({});
}

let table = new HashTable();
table.arr.length;

HashTable.prototype.hash = function (key) {
  let sum = 0;
  for (let i = 0; i < key.length; i++) {
    sum += key.charCodeAt(i);
  }
  return sum % this.numBuckets;
};
