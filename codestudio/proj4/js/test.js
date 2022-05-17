const hideHeads = function () {
    const heads = document.querySelectorAll('.head');
    heads.forEach(function(head) {
        head.style.display = 'none';
    })
};

const hideBods = function () {
    const bods = document.querySelectorAll('.bod');
    bods.forEach(function(bod) {
        bod.style.display = 'none';
    })
};

const hideLegs = function () {
    const legs = document.querySelectorAll('.legs');
    legs.forEach(function(legs) {
        legs.style.display = 'none';
    })
};

const hideSkelly = function () {
    const skelly = document.getElementById('manbody');
        skelly.style.opacity = '0%';
};

const showSkelly = function () {
    const skelly = document.getElementById('manbody');
        skelly.style.display = 'block';
};

//document.addEventListener("keydown", function(){
   // if (event.code === "Backspace")
    //{
       // hideHeads();
       // hideBods();
       // hideLegs();
       // showSkelly();
  //  }
//});

//HEAD1 R nashead
document.addEventListener("keydown", function(){
    if (event.code === "KeyR")
{
var y = document.getElementById("nashead");
hideHeads();
if (y.style.display === "block")
{
document.getElementById("nashead").style.display = "none";
}
else
{
document.getElementById("nashead").style.display = "block";
}
}
})  

//HEAD2 UP pointyhead
document.addEventListener("keydown", function(){
    if (event.code === "KeyU")
{
var y = document.getElementById("head2");
hideHeads();
if (y.style.display === "block")
{
document.getElementById("head2").style.display = "none";
}
else
{
document.getElementById("head2").style.display = "block";
}
}
})  
document.addEventListener("keydown", function(){
    if (event.code === "KeyP")
{
var y = document.getElementById("head2");
hideHeads();
if (y.style.display === "block")
{
document.getElementById("head2").style.display = "none";
}
else
{
document.getElementById("head2").style.display = "block";
}
}
})  

//HEAD3 E besthead
document.addEventListener("keydown", function(){
    if (event.code === "KeyE")
{
var y = document.getElementById("head3");
hideHeads();
if (y.style.display === "block")
{
document.getElementById("head3").style.display = "none";
}
else
{
document.getElementById("head3").style.display = "block";
}
}
})

//HEAD4 YT horsehead 
document.addEventListener("keydown", function(){
    if (event.code === "KeyY")
{
var y = document.getElementById("horsehead");
hideHeads();
if (y.style.display === "block")
{
document.getElementById("horsehead").style.display = "none";
}
else
{
document.getElementById("horsehead").style.display = "block";
}
}
})  
document.addEventListener("keydown", function(){
    if (event.code === "KeyT")
{
var y = document.getElementById("horsehead");
hideHeads();
if (y.style.display === "block")
{
document.getElementById("horsehead").style.display = "none";
}
else
{
document.getElementById("horsehead").style.display = "block";
}
}
})  

//HEAD5 OW
document.addEventListener("keydown", function(){
    if (event.code === "KeyO")
{
var y = document.getElementById("head5");
hideHeads();
if (y.style.display === "block")
{
document.getElementById("head5").style.display = "none";
}
else
{
document.getElementById("head5").style.display = "block";
}
}
})  
document.addEventListener("keydown", function(){
    if (event.code === "KeyW")
{
var y = document.getElementById("head5");
hideHeads();
if (y.style.display === "block")
{
document.getElementById("head5").style.display = "none";
}
else
{
document.getElementById("head5").style.display = "block";
}
}
})  

//HEAD6 IQ
document.addEventListener("keydown", function(){
    if (event.code === "KeyI")
{
var y = document.getElementById("head6");
hideHeads();
if (y.style.display === "block")
{
document.getElementById("head6").style.display = "none";
}
else
{
document.getElementById("head6").style.display = "block";
}
}
})  
document.addEventListener("keydown", function(){
    if (event.code === "KeyQ")
{
var y = document.getElementById("head6");
hideHeads();
if (y.style.display === "block")
{
document.getElementById("head6").style.display = "none";
}
else
{
document.getElementById("head6").style.display = "block";
}
}
})  

//SHIRT1 A lilnasx
document.addEventListener("keydown", function(){
    if (event.code === "KeyA")
{
var y = document.getElementById("nasbod");
hideBods();
hideSkelly();
if (y.style.display === "block")
{
document.getElementById("nasbod").style.display = "none";
}
else
{
document.getElementById("nasbod").style.display = "block";
}
}

})  

//SHIRT2 GH b&w
document.addEventListener("keydown", function(){
    if (event.code === "KeyG")
{
var y = document.getElementById("shirt2");
hideBods();
hideSkelly();
if (y.style.display === "block")
{
document.getElementById("shirt2").style.display = "none";
}
else
{
document.getElementById("shirt2").style.display = "block";
}
}
})  
document.addEventListener("keydown", function(){
    if (event.code === "KeyH")
{
var y = document.getElementById("shirt2");
hideBods();
hideSkelly();
if (y.style.display === "block")
{
document.getElementById("shirt2").style.display = "none";
}
else
{
document.getElementById("shirt2").style.display = "block";
}
}
})  

