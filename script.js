//deals hovering the buttons on load
$(document).ready(

  // Logo Hover
  function logoHover(){

    let btns = $(".btn");
    $("#navCont > #sqlogo").mouseenter(function(){
      $("#navCont > #sqlogo").addClass("freeze");
      btns.removeClass("fadeOut");
      btns.addClass("fadeIn");
    });
    let t;
    $("#navCont > #sqlogo").mouseleave(function(){
      t = setTimeout(function(){
        $("#navCont > #sqlogo").removeClass("freeze");
        btns.addClass("fadeOut");
        btns.removeClass("fadeIn");
      }, 850);
    });
    $(".btn").mouseenter(function(){
      clearTimeout(t);
    });
    $(".btn").mouseleave(function(){
      $("#navCont > #sqlogo").removeClass("freeze");
      btns.addClass("fadeOut");
      btns.removeClass("fadeIn");
    });
    $("#sqtagline").mouseenter(function(){
      $("#navCont > #sqlogo").removeClass("freeze");
      btns.addClass("fadeOut");
      btns.removeClass("fadeIn");
    });
  }
);

// Slide pages - delays pages depending on start and end location
function topicSlide (s,e) {
  $(window).trigger('resize');
  let p = $(".topicWrap"), t = .5, tt = t*2, del = 0;

  if (e > s) {
    p.eq(s).css(`transition`,`top ${t}s ease-in, transform ${t}s ease-in`).removeClass(`main`).addClass(`top`);

    if (e == s+1) {
      del = t/2;
    }

    for (i = s+1; i < e; i++) {
      p.eq(i).css(`transition`,`top ${tt}s ease-in-out ${del}s, transform ${tt}s ease-in-out ${del}s`).removeClass(`bottom`).addClass(`top`);
      del += t;
    }

    p.eq(e).css(`transition`,`top ${t}s ease-out ${del}s, transform ${t}s ease-out ${del}s`).removeClass(`bottom`).addClass(`main`);

  } else if (s > e) {

    p.eq(s).css(`transition`,`top ${t}s ease-in, transform ${t}s ease-in`).removeClass(`main`).addClass(`bottom`);

    if (e == s-1) {
      del = t/2;
    }

    for (i = s-1; i > e; i--) {
      p.eq(i).css(`transition`,`top ${tt}s ease-in-out ${del}s, transform ${tt}s ease-in-out ${del}s`).removeClass(`top`).addClass(`bottom`);
      del += t;
    }

    p.eq(e).css(`transition`,`top ${t}s ease-out ${del}s, transform ${t}s ease-out ${del}s`).removeClass(`top`).addClass(`main`);

  }

  setTimeout(function() {
    p.eq(e).css(`transition`,`top ${t}s ease-in-out ${t}s, transform ${t}s ease-out ${del}s`);
  }, (t+del)*1000);


}

//Slideshow Functions
function slideRight(){
  if (cs == 3) {
    ns = 0;
  } else {
    ns = cs + 1;
  }
  $('.slideImg').eq(ps).css({'transform': 'translateX(100%)', 'transition': 'none'});
  $('.slideImg').eq(cs).css({'transform': 'translateX(-100%)', 'transition': 'transform 1s ease-in-out'});
  $('.slideImg').eq(ns).css({'transform': 'translateX(0)', 'transition': 'transform 1s ease-in-out'});

  $('.slideText').eq(ps).css({'transform': 'translateX(calc(100% + 10px))', 'transition': 'none'});
  $('.slideText').eq(cs).css({'transform': 'translateX(calc(-100% - 10px))', 'transition': 'transform 1s ease-in-out'});
  $('.slideText').eq(ns).css({'transform': 'translateX(0)', 'transition': 'transform 1s ease-in-out'});

  $('.slideTitle').eq(ps).css({'transform': 'translateX(100%)', 'transition': 'none'});
  $('.slideTitle').eq(cs).css({'transform': 'translateX(-100%)', 'transition': 'transform 1s ease-in-out'});
  $('.slideTitle').eq(ns).css({'transform': 'translateX(0)', 'transition': 'transform 1s ease-in-out'});

  $('.slideshowDot').eq(cs).toggleClass('active');
  $('.slideshowDot').eq(ns).toggleClass('active');

  ps = cs;
  cs = ns;
  $(window).delay(1000).trigger('resize');
}

