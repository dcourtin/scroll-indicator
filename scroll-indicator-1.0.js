/**
 * Horizontal Scroll indicator
 * @author David Courtin <davidcourtin@protonmail.com>
 * @version 1.0
 */
var console;
$.fn.scrollIndicator = function (settings) {
    var debugMode     = (settings.debugMode !== undefined && settings.debugMode === true);
    var showIndicator = (settings.showIndicator !== undefined && settings.showIndicator === true);

    if (debugMode){
         console.warn('Scroll Indicator : Debug mode enabled');
    }

    if(showIndicator){
        var scrollIndicContainer = $('<div id="scrollIndicatorContainer"></div>');
        $('body').append(scrollIndicContainer);
        scrollIndicContainer.css({
            'position': 'fixed',
            'outline': debugMode ? '1px solid red' : '',
            'top': 0,
            'height': settings.height,
            'background': settings.color,
            'width': '0',
            'z-index': 10000
        });
    }

    $(window).on('scroll', function (e) {

        var heighRef = $(document).height() - $(window).height();
        var newWidth = ($(window).scrollTop()) * (100 / heighRef);

        if(showIndicator){
            scrollIndicContainer.animate(
                {
                    'width': '+' + newWidth + "%"
                },
                {
                    duration: 0,
                    specialEasing: {
                        width: "linear",
                        height: "easeOutBounce"
                    },
                    complete: function () {
                        if (typeof(settings.onCompleteAnimateScrollHandler) === 'function') {
                            settings.onCompleteAnimateScrollHandler(e, newWidth, heighRef, debugMode);
                        }
                    }
                });
        }

        if ($(window).scrollTop() === 1) {
            if (typeof(settings.onStartScrollDocumentHandler) === 'function') {
                settings.onStartScrollDocumentHandler(e, debugMode);
            }
        }

        if (newWidth >= 100) {
            if (typeof(settings.onFinishScrollDocumentHandler) === 'function') {
                settings.onFinishScrollDocumentHandler(e, debugMode);
            }
        }
    });
}
