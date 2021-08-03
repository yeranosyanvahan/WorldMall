function counter(product){
var space = jQuery(`<${product.tagName()}/>`, product.attr())
if('href' in  product.attr())
	{
	a=jQuery('<a/>',{'href':$(product).attr('href')});
	space.appendTo(a)
	space=a
	}
return space
}

function shoes(shoe){
	Return=jQuery(`<product />` )
	let description, picture, price;
	[description, picture, price]=shoe.children();
	description=jQuery(`<div />`,Object.assign($(description).attr(),{text:$(description).text()}));
	picture=jQuery(`<img />`,{src:$(picture).attr('src'), style: 'opacity:var(--product-opacity); width:100%'});
	price=jQuery(`<price />`,{text:$(price).text()+'$'});
	Return.append([
	description, 
	jQuery(`<picture />`, {class:'centeredflex blackpicture'}).append(picture), 
	price])

	return jQuery(`<div />` ,{class:'grid-item'}).append(Return)
}