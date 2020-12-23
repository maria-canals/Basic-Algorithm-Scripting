/* Basic Algorithm Scripting: Title Case a SentencePassed
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". */
function titleCase(str) {
    let result = '';
    let previousLetter = '';

    for(let i=0; i < str.length; i++) {
        if (previousLetter == '' || previousLetter == ' ' ) {

            result += str[i].toUpperCase()
        
        } else {

            result += str[i].toLowerCase()
        }
        
        previousLetter = str[i]
        }

    return result;
    
}
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))