$(document).ready( function() {

    // Scrolling navbar color change
    $(window).scroll( function(){

        if(this.scrollY > 20){

            $(".navbar").addClass("sticky");
        }
        else{

            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){

            $('.scroll-up-btn').addClass('show');
        }
        else{
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // scroll up btn functionality
    $('.scroll-up-btn').click(function(){

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    })

    $('#services').waypoint(function(){
        $('.skills .skills-content .right .html').removeClass('animate');
        $('.skills .skills-content .right .css').removeClass('animate');
        $('.skills .skills-content .right .javascript').removeClass('animate');
        $('.skills .skills-content .right .react').removeClass('animate');
        $('.skills .skills-content .right .node').removeClass('animate');
        $('.skills .skills-content .right .python').removeClass('animate');
        $('.skills .skills-content .right .db').removeClass('animate');
    })

    $('#skills').waypoint(function(){

        $('.skills .skills-content .right .html').addClass('animate');
        $('.skills .skills-content .right .css').addClass('animate');
        $('.skills .skills-content .right .javascript').addClass('animate');
        $('.skills .skills-content .right .react').addClass('animate');
        $('.skills .skills-content .right .node').addClass('animate');
        $('.skills .skills-content .right .python').addClass('animate');
        $('.skills .skills-content .right .db').addClass('animate');

    });
    
    //Toggle hamburger btn menu script
    $('.menu-btn').on('click', function(){

        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');

    });

    $('.navbar .menu li a').click(function(){
        $('.navbar .menu').removeClass('active');
        $('.menu-btn i').removeClass('active');
    });

    //Skills section readmore btn
    let flag = 0;
    $('.skills .skills-content .left a').click(function(){


        if(!flag){

            $('.skills .skills-content .left p .dots').css("display", "none");
            $('.skills .skills-content .left a').html('Read less');
            $('.skills .skills-content .left p .more').css('display', 'inline');
            flag = 1;
        }
        else{

            $('.skills .skills-content .left p .dots').css("display", "inline-block");
            $('.skills .skills-content .left a').html('Read more');
            $('.skills .skills-content .left p .more').css('display', 'none');
            flag = 0;
        }

    });

    //Owl Carousel
    $('.carousel').owlCarousel({
        margin: 40, /* Changed this one*/
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });

    // Typing animation script
    var typed = new Typed('.typing',{
        strings:["Web Developer", "Programmer", "Coder"],
        typeSpeed: 100,
        backSpeed: 80,
        loop:true
    });

    // var typed = new Typed('.typing-2',{
    //     strings:["Web Developer", "Programmer", "ML Specialist", "freelancer" .....],
    //     typeSpeed: 100,
    //     backSpeed: 80,
    //     loop:true
    // });

    //form submit handler
    $('form').submit(function(event){

        event.preventDefault();

        var data = $(this).serialize();

        $.ajax({
            type:'POST',
            url: '/',
            data: data
        }).done(function(){

            Swal.fire({
                icon: 'success',
                title: 'Form submitted successfuly',
                text: 'Will get back to you soon',
                customClass:{
                    confirmButton:"swal-button"
                }
            });    

        })
        .fail(function(){

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: '<p>Something went wrong!</p> <p>Please try again later.</p>',
                customClass:{
                    confirmButton:"swal-button"
                }
              })

        });

    });
    
});