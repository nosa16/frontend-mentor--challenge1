var image1 = document.getElementById("arrow1");
var eventt = document.getElementById("event1");
eventt.addEventListener("mouseover", () => {
  image1.src = "icon-arrow-up.svg";
  eventt.style.color = "black"
  eventt.style.fontWeight = "bolder";
});
eventt.addEventListener("mouseout", () => {
  image1.src = "icon-arrow-down.svg";
  eventt.style.fontWeight = "700";
  eventt.style.color = "hsl(0,0%,41%)";
});

var image2 = document.getElementById("arrow2");
var eventt2 = document.getElementById("event2");
eventt2.addEventListener("mouseover", () => {
  image2.src = "icon-arrow-up.svg";
  eventt2.style.fontWeight = "bolder";
  eventt2.style.color = "black";
});
eventt2.addEventListener("mouseout", () => {
  image2.src = "icon-arrow-down.svg";
  eventt2.style.fontWeight = "700";
  eventt2.style.color = "hsl(0,0%, 41%)";  
});

image1.addEventListener("mouseover", () =>{
  eventt.style.fontWeight = "bolder";
  eventt.style.color = "black";
});                                   //making the text besides the arrows bolder you hover around the arrows
image1.addEventListener("mouseout", () =>{
  eventt.style.fontWeight = "700";
  eventt.style.color = "hsl(0,0%,41%)";
});

image2.addEventListener("mouseover", () =>{
  eventt2.style.fontWeight ="bolder";
  eventt2.style.color = "black";
});
image2.addEventListener("mouseout", () =>{
  eventt2.style.fontWeight ="700";
  eventt2.style.color = "hsl(0,0%, 41%)";
});

var navigation = document.querySelector('.navbar');
var hamburger_toggle = document.querySelector('.hamburger-toggle');

hamburger_toggle.addEventListener("click", () =>{
  const visibility = navigation.getAttribute("data-visible");
  if (visibility === "false"){
    navigation.setAttribute("data-visible", true);
    hamburger_toggle.setAttribute("aria-expanded", true);
  }
  else{
    navigation.setAttribute("data-visible", false);
    hamburger_toggle.setAttribute("aria-expanded", false);
  }
});
