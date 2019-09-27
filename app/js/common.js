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

	$(document).ready(function(){
		  $(".notepad__slider").owlCarousel({
		  	items: 1,
		  	margin: 0,
		  	loop: true,
		  	dots: false,
		  	// autoplay: true,
		  	autoplayTimeout: 1500,
		  	smartSpeed: 800,
		  	fluidSpeed: 800,
		  	autoplaySpeed: 800,
		  	dragEndSpeed: 800
		  });
		});

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