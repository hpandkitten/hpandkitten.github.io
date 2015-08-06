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
  heart.css({color: randomPinks()}); // set color to random color
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



function bindButton(){
  var buttonHolder = $('<div>');
  buttonHolder.addClass('button-container');
  var button = $('<button>');
  button.addClass('love-button');
  button.text('Why I love Summer')
  button.on('click', function(){
    kittenWiggle();
    generatePicture();
  });

  buttonHolder.append(button, $('<br>'), 'Click Me');
  //buttonHolder.text('Click...');
  return $('body').append(buttonHolder);
}

//------------ Kitten Wiggle -----------------------

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
    bottom: '-150px'
  }, 2000, 'swing',  function(){
    setInterval(function(){
    flip(kitten);
  }, 300);
  kitten.animate({
    bottom: '-1000px'
  }, 9000);
  });
  }

//--------------------- Picture ---------------------

//random picture
  //array of imgur URLs


function generatePicture(){
  var divOld = $('.picture-container');
  divOld.remove();
  var container = $('<div>');
  container.addClass('picture-container');
  var frame = $('<div>');
  frame.addClass('picture-frame');
  var picture = $('<img>');
  picture.attr('src', randomPic());
  var article = $('<article>');
  article.text(randomLove());
  frame.append(picture);
  console.log(article);
  frame.append(article);
  container.append(frame);

  return $('body').append(container);

  }

function randomPic(){
  var picUrls = [
    "http://imgur.com/5bZ8mF8.jpg",
    "http://imgur.com/3BwldcG.jpg",
    "http://imgur.com/fS3VhnU.jpg",
    "http://imgur.com/eYdPEns.jpg",
    "http://imgur.com/ETsFA3T.jpg",
    "http://imgur.com/rKcFujh.jpg",
    "http://imgur.com/9gCBFXt.jpg",
    "http://imgur.com/U2YElQO.jpg",
    "http://imgur.com/Iu3fnbY.jpg",
    "http://imgur.com/rUgcAvL.jpg",
    "http://imgur.com/LVJjOlM.jpg",
    "http://imgur.com/cylRrry.jpg",
    "http://imgur.com/pejMqQ6.jpg",
    "http://imgur.com/DZ1OVok.jpg",
    "http://imgur.com/Aomhjh5.jpg",
    "http://imgur.com/YnG5cDb.jpg",
    "http://imgur.com/bsRZxMW.jpg",
    "http://imgur.com/c5pjHH9.jpg",
    "http://imgur.com/FViCBPL.jpg",
    "http://imgur.com/j8znN0U.jpg",
    "http://i.imgur.com/ZNsVyOK.jpg",
    "http://i.imgur.com/fH2nRBa.jpg",
    "http://imgur.com/29m8ntt.jpg",
    "http://i.imgur.com/Yb1x3Df.jpg",
    "http://i.imgur.com/rpkyddi.jpg",
    "http://i.imgur.com/Up9Rku9.jpg",
    "http://i.imgur.com/WEEXX0T.jpg",
    "http://i.imgur.com/ivTIKF8.jpg",
    "http://i.imgur.com/rya9g0C.jpg",
    "http://i.imgur.com/gD14G1S.jpg",
    "http://i.imgur.com/AjKUaAl.jpg",
    "http://i.imgur.com/Lhren4l.jpg",
    "http://i.imgur.com/hnXjRs4.jpg",
    "http://i.imgur.com/UbFjRMl.jpg",
    "http://i.imgur.com/oSKOMeT.jpg",
    "http://i.imgur.com/1bwhwYf.jpg",
    "http://i.imgur.com/G1qjGWO.jpg",
    "http://i.imgur.com/Ved71n5.jpg",
    "http://i.imgur.com/BN1vW3Q.jpg",
    "http://i.imgur.com/reB52zi.jpg",
    "http://i.imgur.com/vTVi02j.jpg",
    "http://i.imgur.com/bOYUJgV.jpg",
    "http://i.imgur.com/j7pHfzn.jpg",
    "http://i.imgur.com/egeJtIp.jpg",
    "http://i.imgur.com/iCOpP79.jpg"
  ];

  var index = Math.floor(Math.random()*(picUrls.length-1));
console.log(picUrls[index]);
  return picUrls[index];

}

function randomLove() {
  var loves = [
    "I love that Summer is one of the most genuinely nice people that I know, and being around her has made me a better person.",
    "I love that Summer is one of the smartest people in my existence, and always teaches me fun new facts.",
    "I love that Summer has the unbounded curiosity of a child and is always looking to learn new things.",
    "I love that Summer is an adventurer and willing to go on adventures on rocks to find sea glass.  Some day she will suck venom from a wound out of a snakebite when we are camping in the 39 and 1/2.",
    "I love that Summer is a little punk and I can prank her and she laughs.",
    "I love that Summer has such wit and promise as a Comedian.  She is so good in front of crowds.",
    "I love that Summer is one of the best starting writers I have read and can evoke an inner kitten wiggle when reading her stories because they have both a heart-warming quality and a humor.",
    "I love that Summer and I can go running or have a catch or bike or go hike out in the Wilderness.",
    "I love Summer because I have never laughed and smiled with someone more.",
    "I love Summer because she helped me find my true self.",
    "I love Summer because she is absolutely beautiful.",
    "I love Summer because I know one day she will be a kind and patient mother, and raise brilliant children.",
    "I love Summer's kisses.  I love the feel of her wiggling into my embrace.",
    "I love the way Summer nuzzles against me mid-sleep.",
    "I love the way Summer smells, I love the way she tastes, I love the feel of her skin, I love the sound of her voice, and I love her touch.",
    "I love Summer because her hand fits perfectly into mine, and she fits perfectly in the crook of my arm and against my chest.",
    "I love Summer because I can talk to her about anything and know she will listen.",
    "I love Summer because her eyes tell me how much she loves me.",
    "I love Summer because she makes kittens wiggle."
  ]


  var index = Math.floor(Math.random()*(loves.length-1));
  console.log(index);

  return loves[index];
}


function randomPinks() {
  var pinks = [
    "rgb(199,21,133)",
    "rgb(255,20,147)",
    "rgb(255,105,180)",
    "rgb(219,112,147)",
    "rgb(255,192,203)",
    "rgb(255,182,193)",
    "rgb(102,51,153)",
    "rgb(255,0,255)",
    "rgb(230,230,250)",
    "rgb(72,61,139)",
    "rgb(147,112,219)",
    "rgb(138,43,226)",
    "rgb(75,0,130)",
    "rgb(153,50,204)",
    "rgb(148,0,211)",
    "rgb(186,85,211)",
    "rgb(128,0,128)",
    "rgb(139,0,139)"
  ]


  var index = Math.floor(Math.random()*(pinks.length-1));

  return pinks[index];
}

$(document).ready(function(){
init();
});

// $(function(){
// })

function init(){
//bindToDontEntryField();
bindButton();
}
