console.log("Great success!");
var counter = 3;
function clickedLike(element) {
    counter++;
    var currentLikes = document.querySelector("#like-counter").innerHTML=counter + " like(s)";
    console.log(currentLikes);
}