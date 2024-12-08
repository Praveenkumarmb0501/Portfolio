$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('nav ul li a').on('click', function(event) {
        event.preventDefault();
        const href = $(this).attr('href');
        window.location.href = href;
    });

    // Any additional interactive JavaScript/jQuery code can go here
});
