var things = [ 'discovery', 'adventure', 'creation', 'rock-climbing','fast running', 'nature','public policy', 'activism','hackathons','sustainability','candles','reading','science','computers','Bob Ross Painting','machine learning', 'National Parks', 'La Croix', 'plants','traveling','poetry','event planning','making a difference']

var count = 0
var elem = document.getElementById("things-i-like");
var interval = setInterval(changeText,1500);

function changeText(){
     elem.innerHTML = things[count]
     count = count >= things.length ? 0 : count + 1
     count++
     if(count >= things.length){
         count = 0
     }
 };

 setTimeout(function(){
     changeText()
 }, 4000); 

 $(document).ready(function () {
     $('div.hidden').fadeIn(2000).removeClass('hidden').fadeOut(2000);
 });
