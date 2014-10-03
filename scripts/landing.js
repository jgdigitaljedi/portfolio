	$("#social-link").on('click', function(e) {
		e.preventDefault();
		$(".social-menu").slideToggle("slow");
		$(".social-menu").toggleClass("social-menu-off");
	});
