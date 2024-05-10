var slider_img=document.querySelector('.slider-img');
var images=['15th Wireframe.png', '16th Wireframe.png', '17th Wireframe.png', '18th Wireframe.png', '19th Wireframe.png', '20th Wireframe.png', '21th Wireframe.png', '22th Wireframe.png', '23th Wireframe.png', '24th Wireframe.png', '25th Wireframe.png'];
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