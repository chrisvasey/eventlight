$(document).ready(function(){
	$(".new-btn").click(function(){
		$(this).addClass('select');
	});
});

$(document).ready(function(){
	$(".cross").click(function(){
		$(".new-btn").removeClass('select');
	});
});

// , .today-btn, .soon-btn, .past-btn