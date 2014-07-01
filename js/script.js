$(document).ready(function(){
	$(".new-btn").click(function(){
		$(".new-btn").toggleClass('select');
		$("#close").click(function(){
			$(".new-btn").toggleClass('select');
		});
	});
});

// , .today-btn, .soon-btn, .past-btn