function slideLeft(){
  if (ps == 0) {
    ns = 3;
  } else {
    ns = ps - 1;
  }
  $('.slideImg').eq(ns).css({'transform': 'translateX(-100%)', 'transition': 'none'});
  $('.slideImg').eq(cs).css({'transform': 'translateX(100%)', 'transition': 'transform 1s ease-in-out'});
  $('.slideImg').eq(ps).css({'transform': 'translateX(0)', 'transition': 'transform 1s ease-in-out'});

  $('.slideText').eq(ns).css({'transform': 'translateX(calc(-100% - 10px))', 'transition': 'none'});
  $('.slideText').eq(cs).css({'transform': 'translateX(calc(100% + 10px))', 'transition': 'transform 1s ease-in-out'});
  $('.slideText').eq(ps).css({'transform': 'translateX(0)', 'transition': 'transform 1s ease-in-out'});

  $('.slideTitle').eq(ns).css({'transform': 'translateX(-100%)', 'transition': 'none'});
  $('.slideTitle').eq(cs).css({'transform': 'translateX(100%)', 'transition': 'transform 1s ease-in-out'});
  $('.slideTitle').eq(ps).css({'transform': 'translateX(0)', 'transition': 'transform 1s ease-in-out'});

  $('.slideshowDot').eq(cs).toggleClass('active');
  $('.slideshowDot').eq(ps).toggleClass('active');
  cs = ps;
  ps = ns;
  $(window).delay(1000).trigger('resize');
}

// 1. Work - Keeps the entire title in frame
// 2. Work - Keeps the entire text in frame
// 3. Work - Keeps a 1:1 aspect ration on the image
// 4. About - Fits the page title to its frame
// 5. About - Checks to see if about text should be centered
$(document).ready(function() {
  //1
  let ssTh = $('.slideTitle').eq(cs).height();
  $('#slideshowTitle').css(`height`, `${ssTh}px`);
  //2
  let ssRh = $('#slideshowRight').height()
  $('#slideshowText').eq(cs).css(`height`, `calc(${ssRh}px - ${ssTh}px - 30px - 3em)`);
  //3
  let sbw = $('#slideshowBox').width();
  $('#slideshowBox').css(`height`, `${sbw}px`);

  //4
  let abtw = $('#abTitle').width();
  $('#abTitle > h1').css(`font-size`,`${abtw*0.016}em`);

  //5
  let abTexth = $('#abText').height();
  let abTextPh = $('#abText > p').eq(0).height();
  if (abTexth <= abTextPh) {
    $('#abText > p').eq(0).removeClass('noScroll');
  } else if (abTexth > abTextPh) {
    $('#abText > p').eq(0).addClass('noScroll');
  }
});

$(window).resize(function() {

  let ssTh = $('.slideTitle').eq(cs).height();
  $('#slideshowTitle').css(`height`, `${ssTh}px`);

  let ssRh = $('#slideshowRight').height()
  $('#slideshowText').eq(cs).css(`height`, `calc(${ssRh}px - ${ssTh}px - 30px - 3em)`);

  let sbw = $('#slideshowBox').width();
  $('#slideshowBox').css(`height`, `${sbw}px`);

  let abtw = $('#abTitle').width();
  $('#abTitle > h1').css(`font-size`,`${abtw*0.016}em`);

  let abTexth = $('#abText').height();
  let abTextPh = $('#abText > p').eq(0).height();
  if (abTexth <= abTextPh) {
    $('#abText > p').eq(0).removeClass('noScroll');
  } else if (abTexth > abTextPh) {
    $('#abText > p').eq(0).addClass('noScroll');
  }
});

//Copy text function
function copy(copyText) {
  navigator.clipboard.writeText(copyText).then(function() {
    $('#copyAlert').text("Copied " + copyText);
    $('#copyAlert').toggleClass("active");
    t = setTimeout(function(){
      $('#copyAlert').toggleClass("active");
    }, 1500);
  }, function() {
    alert("Error copying text to clipboard");
  });

}
