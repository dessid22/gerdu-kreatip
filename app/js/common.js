$(document).ready(function(){

	// При скроллинге до .skills__title
	$(".skills__title").waypoint(function() {
		// Анимация горизонтального Skills Bar
		$('.skills__item').each(function(){
			$(this).find('.skills__progress').animate({
				width:$(this).attr('data-percent')
			},3000);
		});
	}, {
		offset:"40%"
	}
	);

	// Настройки слайдера notepad
	$(document).ready(function(){
		  $(".notepad__slider").owlCarousel({
		  	items: 1,
		  	margin: 0,
		  	loop: true,
		  	dots: false,
		  	autoplay: true,
		  	autoplayTimeout: 1500,
		  	smartSpeed: 800,
		  	fluidSpeed: 800,
		  	autoplaySpeed: 800,
		  	dragEndSpeed: 800
		  });
		});

	// Настройки слайдера clients
	$(document).ready(function(){
		  $(".clients-slider").owlCarousel({
		  	items: 1,
		  	margin: 0,
		  	loop: true,
		  	dots: false,
		  	// autoplay: true,
		  	// autoplayTimeout: 1500,
		  	smartSpeed: 800,
		  	fluidSpeed: 800,
		  	autoplaySpeed: 800,
		  	dragEndSpeed: 800,
		  	nav: true
		  });
		});

	
	// Анимация цифр
	// При скроллинге до .s-numbers
	$(".s-numbers").waypoint(function() {
		// if ($('.counter__number').is(':empty')) {
		// var time = 2;
		// $('.counter__number').each(function(){
		//   var i = 1,
		//       num = $(this).data('num'),
		//       step = 1000 * time / num,
		//       that = $(this),
		//       int = setInterval(function(){
		//         if (i <= num) {
		//           that.html(i);
		//         }
		//         else {
		//           clearInterval(int);
		//         }
		//         i++;
		//       },step);
		// });
		// }
	}, {
		offset:"50%"
	}
	);

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
});

$(window).on('load', function() {

});