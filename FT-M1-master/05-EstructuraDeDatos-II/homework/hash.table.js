// INTENTO DE HOMEWORK: FALTA COMPLETAR Y MEJORAR
function HashTable(numBuckets = 35) {
  this.numBuckets = numBuckets;
  this.slots = [];
}

// FUNCIÓN HASH
HashTable.prototype.hash = function (stringInput) {
  if (typeof stringInput !== "string") {
    return TypeError("Keys must be strings");
  } else {
    return (
      stringInput
        .split("")
        .map((i) => i.charCodeAt())
        .reduce((acc, i) => (acc += i)) % this.numBuckets
    );
  }
};

//FUNCIÓN SET
HashTable.prototype.set = function (clave, valor) {
  if (typeof clave !== "string") {
    throw new Error("Keys must be strings");
  }

  const index = this.hash(clave);

  if (this.slots[index] === undefined) {
    this.slots[index] = {};
  }

  this.slots[index][clave] = valor;
};

//FUNCIÓN GET
HashTable.prototype.get = function (key) {
  if (typeof key !== "string") {
    return TypeError("Keys must be strings");
  }
  const index = this.hash(key);
  return Object.values(this.slots[index]);
};

//FUNCIÓN HASKEY
HashTable.prototype.hasKey = function (key) {
  if (typeof key !== "string") {
    return TypeError("Keys must be strings");
  }
  const index = this.hash(key);

  if (Object.keys(this.slots[index]) == key) {
    return true;
  } else {
    return false;
  }
};

var hashTable = new HashTable();

hashTable.set("foo", "bar1");
hashTable.set("ofo", "bar2");

hashTable.get("ofo");
hashTable.get("foo");
