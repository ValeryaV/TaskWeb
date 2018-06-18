function menu() {
    element = $('.dropdown-menu');
    display = element.css('display');
    if (display == 'none'){
        $('.dropdown-menu').slideDown(400);
        $('body').css('overflow', 'hidden');
    }
    if (display == 'block'){
        $('.dropdown-menu').slideUp(400);
        $('body').css('overflow', 'scroll');

    }
};

(function() {
    "use strict";
    var toggles = document.querySelectorAll(".c-hamburger");
    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        });
    }
})();

