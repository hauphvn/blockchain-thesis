jQuery(document).ready(function() {
    jQuery('#subscribeForm').on('submit', function(e) {
        e.preventDefault();

        var frm = jQuery(this);
        var email = frm.find('[name="email"]').val();

        if(email == undefined || !email.length) {
            frm.find('span.error').html('Email is required!').show();
        }
        else if(!validateEmail(email)) {
            frm.find('span.error').html('Wrong Email!').show();
        }
        else {
            frm.find('span.error').hide();

            grecaptcha.execute(window.reCaptchaV3SiteKey, {action: 'subscribe_form'}).then(function(token) {
                jQuery.post('/wp-admin/admin-ajax.php', 'action=recaptcha_validation&captcha_action=subscribe_form&token=' + token).then(function(response) {
                    var data = JSON.parse(response);
                    if(!data) {
                        frm.find('.error').html('Something went wrong');
                    } else {
                        jQuery.post('/wp-admin/admin-ajax.php', 'action=subscribe_form_submit&email=' + email)
                        .done(function(response) {
                            response = JSON.parse(response);

                            if(response.error) {
                                console.error('Subscribe error:');
                                console.error(response.errorMessage);

                                jQuery(document).find('#subscribeError').show();
                            }
                            else {
                                frm.find('[name="email"]').val('');

                                jQuery(document).find('#subscribeError').hide();
                                jQuery(document).find('#subscribeSuccess').show();
                            }
                        })
                        .fail(function(xhr) {
                            console.error('Subscribe error:');
                            console.error(xhr.responseMessage);

                            jQuery(document).find('#subscribeError').show();
                        });       
                    }
                });
            });
        }
    });
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

//
//function articleScroll() {
//var subscribe = $('#subscribe-banner');
//    var absoluteOffsetBottom = 0;
//    var absoluteOffsetTop = subscribe.offset().top;
//    var width = subscribe.width();
//    var sharedButtons = $('.a2a_kit.a2a_vertical_style');
//    var $widgetHome = $('#single-post-widget-home');
//    var widgetHomeHeight = $widgetHome.outerHeight() + parseInt($widgetHome.css('margin-top'));
//var scrollTop = $(window).scrollTop();
//            var footer = $('#footer-area');
//            var comments = $('#comments');
//
//            if (scrollTop < absoluteOffsetTop) {
//                // top position
//
//                subscribe.css({
//                    'position': 'relative',
//                    'top': 'auto',
//                    'width': width
//                }).removeClass('absolute-subscribe fixed-subscribe');
//
//            } else {
//                // bottom position
//                if (scrollTop + subscribe.height() > footer.offset().top - 100 - widgetHomeHeight) {
//                    var a = scrollTop + subscribe.height() - footer.offset().top + 229 + widgetHomeHeight;
//                    var sharedButtonPosition = sharedButtons.offset().top;
//
//                    if (!subscribe.hasClass('absolute-subscribe')) {
//                        absoluteOffsetBottom = subscribe.offset().top - a;
//
//                        subscribe.css({
//                            'position': 'absolute',
//                            'top': absoluteOffsetBottom,
//                            'width': width
//                        }).addClass('absolute-subscribe').removeClass('fixed-subscribe');
//                        
//                        sharedButtons.css({
//                          'position': 'absolute',
//                            'top': sharedButtonPosition,
//                        });
//                    }
//                } else if (scrollTop > subscribe.offset().top - 20 || subscribe.hasClass('absolute-subscribe')) {
//                    // fixed position
//                    if (!subscribe.hasClass('fixed-subscribe')) {
//                        subscribe.css({
//                            'position': 'fixed',
//                            'top': 20,
//                            'width': width
//                        }).removeClass('absolute-subscribe').addClass('fixed-subscribe');
//                        
//                        sharedButtons.css({
//                          'position': 'fixed',
//                            'top': 132,
//                        });
//                    }
//                }
//            }
//            }
//
//
//$(window).load(function(){ 
//var subscribe = $('#subscribe-banner');
//    var absoluteOffsetBottom = 0;
//    var absoluteOffsetTop = subscribe.offset().top;
//    var width = subscribe.width();
//    var sharedButtons = $('.a2a_kit.a2a_vertical_style');
//    var $widgetHome = $('#single-post-widget-home');
//    var widgetHomeHeight = $widgetHome.outerHeight() + parseInt($widgetHome.css('margin-top'));
//    
//if ( $('article.post').length ) {
//        
//    articleScroll();
//    
//  if (window.matchMedia("(min-width: 992px)").matches) {
//        $(window).scroll(function() {
//          var scrollTop = $(window).scrollTop();
//
//            var footer = $('#footer-area');
//            var comments = $('#comments');
//
//            if (scrollTop < absoluteOffsetTop) {
//                // top position
//
//                subscribe.css({
//                    'position': 'relative',
//                    'top': 'auto',
//                    'width': width
//                }).removeClass('absolute-subscribe fixed-subscribe');
//
//            } else {
//                // bottom position
//                if (scrollTop + subscribe.height() > footer.offset().top - 100 - widgetHomeHeight) {
//                    var a = scrollTop + subscribe.height() - footer.offset().top + 229 + widgetHomeHeight;
//                    var sharedButtonPosition = sharedButtons.offset().top;
//
//                    if (!subscribe.hasClass('absolute-subscribe')) {
//                        absoluteOffsetBottom = subscribe.offset().top - a;
//
//                        subscribe.css({
//                            'position': 'absolute',
//                            'top': absoluteOffsetBottom,
//                            'width': width
//                        }).addClass('absolute-subscribe').removeClass('fixed-subscribe');
//                        
//                        sharedButtons.css({
//                          'position': 'absolute',
//                            'top': sharedButtonPosition,
//                        });
//                    }
//                } else if (scrollTop > subscribe.offset().top - 20 || subscribe.hasClass('absolute-subscribe')) {
//                    // fixed position
//                    if (!subscribe.hasClass('fixed-subscribe')) {
//                        subscribe.css({
//                            'position': 'fixed',
//                            'top': 20,
//                            'width': width
//                        }).removeClass('absolute-subscribe').addClass('fixed-subscribe');
//                        
//                        sharedButtons.css({
//                          'position': 'fixed',
//                            'top': 132,
//                        });
//                    }
//                }
//            }
//        });
//    }
//    }
//  
//    
//  function addEvent(obj, evt, fn) {
//      if (obj.addEventListener) {
//        obj.addEventListener(evt, fn, false);
//    }
//    else if (obj.attachEvent) {
//        obj.attachEvent("on" + evt, fn);
//     }
//   }
//   
//   var pageY;   
//   function Run_exit() {
//      if (pageY < 200) {
//     $('#exit-hack').trigger('mouseover');
//    }
//   }
//  
//   $(document).on( "mousemove", function( event ) {
//      //$("#exit-hack").text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
//    pageY = event.pageY;
//   });
//  
//  addEvent(document, "mouseout", function(e) {
//    e = e ? e : window.event;
//    var from = e.relatedTarget || e.toElement;
//     if (!from || from.nodeName == "HTML") {
//        Run_exit();
//     }
//    });
//
//    var click_toggle;
//  click_toggle = 0;
//  
//  $(document).on('click', '.submit', function (e) {
//        
//            if (click_toggle == 0) {
//                e.preventDefault();
//            }
//            if (click_toggle == 0) {
//
//                    if ($(this).prev('.email-field').val().length <= 6) {
//
//                        e.preventDefault();
//                        if (!$(this).next('.error').length) {
//                            $(this).after('<p class="error">Please fill out the form</p>');
//                        } else {
//                            $(this).next('.error').html('Please fill out the form');
//                        }
//
//                    } else {
//
//                        if (validateEmail($(this).prev('.email-field').val())) {
//                            $(this).hide();
//                            $('.wp-subscribe .error').remove();
//                            //}
//                            click_toggle = 1;
//                            $(this).trigger('click');
//                        } else {
//
//                            if (!$(this).next('.error').length) {
//                                $(this).after('<p class="error">Please enter valid email</p>');
//                            } else {
//                                $(this).next('.error').html('Please enter valid email');
//                            }
//
//                        }
//
//                        if (click_toggle !== 1) {
//                            if (!$(this).next('.error').length) {
//                                $(this).after('<p class="error">Please enter valid email</p>');
//                            } else {
//                                $(this).next('.error').html('Please enter valid email');
//                            }
//                        }
//                    }
//                
//                    if (click_toggle !== 1) {
//                        if (!$(this).next('.error').length) {
//                            $(this).after('<p class="error">Please fill out the form</p>');
//                        } else {
//                            $(this).next('.error').html('Please fill out the form');
//                        }
//                    }
//                
//            }
//            click_toggle == 0;
//        });
//});