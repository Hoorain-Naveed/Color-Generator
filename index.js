let content=document.getElementById("content")
content.innerText="COLOR GENERATOR"
content.style.fontSize="70px";
setInterval(function(){
    // let random1=Math.round(Math.random()*1000)
    let random2=Math.round(Math.random()*1000)
    // content.style.backgroundColor="#"+random1;
    content.style.color="#"+random2;
    console.log(random1,random2)
},500)
let container=document.getElementById("container")
setInterval(function(){
    let random1=Math.round(Math.random()*1000)
    // let random2=Math.round(Math.random()*1000)
    // content.style.backgroundColor="#"+random1;
    container.style.backgroundColor="#"+random1;

},500)
