$(document).ready(function() {
    $('.backToTopButton').on('click', function() {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
});

