$(document).ready(function($) {

	$('.text_phone').mask('+7 (999) 999-99-99');
	

	var catalogImgLotos = $('#catalogImgLotos'),
			catalogImgsLotos = $('#catalogImgsLotos'),
			catalogImgNorton = $('#catalogImgNorton'),
			catalogImgsNorton = $('#catalogImgsNorton'),
			popupImgLotos = $('#popupImgLotos'),
			popupImgsLotos = $('#popupImgsLotos'),
			popupImgNorton = $('#popupImgNorton'),
			popupImgsNorton = $('#popupImgsNorton');

	catalogImgLotos.slick({
		arrows: false,
		fade: true,
		asNavFor: catalogImgsLotos
	});
	catalogImgNorton.slick({
		arrows: false,
		fade: true,
		asNavFor: catalogImgsNorton
	});

	
	

	catalogImgsLotos.slick({
		arrows: false,
		slidesToShow: 6,
		asNavFor: catalogImgLotos,
		focusOnSelect: true
	});
	catalogImgsNorton.slick({
		arrows: false,
		slidesToShow: 6,
		asNavFor: catalogImgNorton,
		focusOnSelect: true
	});

	
	
	


	$('a[data-src = \\#popup-lotos]').click(function(event) {
		popupImgLotos.slick({
			arrows: false,
			fade: true,
			asNavFor: popupImgsLotos
		});
		popupImgsLotos.slick({
			arrows: false,
			slidesToShow: 6,
			asNavFor: popupImgLotos,
			focusOnSelect: true
		});
		popupImgLotos.slick('init');
		popupImgsLotos.slick('init');
	});
	$('a[data-src = \\#popup-norton]').click(function(event) {
		popupImgNorton.slick({
			arrows: false,
			fade: true,
			asNavFor: popupImgsNorton
		});
		popupImgsNorton.slick({
			arrows: false,
			slidesToShow: 6,
			asNavFor: popupImgNorton,
			focusOnSelect: true
		});
		popupImgNorton.slick('init');
		popupImgsNorton.slick('init');
	});

	$('.popup form').submit(function() {
		$.ajax({
		    type: "POST",
		    url: "/order.php",
		    data: $(this).serialize()
		}).done(function() {
			parent.jQuery.fancybox.getInstance().close();
			$.fancybox.open({src  : '#popup-thanks',type : 'inline'});
		});
		return false;
	});
	$('.main form, .footer form').submit(function() {
		$.ajax({
		    type: "POST",
		    url: "/order.php",
		    data: $(this).serialize()
		}).done(function() {
			$.fancybox.open({src  : '#popup-thanks',type : 'inline'});
		});
		return false;
	});
});
