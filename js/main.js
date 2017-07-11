$(document).ready(function () {
	
	for (let i = 0 ; i < 240 ; i++){
// 		Create the div inside the container.
		$( ".container" ).append('<div class="pixel"></div>');
		var divW = $( ".container div").width();
		$(".container div").height(divW);
	}
	
// 	Creates the Push and Draw effect.
	var isDown = false;
	$(".pixel").mousedown(function( event ) {
		isDown = true;
	});
	$(".pixel").mouseup(function( event ) {
		isDown = false;
	});
	
// 	The function that paint differen shades of gray.
	$(".pixel").hover(function() {
		if(isDown) {
			var rgb = $(this).css("background-color").split(",");
			var c = Number(rgb[1]);
	
			if (c < 255) {
				c += 20;
				$(this).css("background-color", "rgb(" +  c + "," + c + "," + c + ")");
			}else {
				$(this).css("background-color", "rgb(" + c + "," + c + "," + c + ")");
			}
		}
	});
	
// 	The Clear botton!
	$("a").click(function( event ) {
		event.preventDefault();
		$(".pixel").css("backgroundColor", "black");
	});
});




console.log("DONE!");