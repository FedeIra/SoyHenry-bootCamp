function Queue() {
  class Queue {
    constructor(lista = []) {
      return (this.lista = lista);
    }
    enqueue(value) {
      return this.lista.unshift(value);
    }
    dequeue() {
      if (this.lista.length > 0) {
        this.lista.pop();
      } else {
        return undefined;
      }
    }
    size() {
      return this.lista.length;
    }
  }
}
var queue = new Queue();
var q2 = new Queue();
