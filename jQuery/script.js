//jquery("h1") or $("h1")



// in order to use cdn link above the link tag then in that case
// use $(document).ready(function({
//   $("h1").css("color","red");
// }))


$("h1").css("color","red");
$("h1").text("Bye");
$("h1").css("font-size" , "5rem");


//adding or removing one class
$("button").addClass("big-title")
//$("button").removeClass("big-title")


//adding or removing multiple clss
$("button").addClass("big-title margin-50")

//$("button").html("hello");
//$("button").text("<em>hello<em>");
$("button").html("<em>hello<em>");
// $("button").text("yes");
 $("a").attr("href", "https://www.amazon.com");



 ///add eventlister with jquery
//  $("h1").click(function(){
//     $("h1").css("color","purple");
//     $("h1").css("font-size","5rem");
//  })



//  $("button").click(function(){
//     $("h1").css("color","purple");
//  })
 $("input").keypress(function(event){
    $("h1").text(event.key);
 })

//  $("h1").on("mouseover",function(){
//     $("h1").css("color","green");
//  })



 ///animation

 //hide and show
 $("button").on("click", function(){
    // $("h1").hide();
    // $("h1").show();
    // $("h1").fadeToggle();
    // $("h1").slideToggle();


    //custom css
    // $("h1").animate({opacity: 0.5});
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
  });
