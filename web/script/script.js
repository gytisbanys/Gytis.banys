var gallery_main = ['media/bc_priekis.png', 'media/bc_galas.png', 'media/Sense_Of_Morning.jpg', 'media/Swing.png'];

$(function() {
    

    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    var lFollowX = 0,
        lFollowY = 0,
        x = 0,
        y = 0,
        friction = 1 / 15;

    function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;
    
    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.2)';

    $('.background-image').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });

    window.requestAnimationFrame(moveBackground);
    }

    $(window).on('mousemove click', function(e) {
        if(!isMobile) {
            var lMouseX = Math.max(-200, Math.min(200, $(window).width() / 2 - e.clientX));
            var lMouseY = Math.max(-200, Math.min(200, $(window).height() / 2 - e.clientY));
            lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
            lFollowY = (20 * lMouseY) / 100;
        }
    });

    moveBackground();	

    //$('.menu-entry').click(function() {
    //    var compareSelected = 'content-window content-' + $(this).data('link');
    //    var content = '.content-' + $(this).data('link');
    //    $('.content-window').each(function() {
    //        var selected = $(this).attr('class');
    //        if ( selected === compareSelected ) {
    //            var contentInside = content + ' .content-wrap';
    //            $(contentInside).css({
    //            'width': $(contentInside).width(),
    //            'height': $(contentInside).height()
    //            });
    //            $(content).animate({'width': 'toggle'});
    //        } else {
    //            $(this).animate({'width': 'toggle'});
    //        }
    //    });
//
//
//
    //});

    $('.menu-entry').click(function() {
        if ( $(this).parent().hasClass('window-active') ) {
            $('.main-menu li').each(function() {
                $(this).removeClass('window-active');
            });
        } else {
            $('.main-menu li').each(function() {
                $(this).removeClass('window-active');
            });
            $(this).parent().addClass('window-active');
        }
        
        var windowSelected = '.content-' + $(this).data('link');
        $('.content-window').each(function() {
            $(this).hide(100);
        });
        if ( $(windowSelected).css('display') === 'block' ) {
        } else {
            $(windowSelected).show(100);
        }
    });
    $('.gallery > div').click(function() {
        var currentImage = $(this).data('image') - 1;
        var gallery = $(this).parent().data('gallery');
        var selectImage = window[gallery][currentImage];
        $('.lightbox-image').attr("src",selectImage);
        $('.lightbox-current > span').text(currentImage + 1 + " iš " + window[gallery].length);
        var storeData = $('.lightbox-image').data();
        storeData.gallery = gallery;
        storeData.image = currentImage;
        $('.lightbox-container').toggle(200);
    });
    $('.lightbox-exit').click(function() {
        $('.lightbox-container').toggle(200);
    });
    $('.lightbox-previous').click(function() {
        var currentImage = $('.lightbox-image').data('image') - 1;
        var gallery = $('.lightbox-image').data('gallery');
        var galleryLenght = window[gallery].length - 1;
        if ( currentImage < 0 ) {
            currentImage = galleryLenght;
        }
        var selectImage = window[gallery][currentImage];
        $('.lightbox-image').attr("src",selectImage);
        $('.lightbox-current > span').text(currentImage + 1 + " iš " + window[gallery].length);
        var storeData = $('.lightbox-image').data();
        storeData.gallery = gallery;
        storeData.image = currentImage;
    });
    $('.lightbox-next').click(function() {
        var currentImage = $('.lightbox-image').data('image') + 1;
        var gallery = $('.lightbox-image').data('gallery');
        var galleryLenght = window[gallery].length - 1;
        if ( currentImage > galleryLenght ) {
            currentImage = 0;
        }
        var selectImage = window[gallery][currentImage];
        $('.lightbox-image').attr("src",selectImage);
        $('.lightbox-current > span').text(currentImage + 1 + " iš " + window[gallery].length);
        var storeData = $('.lightbox-image').data();
        storeData.gallery = gallery;
        storeData.image = currentImage;
    });
       
});