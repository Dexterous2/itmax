$(document).ready(() => {
    
    let lastScrollPosition = $(window).scrollTop();
    let rotate = 10;

    $(window).on("scroll resize", function () {
        let currentScrollPosition = $(this).scrollTop();
        if (currentScrollPosition > lastScrollPosition) {

            
            rotate += 0.5;
            
            // Handle Scroll Down
            handleAchievementAnimation();
        }else{
            rotate -= 0.5;
            
            // Handle Scroll Up
        }

        // $('.rotate-ellipse').css({
        //     transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ('+rotate+'deg) skew(0deg, 0deg)'
        // });

        lastScrollPosition = currentScrollPosition;
    });
});


function handleAchievementAnimation(){
    const elements = $('.achievements .achievement');
    for (let index = 0; index < elements.length; index++) {
        // const element = elements[index];
        // const isCurrent = $(element).hasClass('current');
        // if( isInViewport(element, 10)){
        //     $(element).find('img').css({ rotate: isCurrent ? '25deg' : '-25deg'});
        // }
        // if( isInViewport(element, 20)){
        //     $(element).find('img').css({ rotate: '-20deg'});
        // }
        // if( isInViewport(element, 30)){
        //     $(element).find('img').css({ rotate: '-15deg)'});
        // }
        // if( isInViewport(element, 40)){
        //     $(element).find('img').css({ rotate: '-10deg'});
        //     console.log($(element).find('img'));
        // }
        // // console.log(isInViewport(element), index, '10');
        // console.log(isInViewport(element), index, '20');
        // console.log(isInViewport(element), index, '30');
        // console.log(isInViewport(element), index, '40');
        // console.log(isInViewport(element), index, '50');
    }
}
    

function isInViewport(element, percentage = 25) {
    // const elementTop = $(element).offset().top;
    // const elementBottom = elementTop + $(element).outerHeight();
    // const viewportTop = $(window).scrollTop();
    // const viewportBottom = viewportTop + $(window).height();
    
    // // Return true if the element is in the viewport
    // return elementBottom > viewportTop && elementTop < viewportBottom;

    const elementTop = $(element).offset().top;
    const elementHeight = $(element).outerHeight();
    const elementBottom = elementTop + elementHeight;
    
    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();

    // Calculate the visible portion of the element within the viewport
    const visibleTop = Math.max(viewportTop, elementTop);
    const visibleBottom = Math.min(viewportBottom, elementBottom);
    const visibleHeight = visibleBottom - visibleTop;  // Visible part of the element

    // Check if at least the specified percentage (default: 25%) of the element is in view
    const requiredHeight = (percentage / 100) * elementHeight;
    return visibleHeight >= requiredHeight;
}