// const spawner = require('child_process').spawn;


// Get selected book
function update() {
  var select = document.getElementById('bookChoice');
  var option = select.options[select.selectedIndex];
  return option.text;
}
update();

/*
const title = 'Twilight';

console.log('Book selected by user:', title);

// return recomendations
const python_process = spawner('python', ['book_recommender.py', title]);

python_process.stdout.on('data', (data) => {
  console.log('Recommended Books:', data.toString());
});
*/
