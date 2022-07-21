const { validAnagram, boolToWord, numberToString } = require('..');

describe('\nEjercicio 1 - Retorna true o false', () => {
  it('Retorna "Es verdadero!"', () => {
    expect(boolToWord(true)).toBe('Es verdadero!');
  });
  it('Retorna "Es falso!"', () => {
    expect(boolToWord(false)).toBe('Es falso!');
  });
});
describe('\nEjercicio 2 - Convierte number a string', () => {
  it('Num to str 1', () => {
    expect(numberToString(100)).toBe('100');
  });
  it('Num to str 2', () => {
    expect(numberToString(-50)).toBe('-50');
  });
  it('Num to str 3', () => {
    expect(numberToString(998)).toBe('998');
  });
});
describe('\nEjercicio 3 - Validando Anagramas', () => {
  it('Anagrama 1', () => {
    expect(validAnagram('sentido', 'destino')).toBe(true);
  });
  it('Anagrama 2', () => {
    expect(validAnagram('cinema', 'iceman')).toBe(true);
  });
  it('Anagrama 3', () => {
    expect(validAnagram('henry', 'pedro')).toBe(false);
  });
  it('Anagrama 4', () => {
    expect(validAnagram('comedia', 'armenia')).toBe(false);
  });
});
