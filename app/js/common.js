$(document).ready(function(){

	// Анимация горизонтального Skills Bar
	// при скроллинге до .skills__title
	$(".skills__title").waypoint(function() {
		$('.skills__item').each(function(){
			$(this).find('.skills__progress').animate({
				width:$(this).attr('data-percent')
			},3000);
		});
	}, {
		offset:"40%"
	}
	);

	// Подргузка Яндекс Карт
	// при скроллинге до .s-portfolio
	// будет срабатывать только 1 раз
	var count = 0;
	$(".s-portfolio").waypoint(function() {
	  if (count > 0) return;
	  $('.map-ya').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae4627c0b8e560c61086cf76033a0bca1e5e655d44babb4f668a456c6942e23b5&amp;width=100%25&amp;height=600&amp;lang=ru_RU&amp;scroll=true"></script>');
	  count++;
	}, {offset:"200%"});

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
		if ($('.counter__number').is(':empty')) {
		var time = 2;
		$('.counter__number').each(function(){
		  var i = 1,
		      num = $(this).data('num'),
		      step = 1000 * time / num,
		      that = $(this),
		      int = setInterval(function(){
		        if (i <= num) {
		          that.html(i);
		        }
		        else {
		          clearInterval(int);
		        }
		        i++;
		      },step);
		});
		}
	}, {
		offset:"50%"
	}
	);

	// magnificPopup
	$('.popup-link').magnificPopup({
		type:'inline',
		mainClass: 'mfp-3d-unfold'
	});

	// Верхняя форма или нижняя
	$(".popup-link").click(function() {
		// Получаем данные из атрибута data-what-form при помощи метода .data() 
		// и записываем их в value у input[name=form-name] при помощи метода .val()
		// data-* это служебное слово, обращение к атрибуту идет через what-form
		$("#callback-form input[name=form-name]").val($(this).data("what-form"));
	});

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() { // После отправки данных выполнить ф-ии:
			// Выводим сообщение об успешной отправке
			$(".callback-form__message").addClass("callback-form__message_success");
			setTimeout(function() {
			// Удаляем сообщение об успешной отправке через 2000 мс
			$(".callback-form__message").removeClass("callback-form__message_success");
			// Сбрасываем значения полей через 2000 мс
			th.trigger("reset");
			// Закрываем magnificPopup через 2000 мс
			var magnificPopup = $.magnificPopup.instance;
			magnificPopup.close();
			}, 2000);
		});
		return false;
	});

	// Анимация Наша команда
	// При скроллинге до .s-team выполнить:
	$(".s-team").waypoint(function() {
		// .each - цикл по выбранным элементам
		// index - порядковый номер элемента цикла, начиная с 0
		$(".team-box__item").each(function(index) {
			// this ссылается на ТЕКУЩИЙ элемент цикла
			var it = $(this);
			setInterval(function() {
				// добавляем ТЕКУЩЕМУ элементу новый класс с интервалом
				it.addClass("team-box__item_ok");
			}, 300*index);
		});
	}, {
		offset:"40%"
	}
	);

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