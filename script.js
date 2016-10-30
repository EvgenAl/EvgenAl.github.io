
$(document).ready(function() {
	$(".form_send").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('.modal, .overlay_all').fadeIn(200);
			$('#btn, .overlay_all').on('click',function(){
			$('.modal, .overlay_all').fadeOut(200);
			}
			);
			$(".form_send").trigger("reset");
		});
		return false;
	});
	
});