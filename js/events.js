//define functions here

function getIt() {
  $('p').on('click', () => {
    alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load', () => {
    $('img').classList.add('tasty');
  })
}

$(document).ready(function(){

// call functions here

getIt();
frameIt();

});
