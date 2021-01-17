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
$('#rightMenuCloseHref1').click(function(){
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

// Typing Animation Effect
function animateValue(id, start, end, duration) {
  if (start === end) return;
  var range = end - start;
  var current = start;
  var increment = end > start? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function() {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
          clearInterval(timer);
      }
  }, stepTime);
}

$(document).ready(function(){
    animateValue("value1", 0, 2, 1500);
    animateValue("value2", 0, 8, 1500);
    animateValue("value3", 0, 3, 1500);
});