// Check if the following fish are within the array: 'Dory', 'Bubbles', 'Gurgle'

let fish1 = {
    name: 'Dory',
    color: 'blue'
}

let fish2 = {
    name: 'Bubbles',
    color: 'white and gray'
}

let fish3 = {
    name: 'Coral',
    color: 'black'
}
let arrayOfFish = [fish1, fish2, fish3]

function findFish ( arrayOfFish , fishLost) {
  let fishFound = false;
  let fishIndex = 0;
    while(!fishFound && fishIndex < arrayOfFish.length) {
        fishFound = (arrayOfFish[fishIndex].name == fishLost)
        fishIndex++

    }

    return fishFound
    
}
console.log(findFish(arrayOfFish, 'Dory')) //true
console.log(findFish(arrayOfFish, 'Bubbles')) //true
console.log(findFish(arrayOfFish, 'Gurgle')) //false