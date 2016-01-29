$(window).on('load', function () {
	setTimeout( function(){
		$('#preload').fadeOut(600);
		$('body').removeClass('overflow');
	}, 10);
}); 

$(document).ready( function(){

	$('a[href="#"]').click( function(e) {
		e.preventDefault();
	});

	//modals

	$('.cls-btn, .modal-backdrop').click( function () {
		$('.modal-backdrop').fadeOut(600);
		$('.modal').removeClass('active');
	});

	$('.profile-link').click( function() {
		$('.modal-backdrop').fadeIn(700);
		$('.enter-modal').addClass('active');
	});

	$('#register-btn').click( function(e) {
		e.preventDefault();
		$('.enter-modal').removeClass('active');
		setTimeout(function () {
			$('.register-modal').addClass('active');
		}, 700);
	});

	$('#booking-btn').click( function (e) {
		e.preventDefault();
		$('.modal-backdrop').fadeIn(700);
		$('.booking-modal').addClass('active');
	});

	// Slide page
	$('.rooms .side-nav a').click( function() {
		$('.rooms .side-nav a').parent().removeClass('active');
		$(this).parent().addClass('active');
	});

	$('.rooms .side-nav a').click( function(){
		$('.slide-page').removeClass('active');
	});


	//description page - sliding
	$('.description-link a').click( function () {
		$('.slide-page.description').addClass('active');
	});


	//schedule page - sliding
	$('.schedule-link a').click( function () {
		$('.slide-page.schedule').addClass('active');
	});


	//rent page - sliding
	$('.rent-link a').click( function () {
		$('.slide-page.rent').addClass('active');
	});




	// $('.modal .cls-btn, .modal .declain').click( function () { 
	// 	$('.modal').fadeOut(600);
	// });

	// expand password section

	$('.new-password').click( function () {
		$(this).hide(340);
		setTimeout( function () {
			$('.password-form').fadeIn(500);
		}, 330);
	});
});


