$(this).scrollIndicator({
    color: '#088A85', // color of the element
    height: '5px',
    debugMode: false,
    showIndicator: true, // you can hide the html element to only use the hooks
    onStartScrollDocumentHandler: function (e, debugMode) {
        if (debugMode ){
            console.info('Scroll document Started');
        }
    },
    onFinishScrollDocumentHandler: function (e, debugMode) {
        if (debugMode){
            console.info('Scroll document Finished');
        }
    },
    onCompleteAnimateScrollHandler: function (e, scrollWidth, docHeight, debugMode) {
        if (debugMode) {
            console.info('Scroll animate Complete');
        }
    }
});
