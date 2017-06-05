console.log('Caricati gli scripts');
var scrollTo = function (id) {
    var container = $('body'),
        scrollTo = $(id);
        console.log(scrollTo)
    container.animate({
        scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
    });
}

