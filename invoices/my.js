// Open/close tabs based on the screen resolution
function accordionControl(){
    if (window.screen.availWidth >= "1024") {
        $(".accordion-item").addClass("is-active");
        $(".accordion-content").css("display", "block");
    }
    else {
        $(".accordion-item").removeClass("is-active");
        $(".accordion-content").css("display", "none");
    }
}
window.onload = accordionControl;
window.onresize = accordionControl;