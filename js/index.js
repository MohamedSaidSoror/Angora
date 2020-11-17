$('.settings i').click(function(){  //change site colors
    $('.colors').toggle(500);
});
$('.settings .colors li').click(function(){
    $(':root').css('--mainColor',$(this).data('color'))
});
let aboutOffset = $('#about').offset().top;

$("a[href^='#']").click(function(){       // nav link ynazel 3al elsection bta3o
    let aHref = $(this).attr('href');
    $("html,body").animate({scrollTop:$(aHref).offset().top},1000);
    if($(this).removeClass('active')){
    $(this).removeClass('active');        
    }
})

$(window).scroll(function(){
    var windowScroll = $(window).scrollTop();
    if(windowScroll < 100){
    $('.fixedNav').slideUp(500);
    }else{
        $('.fixedNav').slideDown(500);
    }
    if(windowScroll > aboutOffset){      // show and hide elsahm elly bytal3 foq
        $('.arrow-top').fadeIn(1000);
    }else{
        $('.arrow-top').fadeOut(1000);
    }
    var links= $("nav a[href^='#']"); //change the color to the nav link
    for(var i= 1;i<8;i++)
    {
        let aHref = links[i].hash;
        let offSet = $(aHref).offset().top;
        if(windowScroll >= offSet -30){
            links.eq(i).addClass("active");
            links.eq(i-1).removeClass("active");
        }else{
            links.eq(i).removeClass("active");
        }
        if(windowScroll < aboutOffset-30){
            links.eq(1).addClass('active')
        }else{
            links.eq(1).remove('active')

        }
    }
});
$('.arrow-top').click(function(){                     //khaly elsahm ytal3 foq
    $('html,body').animate({scrollTop:'0'} , 1000);
})

$('.filter-btn').click(function(){      //categories
    let value = $(this).data('filter');
    if(value == "all")
    {
        $('.filter').show(2000);
    }else{
        $('.filter').not('.'+value).hide(300);
        $('.filter').filter('.'+value).show(300);
    }
    if($('.filter-btn').removeClass('active'))
    {
        $('.filter-btn').removeClass('active');
    }
    $(this).addClass('active');


});
var images=[];                             // client reviews
$('.slide-image .content').hide();
$('.slide-image').click(function(){
    let slideHtml =$(this).html();
    console.log(slideHtml);
    $('.main-image').html(slideHtml);
    $('.main-image .content').show();   
});

