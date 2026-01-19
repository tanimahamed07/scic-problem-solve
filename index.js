


function countVowels(stry) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < stry.length; i++) {
        if (vowels.includes(stry[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("programming")); 


function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([5, 1, 9, 3])); 



function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}


function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("hello"));

function findEvens(arr) {
  let evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  return evens;
}

console.log(findEvens([1, 2, 3, 4, 5, 6])); 


function isPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 




console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));


function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4])); 






function capitalizeWords(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join(" ");
}

console.log(capitalizeWords("hello world")); 

function findFactorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(findFactorial(5)); 


function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

pingPong();