
//$("#plus_face").hover(function(){
 // $("#plus").animate({
   // width: 70+"%"
    //opacity: 0.4,
    //marginLeft: "0.6in",
    //fontSize: "3em",
    //borderWidth: "10px"
 // }, 500 );
//});

$("#plus_face").click(function(){
  $("#plus").animate({
    width: 70
     }, 1500 );
});


// ------------1--------------
$(function() {
// OPACITY OF BUTTON SET TO 50%
$("#boxi1").css("opacity","0.3");
//alert(msg);

// ON MOUSE OVER
$("#boxi1").hover(function () {	

// SET OPACITY TO 100%
$(this).stop().animate({
width: 200+'%',
opacity: 0.0
}, "slow");
},
		
// ON MOUSE OUT
function () {
			
// SET OPACITY BACK TO 50%
$(this).stop().animate({
width: 100+'%',
opacity: 0.3
}, "slow");
});
});
// --------------------------

// ------------2--------------
$(function() {
// OPACITY OF BUTTON SET TO 50%
$("#boxi2").css("opacity","0.2");
		
// ON MOUSE OVER
$("#boxi2").hover(function () {
										  
// SET OPACITY TO 100%
$(this).stop().animate({
width: 200+'%',
opacity: 0.0
}, "slow");
},
		
// ON MOUSE OUT
function () {
			
// SET OPACITY BACK TO 50%
$(this).stop().animate({
width: 100+'%',
opacity: 0.2
}, "slow");
});
});
// ---------------------------

// ------------3--------------
$(function() {
// OPACITY OF BUTTON SET TO 50%
$("#boxi3").css("opacity","0.25");
		
// ON MOUSE OVER
$("#boxi3").hover(function () {
										  
// SET OPACITY TO 100%
$(this).stop().animate({
width: 200+'%',
opacity: 0.0
}, "slow");
},
		
// ON MOUSE OUT
function () {
			
// SET OPACITY BACK TO 50%
$(this).stop().animate({
width: 100+'%',
opacity: 0.21
}, "slow");
});
});
// ---------------------------

// ------------4--------------
$(function() {
// OPACITY OF BUTTON SET TO 50%
$("#boxi4").css("opacity","0.23");
		
// ON MOUSE OVER
$("#boxi4").hover(function () {
										  
// SET OPACITY TO 100%
$(this).stop().animate({
width: 100+'%',
opacity: 0.0
}, "slow");
},
		
// ON MOUSE OUT
function () {
			
// SET OPACITY BACK TO 50%
$(this).stop().animate({
width: 100+'%',
opacity: 0.23
}, "slow");
});
});
// ---------------------------