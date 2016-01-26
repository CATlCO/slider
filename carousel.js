$(function(){
  createDots();
  startSlider();
  activate(i);
  $('.arrow-left').hover(function(){
    showThumb('left', -1);
  }, function(){
    hideThumb('left');
  });
  $('.arrow-right').hover(function(){
    showThumb('right', 1);
  }, function(){
    hideThumb('right');
  });
})

var i = 0;

function startSlider(){
  loop = setInterval(function(){
    slide();
  }, 3000);
}
function slide(){
  var $slides = $('.slides');
  var count = $('.slide').size();
  i++;
  if (i === count){
    $slides.css('margin-left', 0);
    i = 1;
    $('.number').html(i);
    activate(i);
  } 
  if (i === -1) {
    $slides.css('margin-left', -1000*(count-1));
    i = 8;
    $('.number').html(i);
    activate(i);
  }
  $slides.animate({'margin-left': -1000*i}, 1000);
  $('.number').html(i);
  activate(i);
}

function stopSlider(){
  window.clearInterval(loop);
}
function prev(){
  stopSlider();
  i=i-2;
  slide();
  startSlider();
}
function next(){
  stopSlider();
  slide();
  startSlider();
}

function createDots(){
  count = $('.slide').size();
  for (var j=0; j < count-1; j++){
    $('.dots').append("<div class='dot dot" + j + "'></div>")
  }
}
function activate(id){
  $('.dot').removeClass('active');
  if (id === 9) {
    $('.dot0').addClass('active');
  } else {
    $('.dot'+id).addClass('active');
  }
}
function showThumb(dir, no){
  which = i+no; 
  if (which === -1) {
    which = 8;
  } else if (which === 10) {
    which = 1;
  }
  $('.thumbslides').css('margin-left', -100*(which));
  $('.thumbnail.'+dir).fadeIn(300);
}
function hideThumb(dir){
  $('.thumbnail.'+dir).fadeOut(300);
}