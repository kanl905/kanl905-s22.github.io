/* pop ups */
$("#one").click(function() {
    $("#oneinfo").toggle('blue black');
    $('#twoinfo,#threeinfo,#fourinfo').hide('hello');
});

  $("#two").click(function() {
    $("#twoinfo").toggle('blue black');
    $('#oneinfo,#threeinfo,#fourinfo').hide('hello');
});

  $("#three").click(function() {
    $("#threeinfo").toggle('blue black');
    $('#twoinfo,#oneinfo,#fourinfo').hide('hello');
});

  $("#four").click(function() {
    $("#fourinfo").toggle('blue black');
    $('#twoinfo,#threeinfo,#oneinfo').hide('hello');
});

/* colour */

        /*$("#one").click(function(){
            $('#one').toggleClass('blue');
        });

        $("#two").click(function(){
            $('#two').toggleClass('blue');
        });

        $("#three").click(function(){
            $('#three').toggleClass('blue');
        });

        $("#four").click(function(){
            $('#four').toggleClass('blue');
        });

let number=document.getElementById("oneinfo");
if (number.style.display=='block') {
   document.getElementById("one").style.color="black";
} else {
  document.getElementById("one").style.color="blue";
}*/