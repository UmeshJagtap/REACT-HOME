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
