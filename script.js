function firstWord(s) {
  let result = "";
  let foundChar = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      result += s[i]; // Add characters to the result
      foundChar = true;
    } else if (foundChar) {
      break; // Stop when the first space after a word is found
    }
  }

  return result;
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));