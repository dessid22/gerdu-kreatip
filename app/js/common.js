$( document ).ready(function(){

	//Проверка Magnific PopUp
	$(".open-popup-link").magnificPopup({
	  type:'inline'
	});

	//Проверка Animate
	$("h1").animated("fadeInRight", "fadeInLeft");

	// Проверка Waypoints
	$("h2").waypoint(function() {
		$("h2").css({'transform': 'scale(2)', 'text-align':'center'});
	});

	// Настройки .slider
	$(".slider").owlCarousel({
		items: 1,
		margin: 10,
		nav: true,
		navText: "",
		loop: true,
		smartSpeed: 700,
		fluidSpeed: 700,
		navSpeed: 700,
		dotsSpeed: 700,
		dragEndSpeed: 700
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
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