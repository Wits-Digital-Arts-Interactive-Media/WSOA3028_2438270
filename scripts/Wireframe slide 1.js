var slider_img=document.querySelector('.slider-img');
var images=['1st Wireframe.png', '2nd Wireframe.png', '3rd Wireframe.png', '4th Wireframe .png', '5th Wireframe.png', '6th Wireframe.png', '7th Wireframe.png', '8th Wireframe.png', '9th Wireframe.png', '10th Wireframe.png', '11th Wireframe.png', '12th Wireframe.png'];
var i=0;

function prev(){
    if(i<=0) i=images.length;
    i--;
    return setImg();
}
function next(){
    if(i>=images.length-1)i=-1;
    i++;
    return setImg();
}
function setImg(){
    return slider_img.setAttribute('src','../Images/'+ images[i]);
}