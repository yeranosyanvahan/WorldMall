//Recursive function for adding elements
function MenuGeneration(json,attr={}){
	var div=jQuery('<div/>', attr)
	for (const each in json) {

		jQuery('<text/>', {text:each, id:each.replace(/ /g,"_")}).appendTo(div);
	}
	return div
}

// Hovering Motion of json data
function SetHover(json, classname='navigation') {
	if(json==null)
	{
		return
	}
	
	// Adding json Elements
	for (const test in json) {

		if (json[test] == null) {
			continue
		}

		let test_id=test.replace(/ /g,"_");
		$('nav div text#'+test_id).hover(function(){

			let classes=classname.split(' ')
			
			if(! $('nav div#'+test_id).length){

				$('nav div.'+classes[classes.length-1]).slideUp("normal", function() { $(this).remove(); } );
				MenuGeneration(json[test],{id:test_id,class:classname}).hide().appendTo('nav').slideDown("show");
				SetHover(json[test],classname+" "+test_id)
			}
		});
	}
}

// Start of Jquery
function CategoryGeneration(Navigation) {

	MenuGeneration(Navigation).appendTo("nav");


	// Removeing Navigation Elements when not in focus
	$("body nav").hover(function(){},function(){
		$(this).children().slice(1).slideUp("normal", function() { $(this).remove(); } );
	});

	SetHover(Navigation)

};		
