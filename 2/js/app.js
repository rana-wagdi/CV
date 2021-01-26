  $(window).on('scroll load',function(){
        if($(window).scrollTop()>795){
            $('nav').addClass('nav-active');
        }else{
            $('nav').removeClass('nav-active');
        
        }
    })
