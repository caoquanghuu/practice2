
var slider_img = document.querySelector('.content2img');
var images = ['a.png', 'b.png', 'c.png', 'd.png'];
var color1 = ["linear-gradient(to right,orange, white)","linear-gradient(to right,gray, white)","linear-gradient(to right,green, white)","linear-gradient(to right,pink, white)"];
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
    document.getElementById('body1').style.backgroundImage = color1[i];
}