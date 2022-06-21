var image1 = document.getElementById('arrow1');
var eventt = document.getElementById('event1');
eventt.addEventListener("mouseover", () =>{
    image1.src="icon-arrow-up.svg";
})
eventt.addEventListener("mouseout", ()=>{
    image1.src="icon-arrow-down.svg";
})

var image2 = document.getElementById('arrow2');
var eventt2 = document.getElementById('event2');
eventt2.addEventListener("mouseover", () =>{
    image2.src="icon-arrow-up.svg";
})
eventt2.addEventListener("mouseout", ()=>{
    image2.src="icon-arrow-down.svg";
})