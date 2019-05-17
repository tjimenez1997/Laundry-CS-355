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
	$('#add-more-btn').click(function(){
		$('#additional-day').append('<div class="form-group"><select class="custom-select custom-select-sm" id="dayOfWeek" name="dayOfWeek"><option value=""></option><option value="monday">Monday</option><option value="tuesday">Tuesday</option><option value="wednesday">Wednesday</option> <option value="thursday">Thursday</option> <option value="friday">Friday</option> <option value="saturday">Saturday</option> <option value="sunday">Sunday</option></select></div>');
		$('#additional-start-time').append('<div class="form-group"><select class="custom-select custom-select-sm" id="startTime" name="startTime"><option value=""></option><option value="7:00">7:00 AM</option> <option value="7:30">7:30 AM</option> <option value="8:00">8:00 AM</option> <option value="8:30">8:30 AM</option> <option value="9:00">9:00 AM</option> <option value="9:30">9:30 AM</option> <option value="10:00">10:00 AM</option> <option value="11:00">11:00 AM</option> <option value="11:30">11:30 AM</option> <option value="12:00">12:00 PM</option> <option value="12:30">12:30 PM</option> <option value="13:00">1:00 PM</option> <option value="13:30">1:30 PM</option> <option value="14:00">2:00 PM</option> <option value="14:30">2:30 PM</option> <option value="15:00">3:00 PM</option> <option value="15:30">3:30 PM</option> <option value="16:00">4:00 PM</option> <option value="16:30">4:30 PM</option> <option value="17:00">5:00 PM</option> <option value="17:30">5:30 PM</option> <option value="18:00">6:00 PM</option> <option value="18:30">6:30 PM</option> <option value="19:00">7:00 PM</option> <option value="19:30">7:30 PM</option> <option value="20:00">8:00 PM</option> <option value="20:30">8:30 PM</option> <option value="21:00">9:00 PM</option> <option value="21:30">9:30 PM</option> <option value="22:00">10:00 PM</option></select></div>');
		$('#additional-end-time').append('<div class="form-group"><select class="custom-select custom-select-sm" id="endTime" name="endTime"><option value=""></option><option value="7:00">7:00 AM</option> <option value="7:30">7:30 AM</option> <option value="8:00">8:00 AM</option> <option value="8:30">8:30 AM</option> <option value="9:00">9:00 AM</option> <option value="9:30">9:30 AM</option> <option value="10:00">10:00 AM</option> <option value="11:00">11:00 AM</option> <option value="11:30">11:30 AM</option> <option value="12:00">12:00 PM</option> <option value="12:30">12:30 PM</option> <option value="13:00">1:00 PM</option> <option value="13:30">1:30 PM</option> <option value="14:00">2:00 PM</option> <option value="14:30">2:30 PM</option> <option value="15:00">3:00 PM</option> <option value="15:30">3:30 PM</option> <option value="16:00">4:00 PM</option> <option value="16:30">4:30 PM</option> <option value="17:00">5:00 PM</option> <option value="17:30">5:30 PM</option> <option value="18:00">6:00 PM</option> <option value="18:30">6:30 PM</option> <option value="19:00">7:00 PM</option> <option value="19:30">7:30 PM</option> <option value="20:00">8:00 PM</option> <option value="20:30">8:30 PM</option> <option value="21:00">9:00 PM</option> <option value="21:30">9:30 PM</option> <option value="22:00">10:00 PM</option></select></div>');
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

	//show and hide section on schedule page
	$('#washdry-service').hide();
	$('#service-next-btn').click(function(){
		$('#schedule-container').hide();
		$('#washdry-service').show();
	});
	$('#back-to-schedule-time').click(function(){
		$('#washdry-service').hide();
		$('#schedule-container').show();
	});	

	//add more clothing category button
	$('#add-category-btn').click(function(){   
		$('#additional-category').append(' <div class ="col-sm-4 col-4"> <select class="custom-select custom-select-sm" id="cloth" name="cloth"> <option selected value="jacket" for ="num-item1">Jacket</option> <option selected value="sweater"for ="num-item2">Sweater</option> </select> </div> <div class ="col-sm-4 col-4"> <select class="form-control" id="num-item1"> <option value="0">0</option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> </select> </div> <div class ="col-sm-4 col-4"> <p id="outputitem1"></p> </div>');
	});

	//show and hide dropoff time
	$('#washDryDropOffContainer').hide();
	$('#dryCleanDropOffContainer').hide();	
	$('.schedule-form input').on('click',function () {
        if($('.schedule-form #washDryBox').is(':checked')) {
            $('#washDryDropOffContainer').show();
        }
        else{
            $('#washDryDropOffContainer').hide();
        }
        if($('.schedule-form #dropOffBox').is(':checked')) {
            $('#dryCleanDropOffContainer').show();
        }
        else{
            $('#dryCleanDropOffContainer').hide();
        }
    });

	// date picker
    $("#datepicker,#pickupDate,#washDryDropoffDate,#dryCleanDropoffDate" ).datepicker();



	// total price of wash dry
	$("#large-size").change(function(){
		UpdateResult1();
	});
	$("#med-size").change(function(){
		UpdateResult2();
	});
	$("#small-size").change(function(){
		UpdateResult3();
	});

	function UpdateResult1(){
		let result = '$ ' + (($("#large-size option:selected").val() * 7) )
		$("#output1").text(result).fadeIn();
	}
	function UpdateResult2(){
		let result = '$ ' + (($("#med-size option:selected").val() * 6) )
		$("#output2").text(result).fadeIn();
	}
	function UpdateResult3(){
		let result = '$ ' + (($("#small-size option:selected").val() * 4) )
		$("#output3").text(result).fadeIn();
	}
	// total price of dry clean
	$("#num-item1").change(function(){
		UpdateitemResult();
	});
	let pricing = {
		Jacket:{
			price: 5
		},
		Sweater:{
			price: 6
		}
	}

	function UpdateitemResult(){
		let selectedItem = $("#cloth option:selected").text();
		for (let property in pricing){
		  if (pricing.hasOwnProperty(property)) {
		    if(selectedItem == property){
		    	console.log(pricing[selectedItem].price);
		    }
		  }
		}
	}

	// star-rating
	$(".id-1").starRating({
		initialRating: 0,
		strokeColor: '#894A00',
		strokeWidth: 10,
		starSize: 25
	});
	$(".id-2").starRating({
		initialRating: 0,
		strokeColor: '#894A00',
		strokeWidth: 10,
		starSize: 25
	});
	$(".id-3").starRating({
		initialRating: 0,
		strokeColor: '#894A00',
		strokeWidth: 10,
		starSize: 25
	});
	$(".id-4").starRating({
		initialRating: 0,
		strokeColor: '#894A00',
		strokeWidth: 10,
		starSize: 25
	});

	$(".my-rating-8").starRating({
		readOnly: true,
		strokeWidth: 10,
		starSize: 25
	});
	
});