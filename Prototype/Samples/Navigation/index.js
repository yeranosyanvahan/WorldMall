//Recursive function for adding elements
function XMLMenuGeneration(XML,divattr={}){
	var div=jQuery('<div/>', divattr)
	$(XML).children().each(function(){
		var Attr=$(this).attr()
		var Tagname=$(this).tagName()
		Attr['id']=Tagname.replace(/ /g,"_")
		jQuery(`<${Attr['type']}/>`, Attr).appendTo(div);

	});
	return div
}

// Hovering Motion of XML data
function XMLSetHover(XML, classname='navigation') {
	if($(XML).children().length==0)
	{
		return
	}
	// Adding XML Elements
	$(XML).children().each(function(tag){
		let child=$(XML).children()[tag]
		if (child.children.length != 0) {
			let test_id=child.tagName.replace(/ /g,"_")

			$(`nav div ${$(child).attr('type')}#`+test_id).hover(function(){
				let classes=classname.split(' ')		
				if(! $('nav div#'+test_id).length){
					$('nav div.'+classes[classes.length-1]).slideUp("normal", function() { $(this).remove(); } );
					XMLMenuGeneration($(XML).children()[tag],{id:test_id,class:classname}).hide().appendTo('nav').slideDown("show");
					XMLSetHover($(XML).children()[tag],classname+" "+test_id)
				}
			});
		}
	});
}

// The navigation bar generation
function XMLCategoryGeneration(Navigation) {

	XMLMenuGeneration(Navigation).appendTo("nav");

	// Removeing Navigation Elements when not in focus
	$("body nav").hover(function(){},function(){
		$(this).children().slice(1).slideUp("normal", function() { $(this).remove(); } );
	});

	XMLSetHover(Navigation)

};		