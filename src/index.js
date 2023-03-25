import './styles.css';

document.getElementById('app').innerHTML = `
<h1>T-T Saturday Class</h1>
<div>
  This is todays daily class algorithm,<br>
  <br>Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
  <br>
  <br>
  You can use each character in text at most once. Return the maximum number of instances that can be formed.
  <br>
</div>
<ul>
  <li>Create an empty dictionary.</li>
  <li>Loop through each character in the input text and increment the count of that character in the dictionary.</li>
  <li>Compute the minimum count of each required character to form the word "balloon" based on the count of each character in the dictionary.
  </li>
  <li>Return the minimum count computed in step 3 divided by 2, which represents the maximum number of instances of "balloon" that can be formed.</li>
`;

// Directions

// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

function maxNumberOfBalloons(text) {
  const counts = {}; // hash table to count occurrences of each character
  for (let i = 0; i < text.length; i++) {
    counts[text[i]] = (counts[text[i]] || 0) + 1; // increment count for character
  }
  const balloon = 'balloon';
  for (let i = 0; i < balloon.length; i++) {
    const count = counts[balloon[i]] || 0;
    if (balloon[i] === 'l' || balloon[i] === 'o') {
      // need 2 instances of 'l' and 'o' for each instance of "balloon"
      if (count < 2) {
        return 0; // cannot form "balloon"
      }
    } else {
      if (count === 0) {
        return 0; // cannot form "balloon"
      }
    }
  }
  // minimum count of 'b', 'a', 'l', 'o', and 'n' divided by 2
  return Math.floor(
    Math.min(
      counts['b'],
      counts['a'],
      counts['l'] / 2,
      counts['o'] / 2,
      counts['n']
    )
  );
}

console.log(maxNumberOfBalloons('nlaebolko')); // 1
console.log(maxNumberOfBalloons('loonbalxballpoon')); // 2
console.log(maxNumberOfBalloons('leetcode')); // 0
