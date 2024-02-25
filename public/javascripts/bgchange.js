$(window).on('load',function(){
    function bgChange(){
        var wrapAll = $('#wrap_all');
        var gravureWrap = $('.gravure_wrap');
        var gravureImage = gravureWrap.find('img');
        var gravureBgImage = gravureImage.attr('src');
        var gvBgImage = gravureBgImage.split('/');
        var gvBgImageName = gvBgImage.slice(-1)[0];
        wrapAll.css("background-image","url('/images/"+gvBgImageName+"')");
    }
    bgChange();
});