//SHIRT3 SJ w gun
document.addEventListener("keydown", function(){
    if (event.code === "KeyS")
{
var y = document.getElementById("shirt3");
hideBods();
hideSkelly();
if (y.style.display === "block")
{
document.getElementById("shirt3").style.display = "none";
}
else
{
document.getElementById("shirt3").style.display = "block";
}
}
})  
document.addEventListener("keydown", function(){
    if (event.code === "KeyJ")
{
var y = document.getElementById("shirt3");
hideBods();
hideSkelly();
if (y.style.display === "block")
{
document.getElementById("shirt3").style.display = "none";
}
else
{
document.getElementById("shirt3").style.display = "block";
}
}
}) 

//SHIRT4 LK 
document.addEventListener("keydown", function(){
    if (event.code === "KeyL")
{
var y = document.getElementById("shirt4");
hideBods();
hideSkelly();
if (y.style.display === "block")
{
document.getElementById("shirt4").style.display = "none";
}
else
{
document.getElementById("shirt4").style.display = "block";
}
}
})  
document.addEventListener("keydown", function(){
    if (event.code === "KeyK")
{
var y = document.getElementById("shirt4");
hideBods();
hideSkelly();
if (y.style.display === "block")
{
document.getElementById("shirt4").style.display = "none";
}
else
{
document.getElementById("shirt4").style.display = "block";
}
}
})  

//SHIRT5 DF
document.addEventListener("keydown", function(){
    if (event.code === "KeyF")
{
var y = document.getElementById("shirt5");
hideBods();
hideSkelly();
if (y.style.display === "block")
{
document.getElementById("shirt5").style.display = "none";
}
else
{
document.getElementById("shirt5").style.display = "block";
}
}
})  
document.addEventListener("keydown", function(){
    if (event.code === "KeyD")
{
var y = document.getElementById("shirt5");
hideBods();
hideSkelly();
if (y.style.display === "block")
{
document.getElementById("shirt5").style.display = "none";
}
else
{
document.getElementById("shirt5").style.display = "block";
}
}
})  

//PANTS1 N bowlegs
document.addEventListener("keydown", function(){
    if (event.code === "KeyN")
{
var y = document.getElementById("pants1");
hideLegs();
if (y.style.display === "block")
{
document.getElementById("pants1").style.display = "none";
}
else
{
document.getElementById("pants1").style.display = "block";
}
}
})  

//PANTS2 B tinylegs
document.addEventListener("keydown", function(){
    if (event.code === "KeyB")
{
var y = document.getElementById("pants2");
hideLegs();
if (y.style.display === "block")
{
document.getElementById("pants2").style.display = "none";
}
else
{
document.getElementById("pants2").style.display = "block";
}
}
})  
document.addEventListener("keydown", function(){
    if (event.code === "KeyV")
{
var y = document.getElementById("pants2");
hideLegs();
if (y.style.display === "block")
{
document.getElementById("pants2").style.display = "none";
}
else
{
document.getElementById("pants2").style.display = "block";
}
}
})  

//PANTS3 CZ chaps
document.addEventListener("keydown", function(){
    if (event.code === "KeyC")
{
var y = document.getElementById("pants3");
hideLegs();
if (y.style.display === "block")
{
document.getElementById("pants3").style.display = "none";
}
else
{
document.getElementById("pants3").style.display = "block";
}
}
})  
document.addEventListener("keydown", function(){
    if (event.code === "KeyZ")
{
var y = document.getElementById("pants3");
hideLegs();
if (y.style.display === "block")
{
document.getElementById("pants3").style.display = "none";
}
else
{
document.getElementById("pants3").style.display = "block";
}
}
})  

//PANTS4 MX 
document.addEventListener("keydown", function(){
    if (event.code === "KeyM")
{
var y = document.getElementById("pants4");
hideLegs();
if (y.style.display === "block")
{
document.getElementById("pants4").style.display = "none";
}
else
{
document.getElementById("pants4").style.display = "block";
}
}
})  
document.addEventListener("keydown", function(){
    if (event.code === "KeyX")
{
var y = document.getElementById("pants4");
hideLegs();
if (y.style.display === "block")
{
document.getElementById("pants4").style.display = "none";
}
else
{
document.getElementById("pants4").style.display = "block";
}
}
})  


document.addEventListener("keydown", function(){
    if (event.code === "#")
{
var y = document.getElementById("boot1");
if (y.style.display === "block")
{
document.getElementById("boot1").style.display = "none";
}
else
{
document.getElementById("boot1").style.display = "block";
}
}
})  

//PANTS5 V wooly
document.addEventListener("keydown", function(){
    if (event.code === "KeyV")
{
var y = document.getElementById("pants5");
hideLegs();
if (y.style.display === "block")
{
document.getElementById("pants5").style.display = "none";
}
else
{
document.getElementById("pants5").style.display = "block";
}
}
})  

const button=document.getElementById('button');

var audio = new Audio("assets/yeehaw.mp3");

button.onclick = function() {
  audio.play();
}
