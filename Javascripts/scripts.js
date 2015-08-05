console.log('... script loaded');


// --------- Hearts -----------------

console.log('... script loaded');  // Manual verify that script is loaded


function generateRandomColor(){  // Create a random color rgb string
  var red = Math.floor(Math.random()*256);  // Random integer between 0-255
  var green = Math.floor(Math.random()*256); // Random integer between 0-255
  var blue = Math.floor(Math.random()*256); // Random integer between 0-255
  return "rgb(" + red + "," + green + "," + blue + ")";  // combine to rgb string
}

function generateRandomPercentage(){  // create random percentage string
  return (Math.floor(Math.random()*200)-50) + "%";  // random percent -50 150
}

function generateHeart(){  // Create a heart h1 node
  var heart = $('<h1>').html("&hearts;").addClass('heart');
  heart.css({color: generateRandomColor()}); // set color to random color
  return heart;
}

function letThereBeAHeart(){
  var heart = generateHeart();  // Create a heart h1
  $('body').append(  heart  );  // Place on the DOM
  heart.animate({
    left: generateRandomPercentage(),  // Animating the left and right position
    top: generateRandomPercentage()
  }, 1000, 'swing', function(){  // duration, easing, completeFunction
    heart.fadeOut();  // After animation is complete... fade it out
  });
}

$(document).ready(function(){  // jquery document ready  (when DOM is ready)

  setInterval(letThereBeAHeart, 50);  // create a heart every 50 miliseconds

  // setInterval(function(){
  //   letThereBeAHeart()
  // }, 50);  // create a heart every 50 miliseconds

});


// --------------- button ---------------------

/*
function bindToDontEntryField(){
  $('form#to-dont-entry').on('submit', function(e){
    e.preventDefault();
    var taskField = $(this).find('input[name="toDont[task]"]');
    var taskText = taskField.val();
    appendListNode(taskText);
    taskField.val('');  // Clear out the input
  });
}
*/

function bindButton(){
  var buttonHolder = $('<div>');
  buttonHolder.addClass('button-container');
  var button = $('<button>');
  button.addClass('love-button');
  button.text('Why I love my beautiful Summer...')
  button.on('click', function(){
    kittenWiggle();
  });

  buttonHolder.append(button, $('<br>'), 'Click Me');
  //buttonHolder.text('Click...');
  return $('body').append(buttonHolder);
}

//call kittenWiggle

function flip(kitten){
  var turned = kitten.data('isTurned');
  if (turned){
    kitten.css({
      transform: "scaleX(1)"
    });
    kitten.data('isTurned', false);
  }else{
    kitten.css({
      transform: "scaleX(-1)"
    });
    kitten.data('isTurned', true);
  }
}

function kittenWiggle(){
  var kitten = $('#kitten');

  kitten.animate({
    bottom: '-200px'
  }, 2000, 'swing',  function(){
    setInterval(function(){
    flip(kitten);
  }, 300);
  kitten.animate({
    bottom: '-1000px'
  }, 9000);
  });
  }

/*
function generateToDontItemNode(taskText){
  var todontListNode = $('<li>').addClass('to-dont');
  var removeButton = $('<button>').text('Did It!');
  todontListNode.append(removeButton);
  todontListNode.append(taskText);
  bindRemoveNode(todontListNode, removeButton);
  return todontListNode;
  }

function appendListNode(taskText){
var listNode = generateToDontItemNode(taskText);
$('ul#to-dont-list').append(listNode);
}
*/
$(document).ready(function(){
init();
});

// $(function(){
// })

function init(){
//bindToDontEntryField();
bindButton();
}
