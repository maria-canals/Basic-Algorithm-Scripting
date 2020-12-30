/*Complete the method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings.

The method should return an array of sentences declaring the state or country and its capital.*/

const capital = (x) =>
  x.map(
    (i) => `The capital of ${i.state ? i.state : i.country} is ${i.capital}`
  );

state_capitals = [{ state: "Maine", capital: "Augusta" }];

("The capital of Maine is Augusta");

country_capitals = [{ country: "Spain", capital: "Madrid" }];

("The capital of Spain is Madrid");

mixed_capitals = [
  { state: "Maine", capital: "Augusta" },
  { country: "Spain", capital: "Madrid" },
];

("The capital of Spain is Madrid");

console.log(capital(mixed_capitals)[1]);
