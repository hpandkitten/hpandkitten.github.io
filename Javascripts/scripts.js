console.log('... script loaded');


// User Stories:

// As a user, when I type in a new "TODOn't"... and hit enter
  //  I see that new item listed on the screen...
  // so I can keep myself in line

//  As a user, when I click on a "delete" button..
  //  the item closest to that button is removed from the screen
  // so whoopS!  don't need that todon't anymore... cause I did it

function bindToDontEntryField(){
  $('form#to-dont-entry').on('submit', function(e){
    e.preventDefault();
    var taskField = $(this).find('input[name="toDont[task]"]');
    var taskText = taskField.val();
    appendListNode(taskText);
    taskField.val('');  // Clear out the input
  });
}

function bindRemoveNode(todontListNode, removeButton){
  removeButton.on('click', function(){
    todontListNode.remove();
    disapprovingKitten();
  });
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
  }, 1000, 'swing',  function(){
    setInterval(function(){
    flip(kitten);
  }, 250);
  kitten.animate({
    bottom: '-1000px'
  }, 10000);
  });
  }


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

$(document).ready(function(){
init();
});

// $(function(){
// })

function init(){
bindToDontEntryField();
}
