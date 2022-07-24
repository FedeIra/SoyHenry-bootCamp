/* Recursividad Ejercicios */

/* -------------1------------ 
In this Kata, you will be given two positive integers a and b and your task will be to apply the following operations:

i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
ii) If a ≥ 2*b, set a = a - 2*b, and repeat step (i). Otherwise, go to step (iii);
iii) If b ≥ 2*a, set b = b - 2*a, and repeat step (i). Otherwise, return [a,b].

a and b will both be lower than 10E8.

*/

function solve(a, b) {
  if (a === 0 || b === 0) {
    return [a, b];
  } else if (a >= 2 * b) {
    return solve(a - 2 * b, b);
  } else if (b >= 2 * a) {
    return solve(a, b - 2 * a);
  } else {
    return [a, b];
  }
}

console.log(solve(6, 19)); // [6,7]
// solve(6, (19 - 2*6 )) = > solve(6, 7) => [6, 7]

solve(2, 1); // [0, 1]
//solve((2 - 2* 1) , 1) => solve(0, 1) => [0, 1]

solve(22, 5); // [0, 1]
// solve((22 - 2*5), 5)=> solve(12, 5) => solve(12 - 2*5, 5) => solve(2, 5) => solve(2, (5 - 2*2)) => solve(2, 1) => solve((2 - 2*1),1) => solve(0, 1)=> [0, 1]

solve(2, 10); // [2, 2]

// ---------------------------------------------------

/* 
Overview:
In mathematics, a recurrence formula is a formula that shows the relationship between each term and the next in a numerical sequence. For example, a sequence may be defined as follows:

n = t + 3, f = 1
... where n is the next term, t is the current term and f is the first term in the sequence.

Recurrence in mathematics is very similar to recursion in computer programming in a lot of ways:

In both recurrence and recursion, the main problem invokes a simpler problem of the same nature. For example, in recurrence formulae, calculation of the seventh term of the sequence requires the sixth term of the sequence, whose calculation then requires the fifth term of the sequence and so on.
In both recurrence and recursion, there is always something called the base case which kind of acts like a floor - without it, the calculation (or invocation) process would never end and nothing would be solved! For example, the base case in recurrence formulae is the first term, which always has to be explicitly and separately defined for the whole sequence to work. In computer programming, it would be a special case where the function no longer invokes itself and instead just returns a value.
Going back to the formula above, our first term is 1 and each next term is the current term added by 3. Thus we have:

First term: 1
Second term: 1 + 3 = 4
Third term: 4 + 3 = 7
7 + 3 = 10
13
... and so on.

Task
Your task is to create a function, recurrence(base, formula, term) where base is the base case or first term of the sequence, formula is the recurrence formula given as a function/method and term is the number of the term of the series which your function/method has to calculate. For example:

recurrence(1, n => n + 3, 4) === 10
recurrence(3, n => 2 * n, 5) === 48
 */

function recurrence(base, formula, term) {
  return base == term ? 1 : 3 + recurrence(base, formula, term - 1);
  /*  if (term < -2) {
    return base;
  } else {
    return base + recurrence(base, formula, term - 1);
  } */
}

/*


n = 2 * t, f = 3
recurrence(3, n => 2 * n, 2)

n = 3 * t + 8, f = 4
recurrence(4, n => 3* n + 8, 2)


*/
recurrence(1, (n) => n + 3, 1); // 1
recurrence(1, (n) => n + 3, 3); // 1
recurrence(1, (n) => n + 3, 5);
recurrence(1, (n) => n + 3, 9);

/* recurrence(3, (n) => 2 * n, 1);

recurrence(4, (n) => 3 * n + 8, 1); */

/* 1 contexto:

*/

// should work for n = 2 * t, f = 3
// should work for n = 3 * t + 8, f = 4
// should work for random tests
