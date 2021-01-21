$(function(){
  $('.art1mini').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify1"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify1').css({
     left: ($(document).width() - $('#magnify1').outerWidth())/2,
            top: ($(window).height() - $('#magnify1').outerHeight())/2
   });
    $('#overlay, #magnify1').fadeIn('fast');
  });

  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
    $('#overlay, #magnify1').fadeOut('fast', function() {
      $('#close-popup, #magnify1, #overlay').remove();
    });
  });
});

$(function(){
  $('.art2mini').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify2"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify2').css({
     left: ($(document).width() - $('#magnify2').outerWidth())/2,
            top: ($(window).height() - $('#magnify2').outerHeight())/2
   });
    $('#overlay, #magnify2').fadeIn('fast');
  });

  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
    $('#overlay, #magnify2').fadeOut('fast', function() {
      $('#close-popup, #magnify2, #overlay').remove();
    });
  });
});

$(function(){
  $('.art3mini').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify3"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify3').css({
     left: ($(document).width() - $('#magnify3').outerWidth())/2,
     // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify3').outerHeight())/2
   });
    $('#overlay, #magnify3').fadeIn('fast');
  });

  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
    $('#overlay, #magnify3').fadeOut('fast', function() {
      $('#close-popup, #magnify3, #overlay').remove();
    });
  });
});

$(function(){
  $('.art4mini').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify4"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify4').css({
     left: ($(document).width() - $('#magnify4').outerWidth())/2,
            top: ($(window).height() - $('#magnify4').outerHeight())/2
   });
    $('#overlay, #magnify4').fadeIn('fast');
  });

  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
    $('#overlay, #magnify4').fadeOut('fast', function() {
      $('#close-popup, #magnify4, #overlay').remove();
    });
  });
});

$(function(){
  $('.art5mini').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify5"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify5').css({
     left: ($(document).width() - $('#magnify5').outerWidth())/2,
            top: ($(window).height() - $('#magnify5').outerHeight())/2
   });
    $('#overlay, #magnify5').fadeIn('fast');
  });

  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
    $('#overlay, #magnify5').fadeOut('fast', function() {
      $('#close-popup, #magnify5, #overlay').remove();
    });
  });
});

$(function(){
  $('.art6mini').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify6"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify6').css({
     left: ($(document).width() - $('#magnify6').outerWidth())/2,
            top: ($(window).height() - $('#magnify6').outerHeight())/2
   });
    $('#overlay, #magnify6').fadeIn('fast');
  });

  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
    $('#overlay, #magnify6').fadeOut('fast', function() {
      $('#close-popup, #magnify6, #overlay').remove();
    });
  });
});

$(function(){
  $('.art7mini').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify7"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify7').css({
     left: ($(document).width() - $('#magnify7').outerWidth())/2,
            top: ($(window).height() - $('#magnify7').outerHeight())/2
   });
    $('#overlay, #magnify7').fadeIn('fast');
  });

  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
    $('#overlay, #magnify7').fadeOut('fast', function() {
      $('#close-popup, #magnify7, #overlay').remove();
    });
  });
});

$(function(){
  $('.art8mini').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify8"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify8').css({
     left: ($(document).width() - $('#magnify8').outerWidth())/2,
            top: ($(window).height() - $('#magnify8').outerHeight())/2
   });
    $('#overlay, #magnify8').fadeIn('fast');
  });

  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
    $('#overlay, #magnify8').fadeOut('fast', function() {
      $('#close-popup, #magnify8, #overlay').remove();
    });
  });
});

$(function(){
  $('.art9mini').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify9"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify9').css({
     left: ($(document).width() - $('#magnify9').outerWidth())/2,
            top: ($(window).height() - $('#magnify9').outerHeight())/2
   });
    $('#overlay, #magnify9').fadeIn('fast');
  });

  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
    $('#overlay, #magnify9').fadeOut('fast', function() {
      $('#close-popup, #magnify9, #overlay').remove();
    });
  });
});

$(function(){
  $('.art10mini').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify10"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify10').css({
     left: ($(document).width() - $('#magnify10').outerWidth())/2,
            top: ($(window).height() - $('#magnify10').outerHeight())/2
   });
    $('#overlay, #magnify10').fadeIn('fast');
  });

  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
    $('#overlay, #magnify10').fadeOut('fast', function() {
      $('#close-popup, #magnify10, #overlay').remove();
    });
  });
});
