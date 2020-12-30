/*Return the length of the shortest word*/

/*============= SOLUTION 1 =================*/

const findShort = (s) => {
  s = s.split(" ");
  const length = s.map((i) => i.length);
  return (shortestWord = Math.min(...length));
};

/*============= SOLUTION 2 =================*/

const findShort = (s) => {
  let words = s.split(" ").sort((a, b) => {
    // ASC  -> a.length - b.length
    // DESC -> b.length - a.length
     return a.length - b.length;
  });

  return words[0].length;
};


console.log(findShort("bitcoin take over the world maybe who knows perhaps"));


