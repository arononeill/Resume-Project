$(function() {

  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var enquiry = $("select#contactOptions").val();
      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var message = $("textarea#phone").val();
      var message = $("textarea#message").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $this = $("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "contactus.js",
        type: "POST",
        data: {
          enquiry: enquiry,
          name: name,
          phone: phone,
          email: email,
          message: message
        },
        cache: false,
        success: function() {
          // Success message
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' id='closeContactForm' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-success')
            .append("<strong>Your message has been sent. </strong>");
          $('#success > .alert-success')
            .append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        error: function() {
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' id='closeContactForm' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        complete: function() {
          setTimeout(function() {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      });
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});


// 2nd MODAL
$(function() {

  $("#contactForm2 input,#contactForm2 textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var enquiry = $("select#contactOptions2").val();
      var name = $("input#name2").val();
      var email = $("input#email2").val();
      var phone = $("input#phone2").val();
      var message = $("textarea#message2").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }

      $this = $("#sendMessageButton2");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "js/contactus3.php",
        type: "POST",
        data: {
          enquiry: enquiry,
          name: name,
          phone: phone,
          email: email,
          message: message
        },
        cache: false,
        success: function() {
          console.log('2nd contact form');
          // Success message
          $('#success2').html("<div class='alert alert-success'>");
          $('#success2 > .alert-success').html("<button type='button' class='close' id='closeContactForm' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success2 > .alert-success')
            .append("<strong>Your message has been sent. </strong>");
          $('#success2 > .alert-success')
            .append('</div>');
          //clear all fields
          $('#contactForm2').trigger("reset");
        },
        error: function() {
          console.log('2nd contact form 2');
          // Fail message
          $('#success2').html("<div class='alert alert-danger'>");
          $('#success2 > .alert-danger').html("<button type='button' class='close' id='closeContactForm' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success2 > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
          $('#success2 > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm2').trigger("reset");
        },
        complete: function() {
          setTimeout(function() {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      });
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

// 3rd MODAL
$(function() {

  $("#contactForm3 input,#contactForm3 textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      console.log('3rd contact form');
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var enquiry = $("select#contactOptions3").val();
      var name = $("input#name3").val();
      var email = $("input#email3").val();
      var phone = $("input#phone3").val();
      var message = $("textarea#message3").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $this = $("#sendMessageButton3");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "js/contactus3.php",
        type: "POST",
        data: {
          enquiry: enquiry,
          name: name,
          phone: phone,
          email: email,
          message: message
        },
        cache: false,
        success: function() {
          // Success message
          $('#success3').html("<div class='alert alert-success'>");
          $('#success3 > .alert-success').html("<button type='button' class='close' id='closeContactForm' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success3 > .alert-success')
            .append("<strong>Your message has been sent. </strong>");
          $('#success3 > .alert-success')
            .append('</div>');
          //clear all fields
          $('#contactForm3').trigger("reset");
        },
        error: function() {
          // Fail message
          $('#success3').html("<div class='alert alert-danger'>");
          $('#success3 > .alert-danger').html("<button type='button' class='close' id='closeContactForm' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success3 > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
          $('#success3 > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm3').trigger("reset");
        },
        complete: function() {
          setTimeout(function() {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      });
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});



/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
