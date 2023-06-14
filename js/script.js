// Smooth Scroll
$('nav ul li a, .logo a').click(function () {
    var thisSection = $(this).attr('href');
    var thisLink = $(this);

    $('html, body').stop().animate({
        scrollTop: $(thisSection).offset().top - 100
    }, 600, 'easeInCirc');
});

// Flexslider
$(window).on('load', function () {
    $('.flexslider').flexslider({
        animation: "slide",
        slideshowSpeed: 4000,
        direction: 'horizontal',
        reverse: true,
    });
});


// Tabs
$('#tabs>ul>li>a').click(function () {
    $('#tabs>ul>li>a').css({
        background: "#C8D6AF",
        color: "#061923"
    });
    $(this).css({
        background: "var(--tea-green-light)"
    });
    var thisTab = $(this).attr('href');
    $('#tabs>div:visible').fadeOut(200, function () {
        $(thisTab).fadeIn(200);
    });

})


// Content Rotator
let counter = 1;
function contentRotator() {
    $(`#rotator blockquote:nth-child(${counter})`).fadeIn(2000, function () {
        if ($(this).is("#rotator blockquote:last-child")) {
            setTimeout(function () {
                $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000, function () {
                    counter = 1;
                    contentRotator();
                })
            }, 7000);
        }
        else {
            setTimeout(function () {
                $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000, function () {
                    counter++;
                    contentRotator();
                });
            }, 7000);
        }

    });
}
contentRotator();


// Features Rotator 
const listCount=$('.eachfeature li').length;
console.log(listCount);
 let t = 1, e = 0; 
 const o = $("#features ul:first-of-type li").length; 
 let n = $("#features ul:first-of-type").clone(); 
 $("#features ul:first-of-type li:nth-child(1)").css({ color: "#FF5964", fontWeight: "600" }), 
 $("#features").append(n), 
 function i() { setTimeout(function () { t <= o ? (e -= 30, $("#features").animate({ top: e + "px" }, 500, function () { 
    $("#features ul:first-of-type li:nth-child(" + (t + 1) + ")").css({ color: "#FF5964", fontWeight: "600" }), t++, i() }))
     : ($("#features ul:first-of-type").remove(), 
     n = $("#features ul:first-of-type").clone(), 
     $("#features").css("top", "0"), $("#features").append(n), 
     e = 0, t = 1, $("#features ul:first-of-type li:nth-child(1)").css({ color: "#FF5964", fontWeight: "600" }), i()) }, 1500) }();

