$(document).ready(function () {
    $("#click-show-more").click(function () {
        var elem = $("#click-show-more").text();
        if (elem == "Show more") {
            //Stuff to do when btn is in the read more state
            $("#click-show-more").text("Show less");
            $("#slide-toggle").slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $("#click-show-more").text("Show more");
            $("#slide-toggle").slideUp();
        }
    });
});


// HTML code
//   <div id="slide-toggle">  Hide </div>
//   <button id="click-show-more">Read More</button>

//   CSS code
// #slide-toggle {
//     display: none;
//   }