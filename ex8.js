/* Basic Algorithm Scripting: Truncate a StringPassed
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. */

function truncateString(str, num) {
    if(str.length > num) {
       str = str.slice(0,num)
       return str + '...';
       } else {
       return '';
       }
   }
   
   console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
   
   /*
     if string.length is greater than num
     slice that string from 0 to num
     and then return the result + ...", else
     return '';
   */