$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
      if($('#navbarSupportedContent').hasClass('active')){
        $('#navbarSupportedContent').toggleClass('active');
      }
      else {
          // Do sweet fa
      }

      $('#sidebar').toggleClass('active');
      $('#contentInner').toggleClass('no-scroll');
      $('#wrapper').toggleClass('fixBodyWidth');
  });
});

$(document).ready(function () {
  $('#rightSideBarBtnId').on('click', function () {
      $('#navbarSupportedContent').toggleClass('active');
      $('#navbarSupportedContent').toggleClass('no-scroll');
      document.getElementById('noScrollBody').style.position = "fixed";
  });

});

$(document).ready(function () {
  $('#rightSideBarBtnId2').on('click', function () {
      $('#navbarSupportedContent').toggleClass('active');
      $('#navbarSupportedContent').toggleClass('no-scroll');
      document.getElementById('noScrollBody').style.position = "fixed";

      if($('#navbarSupportedContent').hasClass('active')){
        document.getElementById("type").style.left = "25%";
      }
      else {
          document.getElementById("type").style.left = "30%";
      }
  });
});

$(document).ready(function () {
  $('#sidebarCollapse2').on('click', function () {
      $('#sidebar').toggleClass('active');
      $('#contentInner').toggleClass('no-scroll');
      document.getElementsByClassName('wrapper').style.marginRight = "140px";
  });
});


// HREF LINKS ONCLICK EVENT
$('#rightMenuCloseHref2').click(function(){
    $('#navbarSupportedContent').toggleClass('active');
    document.getElementById('noScrollBody').style.position = "inherit";
});

$('#rightMenuCloseHref3').click(function(){
    $('#navbarSupportedContent').toggleClass('active');
    document.getElementById('noScrollBody').style.position = "inherit";
});

$('#rightMenuCloseHref4').click(function(){
    $('#navbarSupportedContent').toggleClass('active');
    document.getElementById('noScrollBody').style.position = "inherit";
});

$('#rightMenuCloseHref5').click(function(){
    $('#navbarSupportedContent').toggleClass('active');
    document.getElementById('noScrollBody').style.position = "inherit";
});

$('#rightMenuCloseHref6').click(function(){
    $('#navbarSupportedContent').toggleClass('active');
    document.getElementById('noScrollBody').style.position = "inherit";
});

$('#hrefLink1').click(function(){
  // Do something
  $('#noScrollBody').toggleClass('inheritPosition');
  $('#navbarSupportedContent').toggleClass('active');
});

$('#hrefLink2').click(function(){
  // Do something
  document.getElementById('noScrollBody').style.position = "inherit";
  $('#navbarSupportedContent').toggleClass('active');
});


$('#hrefLink3').click(function(){
  // Do something
  document.getElementById('noScrollBody').style.position = "inherit";
  $('#navbarSupportedContent').toggleClass('active');
});


$('#hrefLink4').click(function(){
  // Do something
  document.getElementById('noScrollBody').style.position = "inherit";
  $('#navbarSupportedContent').toggleClass('active');
});

$('#hrefLink5').click(function(){
  // Do something
  document.getElementById('noScrollBody').style.position = "inherit";
  $('#navbarSupportedContent').toggleClass('active');
});




$(document).ready(function(){
$('#button').click(function(){
  $('#txt1').val("Button clicked");
});
});