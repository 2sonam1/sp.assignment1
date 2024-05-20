$(document).ready(function () {
    var open = 0;
    $(".search button").click(function () {
        var searchBar = $(".search-bar");
        searchBar.toggle();
        if (searchBar.css('display') !== 'none') {
            $(".search button").addClass("search-bar-active");
        } else {
            $(".search button").removeClass("search-bar-active");
        }
    });
    $(".bar button").click(function (){
        $(".listings").show();
        $(".bar").hide();
        $(".cross").removeClass("menu-inactive");
    })
    $(".cross button").click(function () {
        $(".listings").hide();
        $(".cross").addClass("menu-inactive");
        $(".bar").show();
    })
    $(".Motoring").click(function () {
        var MotoringLinks = $(".Motoring-links");
        MotoringLinks.toggle();
        if (MotoringLinks.css('display') !== 'none') {
            $(".Motoring-links").css({"display":"flex"});
            $(".Motoring-links").addClass("navbar-link-active");
            $(".Motoring").css({ "text-decoration": "underline", "color": "rgba(17, 134, 87, 1)" });
        } else {
            $(".Motoring-links").removeClass("navbar-link-active");
            $(".Motoring").css({ "text-decoration": "none", "color": "rgba(60, 60, 60, 1)" });
        }
    });
});