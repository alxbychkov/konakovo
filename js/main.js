var etazhu = [
    '35 000',
    '35 000',
    '35 000',
    '35 000',
    '35 000',
    '35 000',
    '35 000',
    '43 000',
    '45 000',
    '47 000',
    '48 000',
    '49 000',
    '49 000'
];
var flats = [
    {
        floor: '2-9',
        square: '91,2 м²',
        room:'2',
        image:'typ_1.webp'
    },
    {
        floor: '12 и 14',
        square: '59,3 м²',
        room:'1',
        image:'typ_2.webp'
    },
    {
        floor: '2-9',
        square: '80,3 м²',
        room:'2',
        image:'typ_3.webp'
    },
    {
        floor: '2-14',
        square: '55,6 м²',
        room:'1',
        image:'typ_4.webp'
    },
    {
        floor: '2-14',
        square: '57,8 м²',
        room:'1',
        image:'typ_5.webp'
    },
    {
        floor: '2-14',
        square: '90,3 м²',
        room:'1',
        image:'typ_6.webp'
    },
    {
        floor: '2-14',
        square: '48,2 м²',
        room:'1',
        image:'typ_7.webp'
    },
    {
        floor: '2-8',
        square: '109,1 м²',
        room:'3',
        image:'typ_8.webp'
    },
    {
        floor: '2-8',
        square: '116,2 м²',
        room:'3',
        image:'typ_9.webp'
    },
    {
        floor: '2-14',
        square: '83,3 м²',
        room:'2',
        image:'typ_10.webp'
    },
    {
        floor: '9-14',
        square: '51 м²',
        room:'1',
        image:'typ_13.webp'
    },
    {
        floor: '9-14',
        square: '91,7 м²',
        room:'2',
        image:'typ_14.webp'
    }
];
var num = 1;

var crntAnim = 0;
var crntAnim2 = 0;
$('.cls-1').hover(function(e){
    var id = $(this).index();

    if(crntAnim != 0){
        crntAnim.stop();
    }
    
    crntAnim = $('.etazh__popup').animate({'top':80 - (id*5)+'%'}, 100);
    $('.etazh__popup-left span').text((id+2)+' этаж');
    $('.etazh__popup-right b').text(etazhu[id]+' руб.');
});

$('#etazhu').hover(
    function() {
        $('.etazh__popup').css({'opacity': '1'});
    }, function() {
        $('.etazh__popup').css({'opacity': '0'});
    });

$(document).ready(function(){

    show_map();

    $('.gallery-magnific').magnificPopup({
        type: 'image',
        gallery:{
          enabled:true
        }
      });
      burger_click();
      slider();
      $('.scroll-nav-link._line').click(function(){
        $('.header-scroll').css('display','none');
        $('body').css('overflow','');
        let idName = $(this).attr('href');
        let offset = $(idName).offset();
        $('html, body').animate({
            'scrollTop': offset.top
        }, 1000);
        if ($('.burger').hasClass('close-burger')) {
            $('.burger').removeClass('close-burger');
            $('.scroll-menu').css('top','-500px');
        }
      });
      $('a[href="#special"]').click(function(){
        let idName = $(this).attr('href');
        let offset = $(idName).offset();
        $('html, body').animate({
            'scrollTop': offset.top
        }, 1000);  
      })
      $('.nav-menu_link').click(function(){
        let idName = $(this).attr('href');
        let offset = $(idName).offset();
        $('html, body').animate({
            'scrollTop': offset.top
        }, 1000);
    });

});

function burger_click() {
    $('.burger').click(function(){
        let win = $('.header-scroll');
        let menu = $('.scroll-menu');
        let pos = menu.css('top');
        let body = $('body');
        pos = pos.replace('px','');
        if (pos < 0) {
            menu.animate({
                top: 0
            }, 300);
            win.css('display','block');
            win.css('background-color','rgba(101, 101, 101,0.3)');
            body.css('overflow','hidden');
            // scrollLock.disablePageScroll();
        } else {
            menu.animate({
                top: -500
            }, 300);
            win.css('background-color','transparent');
            body.css('overflow','');
            setTimeout(function(){
                win.css('display','none');
            },300);
            
            // scrollLock.enablePageScroll();
        }
        $(this).toggleClass('close-burger');
    });
}

function slider() {
    var prev = $('.plan .navigation .btn-prev'),
        next = $('.plan .navigation .btn-next');
    var type = $('.plan .slider-item .type'),
        floor = $('.plan .slider-item .floor'),
        square = $('.plan .slider-item .square'),
        room = $('.plan .slider-item .room'),
        picture = $('.plan .slider-item_right img');
    var length = flats.length;
    prev.on('click',function(){
        if(num == 1) {
            num = length;
        } else {
            num = num - 1;
        }
            type.text(`Тип №${num}`);
            floor.text(`Этажи: ${flats[num-1].floor}`);
            square.text(`Общая площадь: ${flats[num-1].square}`);
            room.text(`Количество комнат: ${flats[num-1].room}`);
            picture.attr('src',`img/${flats[num-1].image}`);
    });
    next.on('click',function(){
        if (num == length) {
            num = 1;
        } else {
            num = num + 1;
        }
        type.text(`Тип №${num}`);
        floor.text(`Этажи: ${flats[num-1].floor}`);
        square.text(`Общая площадь: ${flats[num-1].square}`);
        room.text(`Количество комнат: ${flats[num-1].room}`);
        picture.attr('src',`img/${flats[num-1].image}`);
    });  
}

function show_map() {
    var $element = $('.documents');
    let counter = 0;
    var frame = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9e681732f75432bd9667fba304af4e1997ffc7988926a471deccc2fe06d4e29c&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>';
$(window).scroll(function() {
  var scroll = $(window).scrollTop() + $(window).height();
  //Если скролл до конца елемента
  //var offset = $element.offset().top + $element.height();
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
  if (scroll > offset && counter == 0) {
    $('.contacts').find('.map').append(frame);
    counter = 1;
  }
});

}

 