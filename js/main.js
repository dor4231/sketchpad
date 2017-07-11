$(document).ready(function () {
	
	for (let i = 0 ; i < 320 ; i++){
		$( ".container" ).append( '<div class="pixel"></div>' );
		var divW = $( ".container div").width();
		console.log(divW);
		$(".container div").height(divW);
	}
	
	var isDown = false;
	
	$(".pixel").mousedown(function( event ) {
		isDown = true;
	});
	$(".pixel").mouseup(function( event ) {
		isDown = false;
	});
	
	
	$(".pixel").hover(function() {
		if(isDown) {
			var rgb = $(this).css("background-color").split(",");
			console.log(rgb);
			console.log("Index 1: " + rgb[1]);
			var c = Number(rgb[1]);
	
			if (c < 255) {
				console.log(rgb[1]);
				c += 25;
				$(this).css("background-color", "rgb(" +  c + "," + c + "," + c + ")");
				console.log("mouse down!");
			}else {
				$(this).css("background-color", "rgb(" + c + "," + c + "," + c + ")");
			}
		}
	});
});




console.log("DONE!");