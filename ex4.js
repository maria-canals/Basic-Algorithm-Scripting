/* Basic Algorithm Scripting: Find the Longest Word in a StringPassed
Return the length of the longest word in the provided sentence.

Your response should be a number. */

function findLongestWordLength(str) {
    let string = str.split(' ')
  
    let lengths = string.map(word => word.length)
      
    return Math.max(...lengths);
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6

  /*1. separate the string intro words.
    2. save inside a variable the length of every word.
    3. check the largest word of the array lengths with the method Math.max*/