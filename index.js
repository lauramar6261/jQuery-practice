// index.js
console.log('This is a test');

//let target = document.getElementById('js-lecture-target');  // Find the HTML element where the ID is js-lecture-target
//crack that open, and set thet innerHTML tag
//target.innerHTML = '<p>I give you... content!</p>'; // Put this HTML inside the div we retrieved above

$(document).ready(function() {
  const pets = [
    {
      name: 'kylo', species: 'dog', human: 'kari', mammal: true
    },
    {
      name: 'gecky', species: 'lizard', human: 'dan', mammal: false
    },
    {
      name: 'hedwig', species: 'owl', human: 'harry', mammal: false
    },
    {
      name: 'crookshanks', species: 'cat', human: 'hermione', mammal: true
    },
    {
      name: 'scabbers', species: 'rat', human: 'ron', mammal: true
    },
  ];
  $('#js-lecture-target').append('I give you... content!')

  for (let i = 0; i < pets.length; i++) {
    let tr = $('<tr></tr>')

    tr.append( '<td>' + pets[i].name + '</td>' );
    tr.append( '<td>' + pets[i].species + '</td>' );
    tr.append( '<td>' + pets[i].human + '</td>' );
    tr.append( '<td>' + pets[i].mammal + '</td>' );
    $('#pets').append(tr)
  }
});
