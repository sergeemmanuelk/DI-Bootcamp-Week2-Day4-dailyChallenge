function printWordInFrame(words) {
    // Split the input string into an array of words
    words = words.split(',');
  
    // Find the longest word
    let longestWord = '';
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
  
    // Calculate frame length
    let frameLength = longestWord.length + 4;
  
    // Print frame header
    console.log('*'.repeat(frameLength));
  
    // Print each word in the frame
    for (let word of words) {
      console.log('* ' + word + ' '.repeat(frameLength - word.length - 3) + '*');
    }
  
    // Print the footer of the frame
    console.log('*'.repeat(frameLength));
}
  
// prompt the user for words
let words = prompt("Enter a few words separated by commas : ");

// Print the words in a frame
printWordInFrame(words);
  