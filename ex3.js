/* Basic Algorithm Scripting: Factorialize a NumberPassed
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function. */

function factorialize(num) {
    var result = num; //4 -> 12// 
     
    if (num === 0 || num === 1) 
      return 1; //1
   
    while (num > 1) {  
      num--; //3 // 2
      result *= num; // 3*4= 12 // 12*2 = 24
     
    }
       
    return result; 
  }
  console.log(factorialize(4))
  /*
  
  3*4 12
  2*4 8
  1*4 4 
  

  */