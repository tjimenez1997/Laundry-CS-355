$(document).ready(function(){
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

  	//add more available button
	$('#add-availability-btn').click(function(){
		console.log('pass');
		$('#additional-day').append('<div class="form-group"><select class="custom-select custom-select-sm" id="dayOfWeek" name="dayOfWeek"><option value=""></option><option value="monday">Monday</option><option value="tuesday">Tuesday</option><option value="wednesday">Wednesday</option> <option value="thursday">Thursday</option> <option value="friday">Friday</option> <option value="saturday">Saturday</option> <option value="sunday">Sunday</option></select></div>');
		$('#additional-start-time').append('<div class="form-group"><select class="custom-select custom-select-sm" name="startTime"><option value=""></option><option value="7:00">7:00 AM</option> <option value="7:30">7:30 AM</option> <option value="8:00">8:00 AM</option> <option value="8:30">8:30 AM</option> <option value="9:00">9:00 AM</option> <option value="9:30">9:30 AM</option> <option value="10:00">10:00 AM</option> <option value="11:00">11:00 AM</option> <option value="11:30">11:30 AM</option> <option value="12:00">12:00 PM</option> <option value="12:30">12:30 PM</option> <option value="13:00">1:00 PM</option> <option value="13:30">1:30 PM</option> <option value="14:00">2:00 PM</option> <option value="14:30">2:30 PM</option> <option value="15:00">3:00 PM</option> <option value="15:30">3:30 PM</option> <option value="16:00">4:00 PM</option> <option value="16:30">4:30 PM</option> <option value="17:00">5:00 PM</option> <option value="17:30">5:30 PM</option> <option value="18:00">6:00 PM</option> <option value="18:30">6:30 PM</option> <option value="19:00">7:00 PM</option> <option value="19:30">7:30 PM</option> <option value="20:00">8:00 PM</option> <option value="20:30">8:30 PM</option> <option value="21:00">9:00 PM</option> <option value="21:30">9:30 PM</option> <option value="22:00">10:00 PM</option></select></div>');
		$('#additional-end-time').append('<div class="form-group"><select class="custom-select custom-select-sm" name="endTime"><option value=""></option><option value="7:00">7:00 AM</option> <option value="7:30">7:30 AM</option> <option value="8:00">8:00 AM</option> <option value="8:30">8:30 AM</option> <option value="9:00">9:00 AM</option> <option value="9:30">9:30 AM</option> <option value="10:00">10:00 AM</option> <option value="11:00">11:00 AM</option> <option value="11:30">11:30 AM</option> <option value="12:00">12:00 PM</option> <option value="12:30">12:30 PM</option> <option value="13:00">1:00 PM</option> <option value="13:30">1:30 PM</option> <option value="14:00">2:00 PM</option> <option value="14:30">2:30 PM</option> <option value="15:00">3:00 PM</option> <option value="15:30">3:30 PM</option> <option value="16:00">4:00 PM</option> <option value="16:30">4:30 PM</option> <option value="17:00">5:00 PM</option> <option value="17:30">5:30 PM</option> <option value="18:00">6:00 PM</option> <option value="18:30">6:30 PM</option> <option value="19:00">7:00 PM</option> <option value="19:30">7:30 PM</option> <option value="20:00">8:00 PM</option> <option value="20:30">8:30 PM</option> <option value="21:00">9:00 PM</option> <option value="21:30">9:30 PM</option> <option value="22:00">10:00 PM</option></select></div>');
	});

	// show and hide reset password form
	$('#resetPasswordContainer').hide();
	$('#showResetForm').click(function(){
		$('#signInContainer').hide();
		$('#resetPasswordContainer').show();
	});
	$('#showSignIn').click(function(){
		$('#resetPasswordContainer').hide();
		$('#signInContainer').show();
	});

	//show and hide dropoff time
	$('#washDryDropOffContainer').hide();
	$('#dryCleanDropOffContainer').hide();	
	$('#washDrySelections').hide();
	$('#dryCleanSelections').hide();
	$('.schedule-form input').on('click',function () {
        if($('.schedule-form #washDryBox').is(':checked')) {
            $('#washDryDropOffContainer').show();
            $('#washDrySelections').show();
        }
        else{
            $('#washDryDropOffContainer').hide();
            $('#washDrySelections').hide();
        }
        if($('.schedule-form #dropOffBox').is(':checked')) {
            $('#dryCleanDropOffContainer').show();
            $('#dryCleanSelections').show();
        }
        else{
            $('#dryCleanDropOffContainer').hide();
            $('#dryCleanSelections').hide();
        }
        if($('.schedule-form #washDryBox').is(':checked') || $('.schedule-form #dropOffBox').is(':checked')){
        	$('#submit-btn-container').show();
        }else{
        	$('#submit-btn-container').hide();
        }
    });

	// date picker
    $("#datepicker,#pickupDate,#washDryDropoffDate,#dryCleanDropoffDate" ).datepicker();

	// total price of wash dry
	$("#large-size").change(function(){
		let total = '$ ' + (($("#large-size option:selected").val() * 8) )
		$("#smallSizeTotal").text(total).fadeIn();
	});
	$("#medium-size").change(function(){
		let total = '$ ' + (($("#medium-size option:selected").val() * 6) )
		$("#mediumSizeTotal").text(total).fadeIn();
	});
	$("#small-size").change(function(){
		let total = '$ ' + (($("#small-size option:selected").val() * 4) )
		$("#largeSizeTotal").text(total).fadeIn();
	});

	//add more clothing category button
	$('#add-category-btn').click(function(){   
		$('#additional-category').append('<div class="row"><div class="col-4 col-sm-4"><select class="custom-select custom-select-sm"id=dryWashCategory1 name=categories><option value=Jacket selected>Do not select<option value=Sweater>Sweater<option value=Coat>Coat<option value=Suit>Suit<option value=Dress>Dress<option value=Blanket>Blanket<option value=Pants>Pants<option value=Skirt>Skirt</select></div><div class="col-4 col-sm-4"><select class="custom-select custom-select-sm"id=dryWashNum1><option value=0>0<option value=1>1<option value=2>2<option value=3>3<option value=4>4<option value=5>5<option value=6>6<option value=7>7<option value=8>8<option value=9>9</select></div><div class="col-4 col-sm-4"><span id=dryWashTotal1>$ 0</span></div></div>');
	});
	
	// total price of dry clean
	const pricing = {
		Jacket:{
			price: 5
		},
		Sweater:{
			price: 6
		},
		Coat:{
			price: 5
		},
		Suit:{
			price: 9
		},
		Dress:{
			price: 9
		},
		Blanket:{
			price: 11
		},
		Pants:{
			price: 5
		},
		Skirt:{
			price: 6
		}				
	};
	$("#dryWashNum1,#dryWashCategory1").change(function(){
		let selectedItem = $("#dryWashCategory1 option:selected").text();
		let itemNum = $("#dryWashNum1 option:selected").text();
		for (let property in pricing){
		  if (pricing.hasOwnProperty(property)) {
		    if(selectedItem == property){
		    	$("#dryWashTotal1").text('$ ' + pricing[selectedItem].price * itemNum).fadeIn();
		    }
		  }
		}
	});

});