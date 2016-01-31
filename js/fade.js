$(document).ready(function(){
    $('.comiccon').mouseenter(function(){
        $('.comiccon').fadeTo('fast',.5);
    });
    $('.comiccon').mouseleave(function(){
        $('.comiccon').fadeTo('fast',1);
    });
});

$(document).ready(function(){
    $('.kobe').mouseenter(function(){
        $('.kobe').fadeTo('fast',.5);
    });
    $('.kobe').mouseleave(function(){
        $('.kobe').fadeTo('fast',1);
    });
});

$(document).ready(function(){
    $('.broncos').mouseenter(function(){
        $('.broncos').fadeTo('fast',.5);
    });
    $('.broncos').mouseleave(function(){
        $('.broncos').fadeTo('fast',1);
    });
});

$(document).ready(function(){

    $('.nav').mouseenter(function(){
        $('.nav').fadeTo('fast',1);
    });
  	$('.nav').fadeTo('fast',0.25)
 	
	$('.nav').mouseleave(function(){
	$('.nav').fadeTo('fast',0.25);
    });
});

$(document).ready(function(){

  $('li a').hover(
    function(){
     $(this).addClass('highlight');   
    },
    function(){
        $(this).removeClass('highlight'); 
    }
  );

});
