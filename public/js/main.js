$(document).ready(function() {
	// Smooth scrolling using jQuery easing
  	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
	    if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
		      let target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		      if (target.length) {
		        $('html, body').animate({
		          	scrollTop: (target.offset().top - 58)
		        	}, 1000, "easeInOutExpo");
		        return false;
		      }
	    }
  	});	

  	//add input validation to forms
  	window.addEventListener('load', function() {
	    let forms = $('.form-validation');

	    let validation = Array.prototype.filter.call(forms, function(form) {
	      form.addEventListener('submit', function(event) {
	        if (form.checkValidity() === false) {
	          event.preventDefault();
	          event.stopPropagation();
	        }
	        form.classList.add('was-validated');
	      }, false);
	    });
  	}, false);

  	// show and hide reset password form
	$('#add-more-btn').click(function(){   
		$('#additional-day').append('<div class="form-group"><select class="custom-select custom-select-sm" id="dayOfWeek" name="dayOfWeek"><option value=""></option><option value="monday">Monday</option><option value="tuesday">Tuesday</option><option value="wednesday">Wednesday</option> <option value="thursday">Thursday</option> <option value="friday">Friday</option> <option value="saturday">Saturday</option> <option value="sunday">Sunday</option></select></div>');
		$('#additional-start-time').append('<div class="form-group"><select class="custom-select custom-select-sm" id="startTime" name="startTime"><option value=""></option><option value="7:00">7:00 AM</option> <option value="7:30">7:30 AM</option> <option value="8:00">8:00 AM</option> <option value="8:30">8:30 AM</option> <option value="9:00">9:00 AM</option> <option value="9:30">9:30 AM</option> <option value="10:00">10:00 AM</option> <option value="11:00">11:00 AM</option> <option value="11:30">11:30 AM</option> <option value="12:00">12:00 PM</option> <option value="12:30">12:30 PM</option> <option value="13:00">1:00 PM</option> <option value="13:30">1:30 PM</option> <option value="14:00">2:00 PM</option> <option value="14:30">2:30 PM</option> <option value="15:00">3:00 PM</option> <option value="15:30">3:30 PM</option> <option value="16:00">4:00 PM</option> <option value="16:30">4:30 PM</option> <option value="17:00">5:00 PM</option> <option value="17:30">5:30 PM</option> <option value="18:00">6:00 PM</option> <option value="18:30">6:30 PM</option> <option value="19:00">7:00 PM</option> <option value="19:30">7:30 PM</option> <option value="20:00">8:00 PM</option> <option value="20:30">8:30 PM</option> <option value="21:00">9:00 PM</option> <option value="21:30">9:30 PM</option> <option value="22:00">10:00 PM</option></select></div>');
		$('#additional-end-time').append('<div class="form-group"><select class="custom-select custom-select-sm" id="endTime" name="endTime"><option value=""></option><option value="7:00">7:00 AM</option> <option value="7:30">7:30 AM</option> <option value="8:00">8:00 AM</option> <option value="8:30">8:30 AM</option> <option value="9:00">9:00 AM</option> <option value="9:30">9:30 AM</option> <option value="10:00">10:00 AM</option> <option value="11:00">11:00 AM</option> <option value="11:30">11:30 AM</option> <option value="12:00">12:00 PM</option> <option value="12:30">12:30 PM</option> <option value="13:00">1:00 PM</option> <option value="13:30">1:30 PM</option> <option value="14:00">2:00 PM</option> <option value="14:30">2:30 PM</option> <option value="15:00">3:00 PM</option> <option value="15:30">3:30 PM</option> <option value="16:00">4:00 PM</option> <option value="16:30">4:30 PM</option> <option value="17:00">5:00 PM</option> <option value="17:30">5:30 PM</option> <option value="18:00">6:00 PM</option> <option value="18:30">6:30 PM</option> <option value="19:00">7:00 PM</option> <option value="19:30">7:30 PM</option> <option value="20:00">8:00 PM</option> <option value="20:30">8:30 PM</option> <option value="21:00">9:00 PM</option> <option value="21:30">9:30 PM</option> <option value="22:00">10:00 PM</option></select></div>');
	});
	$('#resetPasswordContainer').hide();
	$('#showResetForm').click(function(){
		$('#signInContainer').hide();
		$('#resetPasswordContainer').show();
	});
	$('#showSignIn').click(function(){
		$('#resetPasswordContainer').hide();
		$('#signInContainer').show();
	});
	// date picker
	$( function() {
    $( "#datepicker" ).datepicker();
	} );
});