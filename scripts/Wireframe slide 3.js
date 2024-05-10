var slider_img=document.querySelector('.slider-img');
var images=['26th Wireframe.png', '27th Wireframe.png', '28th Wireframe.png', '29th Wireframe.png', '30th Wireframe.png', '31th Wireframe.png', '32th Wireframe.png'];
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