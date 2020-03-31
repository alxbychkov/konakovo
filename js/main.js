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
    $('.slider-block').slick();
});