var slider_img = document.querySelector('.watch');
var images = ['a.png', 'b.png', 'c.png', 'd.png'];
var color = ["linear-gradient(106deg, #F4A764 -2.93%, #FFDEC2 72.14%)","linear-gradient(106deg, #ADB0B0 -2.93%, #E1E1E1 72.14%)","linear-gradient(106deg, #30A357 -2.93%, #75E39A 72.14%)","linear-gradient(106deg, #F24F4F -2.93%, #FFA895 72.14%)"];
var text =["Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch"," It is designed to keep a consistent movement despite the motions caused by the person's activities. "," For mechanical watches, various extra features called complications, such as moon-phase displays and the different types of tourbillon, are sometimes included.","Most watches that are used mainly for timekeeping have quartz movements. However, expensive collectible watches, valued more for their elaborate craftsmanship, aesthetic appeal"]
var pricechange =['$430.00','$750.25',"$225.00","$999.99"];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	slider_img.setAttribute('src', "images/"+images[i]);
    document.getElementById('body-one').style.backgroundImage = color[i];
	document.getElementById('content-about').innerHTML = text[i];
	document.getElementById('content-price').innerHTML = pricechange[i];
	
}
