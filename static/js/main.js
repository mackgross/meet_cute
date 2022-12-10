const spawner = require('child_process').spawn();


// Get selected book
function update() {
  var select = document.getElementById('bookChoice');
  var option = select.options[select.selectedIndex];
  return option.text;
}
update();

const book_title = update();

console.log('Book selected by user:', book_title);

// return recomendations
const python_process = spawner('python', ['./recommendation_app.py', book_title]);
python_process.stdout.on('data', (data) => {
  console.log('Data recieved from python script:', JSON.parse(data.toString()));
});

