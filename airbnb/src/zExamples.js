//----array.map()
//nums.map(function() {})

const nums = [1, 2, 3, 4, 5];
const squared = nums.map(function (item) {
  return item * item;
});
console.log(squared);

const names = ['alice', 'bob', 'charlie', 'danielle'];
const uppercase = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1);
});
console.log(uppercase);

const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle'];
const tags = pokemon.map((mon) => {
  return `<p>${mon}</p>`;
});
console.log(tags);

// 1. What does the `.map()` array method do ?
// Returns a new array. Whatever gets returned from the callback function
// provided is placed at the same index in the new Array.
// Usually we take the items from the original array and modify them in some way.

// 2. What do we usually use `.map()` for in React?
// Convert an array of raw data into an array of JSX elements
// that can be displayed on the page

// 3. Why is using `.map()` better than just creating the components manually by typing them out ?
// It makes our code more "self-sustaining"
// - not requiring additional changes whenever the data changes.
