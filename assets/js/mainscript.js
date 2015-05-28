var nameHidden = true;

//Header bar position to be hidden
var barLimitPos = 160;


//Check scroll and nav bar position event
$(window).scroll( checkNavPos );


function checkNavPos () {
	//Get current position of scroll
	var pos = window.pageYOffset;

	//Update header pos as we scroll
	if(pos <= barLimitPos && pos >= 0){
		$("header").css({
			top: -pos
		});
	}
	//Hide bar if not within range
	else if(pos > barLimitPos) {
	$("header").css({
			top: -barLimitPos
		});
	}

	//Check to see if mini nav name should be shown
	if( pos >= 0) checkNamePos();
}

function checkNamePos () {
	var $hiddenName = $("header nav p");

	if ($("#name").offset().top > 4 && nameHidden){

		$hiddenName.addClass("name-anim");
		nameHidden = false;
	}
	else if ($("#name").offset().top < 4 && !nameHidden){
	
		$hiddenName.removeClass("name-anim");
		nameHidden = true;
	}	
}