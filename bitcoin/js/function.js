$(function(){
	$("#form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail_form.php", 
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});