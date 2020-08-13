$(document).ready(function () {

    //humpurger toggle
    {
        $('.first-button').on('click', function () {

            $('.animated-icon1').toggleClass('open');
        });
    }

    //home slider
    {
        let background_images = Array("image/slideshow-1.jpg", "image/slideshow-2.jpg", "image/slideshow-3.jpg");
        let current_background_image = 0;
        $("header").each(function () {
            $(this).hide();
        })
        $("header").eq(0).show();
        $(".right").click(function () {
            current_background_image++;
            if (current_background_image > 2) {
                current_background_image = 0;
            }
            $("header").each(function () {
                $(this).hide(0);
            })
            $("header").eq(current_background_image).show();
            $(".home").css("background-image", "url(" + background_images[current_background_image] + ")");
        })
        $(".left").click(function () {
            current_background_image--;
            if (current_background_image < 0) {
                current_background_image = 2;
            }
            $("header").each(function () {
                $(this).hide(0);
            })
            $("header").eq(current_background_image).show();
            $(".home").css("background-image", "url(" + background_images[current_background_image] + ")");
        })
    }

    //Progress bars
    {
        let condition = true;
        function progress_bar() {
            let current = $('#start');
            let element_position = current.offset().top;
            let last_element_position = $("#end").offset().top;
            if (condition && (element_position - $(window).scrollTop() - window.innerHeight) < 0 && last_element_position - $(window).scrollTop() > 0) {
                $('.progress .progress-bar').each(function () {
                    let percent = parseInt($(this).attr('data-value'), 10) + '%';
                    let $value = $(this).parent().parent().find('.progress-value');
                    if ($value.length > 0) {
                        $value.css({ width: percent, opacity: 0 }).text(percent);
                    }
                    $(this).animate({ width: percent }, {
                        duration: 1500, queue: false, complete: function () {
                            if ($value.length > 0) {
                                $value.animate({ opacity: 1 }, { duration: 300, queue: false });
                            }
                        }
                    });
                })
                condition = false;
            }
        }
        progress_bar();
    }

    //navbar style
    {
        function nav_style() {
            if ($(window).width() >= 751) {
                if ($(window).scrollTop() == 0) {
                    $("nav").eq(0).css("height", "95px");
                    $("nav").eq(0).removeClass("shadow-sm");
                    $('.navbar').removeClass('white-back');
                    $(".navbar-brand").html('<img src="image/logo-white.png" />');
                } else {
                    $("nav").eq(0).css("height", "75px");
                    $("nav").eq(0).addClass("shadow-sm");
                    $('.navbar').addClass('white-back');
                    $(".navbar-brand").html('<img src="image/logo-red.png" />');
                }
                $("#navbarSupportedContent20").css("background-color", "transparent").css("position", "unset");
            } else {
                $("nav").eq(0).css("height", "75px");
                $("nav").eq(0).addClass("shadow-sm");
                $('.navbar').addClass('white-back');
                $(".navbar-brand").html('<img src="image/logo-red.png" />');
                $("#navbarSupportedContent20").css("background-color", "#fff").css("position", "absolute");
            }
        }
        nav_style();
    }

    //active nav-item
    function nav_item() {

        if ($(window).scrollTop() >= $("#home").offset().top && $(window).scrollTop() < $("#about").offset().top - 75) {
            $(".nav-item").each(function () {
                $(this).removeClass("active");
            })
            $(".nav-item").eq(0).addClass("active");
        } else if ($(window).scrollTop() >= $("#about").offset().top - 75 && $(window).scrollTop() < $("#team").offset().top - 75) {
            $(".nav-item").each(function () {
                $(this).removeClass("active");
            })
            $(".nav-item").eq(1).addClass("active");
        } else if ($(window).scrollTop() >= $("#team").offset().top - 75 && $(window).scrollTop() < $("#projects").offset().top - 75) {
            $(".nav-item").each(function () {
                $(this).removeClass("active");
            })
            $(".nav-item").eq(2).addClass("active");
        } else if ($(window).scrollTop() >= $("#projects").offset().top - 75 && $(window).scrollTop() < $("#services").offset().top - 75) {
            $(".nav-item").each(function () {
                $(this).removeClass("active");
            })
            $(".nav-item").eq(3).addClass("active");
        } else if ($(window).scrollTop() >= $("#services").offset().top - 75 && $(window).scrollTop() < $("#blog").offset().top - 75) {
            $(".nav-item").each(function () {
                $(this).removeClass("active");
            })
            $(".nav-item").eq(4).addClass("active");
        } else if ($(window).scrollTop() >= $("#blog").offset().top - 75 && $(window).scrollTop() < $("#contact").offset().top - 75) {
            $(".nav-item").each(function () {
                $(this).removeClass("active");
            })
            $(".nav-item").eq(5).addClass("active");
        } else {
            $(".nav-item").each(function () {
                $(this).removeClass("active");
            })
            $(".nav-item").eq(6).addClass("active");
        }

    }
    nav_item();

    //click nav-links
    $(".nav-link").click(function () {
        let hRef = $(this).attr("href");
        $(window).animate({ scrollTop: $(hRef).offset().top });
    })

    //click mouse button
    $(".mouse").click(function () {
        $(window).animate({ scrollTop: $("#about").offset().top });
    })

    //up click
    $("#up").click(function () {
        window.scrollTo(0, 0);
    })

    //nav_style resize
    $(window).resize(function () {
        nav_style();
        parallax();
    })

    //scrolling
    $(window).scroll(function () {
        nav_style();
        nav_item();
        progress_bar();
    })

    //click projects li
    $(".filters li").click(function () {
        $(".filters li").each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    })

    //projects filter
    {
        let $grid = $(".grid").isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows',
        })
        $(".filters li").click(function () {
            let value = $(this).attr('data-name');
            $grid.isotope({
                filter: value
            })
        })
    }

    //testimonials-carousel
    {
        $(".testimonial-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: ".testimonial-nav"
        });
        $(".testimonial-nav").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            draggable: true,
            autoplay: true,
            autoplaySpeed: 2500,
            asNavFor: ".testimonial-slider",
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            variableWidth: false,
            centerPadding: "-10%",
            arrows: false,
            responsive: [
                {
                    breakpoint: 1007,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });
    }

    //play video
    {
        let videState = true;
        $(".pause").click(function () {
            $(".video .parent .overlay").hide();
            videState = false;
            player.unMute();
        })
        $(".video .parent").click(function () {
            if (videState) {
                videState = false;
                $(".video .parent").css('cursor', 'default');
            } else {
                videState = true;
                $(".video .parent").css('cursor', 'pointer');
            }
            if (!videState) {
                $(".video .parent .overlay").show();
                videState = true;
                player.mute();
            }
        })
    }

    //wow
    new WOW().init();

    //counter
    $('.counter').counterUp({
        delay: 4,
        time: 1000
    });

    //parallax
    function parallax() {
        $('.parallax').each(function () {
            if ($(this).attr('data-image')) {
                if ($(window).width() >= 976) {
                    $(this).parallax('50%', 0.5);
                    $(this).css({ backgroundImage: 'url(' + $(this).data('image') + ')' });
                    $(".pricing").css("background-size", "unset");
                } else {
                    $(this).css({ backgroundImage: 'url(' + $(this).data('image') + ')' });
                    $(this).parallax('0%', 0);
                    $(".pricing").css("background-size", "cover");
                }
            }
        });
    }
    parallax();

    //brands
    $(".brands").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 783,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    //validation
    {
        //name validation
        let nameVal = false;
        $("#name").keyup(function () {
            let name = $(this).val();
            let regName = /^[a-zA-Z]+ [a-zA-Z]{2,10}$/;
            if (!regName.test(name)) {
                $("#namealert").css("display", "block");
                disable();
            } else {
                $("#namealert").css("display", "none");
                nameVal = true;
                able();
            }
        })

        //email validation
        let emailVal = false;
        $("#email").keyup(function () {
            let email = $(this).val();
            let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regEmail.test(email)) {
                $("#emailalert").css("display", "block");
                disable();
            } else {
                $("#emailalert").css("display", "none");
                emailVal = true;
                able();
            }
        })

        //phone validation
        let phoneVal = false;
        $("#phone").keyup(function () {
            let phone = $(this).val();
            let regPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
            if (!regPhone.test(phone)) {
                $("#subjectalert").css("display", "block");
                disable();
            } else {
                $("#subjectalert").css("display", "none");
                phoneVal = true;
                able();
            }
        })

        //message validation
        let messageVal = true;
        $("#message").keyup(function () {
            let message = $(this).val();
            let regMessage = /^[\s\S]{0,100}$/;
            if (!regMessage.test(message)) {
                $("#messagealert").css("display", "block");
                messageVal = false;
                disable();
            } else {
                $("#messagealert").css("display", "none");
                messageVal = true;
                able();
            }
        })

        //disable function
        function disable() {
            document.querySelector("#submit").setAttribute("disabled", false);
        }

        //able function
        function able() {
            if (nameVal == true && emailVal == true && phoneVal == true && messageVal == true) {
                document.querySelector("#submit").removeAttribute("disabled", false);
            }
        }

        //clear function
        $("#submit").click(function () {
            document.getElementsByClassName("form-control").value = '';
        })
    }

    //map
    /*
    function initMap() {
        let location = {
            lat: 29.883779,
            lng: 31.306377
        };
        let map = new google.maps.Map(document.getElementById("map"), {
            zoom: 9,
            center: location
        });
        let marker = new google.maps.Marker({
            position: location,
            map: map
        })
    }
    initMap();
    */

    //loader
    $(".loader").fadeOut(1000, function () {
        $("body").css("overflow", "auto");
    });

})