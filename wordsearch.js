const wordSearch = (letters, word) => {
  //use a for loop, or something, to loop through all of the nested arrays
  //probably want to join the letters from that loop to create a word
  //compare than word to our input word
  const output = [];
    
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (let i = 0; i < letters[0].length; i++) {
    let arr = [];
    for (let j = 0; j < letters.length; j++) {
      arr.push(letters[j][i]);
    }
    output.push(arr);
  }
  //   console.log(output)
      
  const outputJoin = output.map(ls => ls.join(''));
  console.log(outputJoin);
  // console.log(horizontalJoin); //gives us a new array of all the various words in an the arrays as full words
  if (horizontalJoin.includes(word)) {
    return true;
  } else if (outputJoin.includes(word)) {
    return true;
  }
    
  return false;
};




// wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ], 'SEINFELD');

wordSearch([
  []
], 'HELLO');

module.exports = wordSearch;





// wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ], 'SEINFELD');

// wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'H', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'E', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'L', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'L', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'O', 'L'],
// ], 'HELLO');

module.exports = wordSearch;