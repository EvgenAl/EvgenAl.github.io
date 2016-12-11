$(function(){


	$(".dialog").dialog({
		width:450,
		height:400,
		autoOpen: false,
		modal:true,
		show: {
			effect: "blind",
			duration: 500
		},
		hide: {
			effect: "drop",
			duration: 1000
		},
		buttons:{
			'Close':function(){
				$(this).dialog('close');
			}
		}
	});

	$(".modal_link").on( "click", function() {
		$( ".dialog" ).dialog( "open" );
	});

});