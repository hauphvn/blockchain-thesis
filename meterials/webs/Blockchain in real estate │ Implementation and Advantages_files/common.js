(function ($) {
  $(function () {

    /**
     * tooltips
     */
    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();
    });

    // Add ID to each item
    $('li.menu-item').each(function (e) {
      $(this).attr('id', $(this).prop('classList').item($(this).prop('classList').length - 1));
    });

    $(document).on('click', '.menu-item-has-children > a', function (ev) {
      ev.preventDefault();

      var currentItem = $(this).parent('.menu-item');
      var currentItemSubmenu = currentItem.children('.sub-menu');

      $('.sub-menu').each(function () {
        var sumbenu = $(this);
        var item = sumbenu.closest('.menu-item');

        if (typeof item !== 'undefined') {
          if (item.attr('id') === currentItem.attr('id') && !currentItemSubmenu.hasClass('active')) {
            sumbenu.show().addClass('active');
          } else {
            sumbenu.hide().removeClass('active');
          }
        }
      });
    });

    $(document).on('click', function (ev) {
      if (
        $(ev.target).closest('.menu-item').length === 0 &&
        $(ev.target).closest('.sub-menu').length === 0
      ) {
        $('.sub-menu').hide().removeClass('active');
      }
    });

    // Developers cards slider
    if ($('.app-developer-card-slider').length > 0) {
      $('.app-developer-card-slider').not('.slick-initialized').slick({
        centerMode: false,
        slidesToShow: 4,
        arrows: false,
        autoplay: false,
        lazyLoad: 'ondemand',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 989,
            settings: {
              arrows: true,
              centerMode: true,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 660,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: false,
              slidesToShow: 1
            }
          }
        ]
      });
    }

    // Developers cards slider
    if ($('.app-technology-developer-card-slider').length > 0) {
      $('.app-technology-developer-card-slider').not('.slick-initialized').slick({
        centerMode: false,
        slidesToShow: 3,
        arrows: true,
        autoplay: false,
        lazyLoad: 'ondemand',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 660,
            settings: {
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: false,
              slidesToShow: 1
            }
          }
        ]
      });
    }

    // Developers cards slider
    if ($('.app-developer-card-slider-new').length > 0) {
      $('.app-developer-card-slider-new').not('.slick-initialized').slick({
        centerMode: false,
        slidesToShow: 8,
        arrows: true,
        autoplay: false,
        lazyLoad: 'ondemand',
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 7
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 730,
            settings: {
              centerMode: true,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 670,
            settings: {
              centerMode: true,
              centerPadding: '0',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 570,
            settings: {
              centerMode: true,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              centerMode: false,
              slidesToShow: 1
            }
          },
        ]
      });
    }

    // Project Cards
    if ($('.app-projects-slider').length > 0) {
      $('.app-projects-slider').not('.slick-initialized').slick({
        settings: "unslick",
        lazyLoad: 'ondemand',
        responsive: [
          {
            breakpoint: 9200,
            arrows: false,
            settings: "unslick"
          },
          {
            breakpoint: 991.9,
            settings: {
              settings: "slick",
              arrows: false,
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 767.9,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 420,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 1
            }
          }
        ]
      });
    }

    // Developers cards slider horz
    if ($('.app-developer-slider-horz').length > 0) {
      $('.app-developer-slider-horz').not('.slick-initialized').slick({
        settings: "unslick",
        lazyLoad: 'ondemand',
        responsive: [
          {
            breakpoint: 9200,
            settings: "unslick"
          },
          {
            breakpoint: 992,
            settings: {
              settings: "slick",
              arrows: true,
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 481,
            settings: {
              centerMode: false,
            }
          }
        ]
      });
    }

    // Clients cards slider
    if ($('.app-clients-card-slider').length > 0) {
      $('.app-clients-card-slider').not('.slick-initialized').slick({
        centerMode: false,
        slidesToShow: 4,
        arrows: false,
        autoplay: false,
        lazyLoad: 'ondemand',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 760,
            settings: {
              centerPadding: '20px',
              slidesToShow: 1
            }
          }
        ]
      });
    }

    // Projects cards slider
    if ($('.app-projects-card-slider').length > 0) {
      $('.app-projects-card-slider').not('.slick-initialized').slick({
        centerMode: false,
        slidesToShow: 4,
        arrows: true,
        lazyLoad: 'ondemand',
        autoplay: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 989,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 660,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 1
            }
          }
        ]
      });
    }

    /**
     * dts projects
     */
    $('.app-dts-projects-cards-wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.app-dts-projects-cards-nav',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      arrows: false,
      centerPadding: '0',
      lazyLoad: 'ondemand',
      responsive: [
        {
          breakpoint: 1279.9,
          settings: {
            settings: "slick",
            arrows: false,
            dots: false,
            centerMode: true,
            centerPadding: 0,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 991.9,
          settings: {
            settings: "slick",
            arrows: false,
            dots: false,
            centerMode: true,
            centerPadding: 0,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767.9,
          settings: {
            settings: "slick",
            arrows: false,
            dots: false,
            centerMode: true,
            centerPadding: 0,
            slidesToShow: 1
          }
        }
      ]
    });


    $('.app-dts-projects-cards-nav').slick({
      slidesToShow: 11,
      slidesToScroll: 1,
      asNavFor: '.app-dts-projects-cards-wrapper',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      arrows: false,
      centerPadding: '0'

    });


    /**
     * dts project modal slider
     */
    if ($('.app-project-modal-slider').length > 0) {
        $('.app-project-modal-slider').not('.slick-initialized').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          focusOnSelect: true,
          lazyLoad: 'ondemand',
          fade: true,
          arrows: true,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                centerMode: true,
                fade: false,
                centerPadding: '50px',
                arrows: false,
                slidesToShow: 1
              }
            },
            {
              breakpoint: 460,
              settings: {
                centerMode: true,
                arrows: false,
                fade: false,
                centerPadding: '20px',
                slidesToShow: 1
              }
            }
          ]
        });
    }


    // clutch cards slider
    if ($('.app-clutch-card-slider').length > 0) {
      $('.app-clutch-card-slider').not('.slick-initialized').slick({
        centerMode: false,
        slidesToShow: 4,
        arrows: false,
        lazyLoad: 'ondemand',
        autoplay: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 989,
            settings: {
              centerMode: true,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 660,
            settings: {
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: false,
              slidesToShow: 1
            }
          }
        ]
      });
    }

    // testimonials slider
    if ($('.app-testimonials-slider').length > 0) {
      $('.app-testimonials-slider').not('.slick-initialized').slick({
        centerMode: false,
        slidesToShow: 1,
        infinite: true,
        arrows: false,
        dots: true,
        lazyLoad: 'ondemand',
        autoplay: true
      });
    }

    // Video slider
    if ($('.app-video-slider').length > 0) {
      $('.app-video-slider').not('.slick-initialized').slick({
        centerMode: false,
        slidesToShow: 1,
        arrows: true,
        dots: true,
        touchThreshold: 100,
        fade: true,
        infinite: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        autoplay: true,
        autoplaySpeed: 10000,
        lazyLoad: 'ondemand',
        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: false,
            }
          }
        ]
      });
    }

    /* FAQ Collapse */
    function synchronizeState(box) {
      var toggle = box.find('[data-toggle="collapse"]');
      var isExpanded = toggle.attr('aria-expanded') === 'true';

      if (isExpanded) {
        box.removeClass('faq-collapsed');
      } else {
        box.addClass('faq-collapsed');
      }
    }

    $('.faq-question-box').each(function () {
      synchronizeState($(this));
    });

    $('.collapse').on('shown.bs.collapse hidden.bs.collapse', function () {
      var box = $(this).closest('.faq-question-box');
      synchronizeState(box);
    });

    /* Remove class 'active' from project-card-wrapper by any click */
    $(document).on('click', function () {
      if ($('.project-card-wrapper.active').length > 0) {
        $('.project-card-wrapper.active').removeClass('active');
      }
    });

    /* Autostart video after opening modals */
    $('body').on('shown.bs.modal', '.modal', function (ev) {
      if($(ev.target).find('video')[0] !== undefined) {
        $(ev.target).find('video')[0].play();
      }
    });

    /* Autostop video after closing modals */
    $('body').on('hidden.bs.modal', '.modal', function () {
      $('iframe[src*="youtube.com"]').each(function () {
        var replaceTo = typeof $(this).attr('original-src') !== 'undefined'
          ? $(this).attr('original-src')
          : $(this).attr('src')
        ;

        $(this).attr('src', replaceTo);
      });

      $('video').each(function () {
        $(this)[0].pause();
      });
    });

    /* Anchors */
    $('.app-anchor, [data-is-anchor="1"]').on('click', function (ev) {
      var upper = 70 + 10;
      var scrollSpeed = 1000;
      var chosenAnchor = $(this).attr('href');

      if (
        typeof chosenAnchor !== 'undefined' &&
        chosenAnchor.length > 1 &&
        $(chosenAnchor).offset() !== undefined &&
        /\#/.test(chosenAnchor)
      ) {
        ev.preventDefault();

        $('html, body').animate(
          {'scrollTop': $(chosenAnchor).offset().top - upper},
          scrollSpeed
        );
      }
    });

    /**
     * anchor transition animation
     */
    $(".app-landing-horizontal-menu").on("click", "a[href^='#']", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
          top = $(id).offset().top,
          bodyOffset = parseInt($('body').css("padding-top")),
          parentWrapperOffset = parseInt($('.learning-landing-page').css("padding-top"));

      $('body,html').animate({scrollTop: top - (bodyOffset + parentWrapperOffset)}, 1400);
    });



    var menu_selector = ".app-landing-horizontal-menu";

    function onScroll() {
      var scroll_top = $(document).scrollTop();
      $(menu_selector + " li").each(function () {
        var hash = $(this).children('a').attr("href");
        var target = $(hash);
        var bodyOffset = parseInt($('body').css("padding-top"));
        var parentWrapperOffset = parseInt($('.learning-landing-page').css("padding-top"));
        if (target.position().top - (bodyOffset + parentWrapperOffset + 1) <= scroll_top && target.position().top + target.outerHeight() - (bodyOffset + parentWrapperOffset + 1) > scroll_top) {
          $(menu_selector + " li.active").removeClass("active");
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }
      });
    }

    $(document).ready(function () {
      $(document).on("scroll", onScroll);
    });


    /**
     * toggle class in the blocks FAQ
     */
    $('.app-faq-card').find('a').on('click', function () {
      var toggleContainer = $(this).closest('.faq-card');
      if (!toggleContainer.hasClass('opened')) {
        toggleContainer.addClass('opened');
      } else {
        toggleContainer.removeClass('opened');
      }
    });


    if ($('.app-project-modal-slider').length > 0) {
        $('.app-project-modal-slider').not('.slick-initialized').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          focusOnSelect: true,
          arrows: true,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                centerMode: true,
                centerPadding: '50px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 460,
              settings: {
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
              }
            }
          ]
        });
    }


    /**
     * Video reviews slider
     */
    $('.app-video-reviews-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    });


    /* Search */
    $(document).on('click', '[role="search"]', function() {
      $(document).on('click', ':not([role="search"])', function(e) {
        if(!$(e.target).parents('[role="search"]').length) {
          $(document).find('[role="search"]').removeClass('active-form');

          $(document).off('click', ':not([role="search"])');
        }
      });
    });

    $(document).on('click', '[role="search"] i.fa-search', function() {
      if($(this).parents('form').find('[name="s"]').val().length) {
        $(this).parents('form').submit();
      }
    });

    /* Video Pop-Up */
    $(document).on('click', '.help-video-popup-link', function() {
      $(this).find('video').trigger('pause');

      $(document).find('#help-video-popup').modal('show');
    });

    /* Featured Project Pop-Up */
    $(document).on('click', '.dts-projects-cards-wrapper .slide-wrap', function(e) {
      e.preventDefault();

      $(document).find('#modalProject').modal('show');



      var projectId = $(this).attr('data-project-id');

      var projectSlide = $(document).find('.app-project-modal-slider').find('div.slick-slide[data-project-id="' + projectId + '"]:not(.slick-cloned)');
      var projectSlideIndex = projectSlide.attr('data-slick-index');
      var projectFullImage = projectSlide.attr('data-full-image');

      projectSlide.find('.modal-project-image img').attr('src', projectFullImage);
      $(document).find('.app-project-modal-slider').slick('slickGoTo', projectSlideIndex);

      $(document).find('.app-project-modal-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var nextProjectSlide = $(document).find('.app-project-modal-slider').find('div.slick-slide[data-slick-index="' + nextSlide + '"]');
        var nextProjectFullImage = nextProjectSlide.attr('data-full-image');

        nextProjectSlide.each(function() {
            $(this).find('.modal-project-image img').attr('src', nextProjectFullImage);
        })
      });
    });
    /*var isProjectModalAlreadyLoading = false;
    $(document).on('click', '.dts-projects-cards-wrapper .slide-wrap', function(e) {
      e.preventDefault();

      if(!isProjectModalAlreadyLoading) {
        var projectId = $(this).attr('data-project-id');

        isProjectModalAlreadyLoading = true;

        if($(document).find('#modalProject') !== undefined && $(document).find('#modalProject').length && $(document).find('#modalProject').attr('data-project-id') == projectId) {
          setTimeout(function() {
            isProjectModalAlreadyLoading = false;
          }, 1000);

          $(document).find('#modalProject').modal('show');
        } else {
          $.post('/wp-admin/admin-ajax.php', 'action=load_project_info&project_id=' + projectId).done(function(response) {
            $(document).find('#modalProject').remove();

            $('body').append(response.data);

            $(document).find('#modalProject').modal('show');

            setTimeout(function() {
              isProjectModalAlreadyLoading = false;
            }, 1000);
          });
        }
      }

      return false;
    });*/

    /* Exit PopUp on submit */
    var isPopUpFormValidated = false;
    $('.mc-embedded-subscribe-form').on('submit', function(e) {
        if(!isPopUpFormValidated) {
          e.preventDefault();
          var form = $(this);
              form.find('.error').html('');

          grecaptcha.execute(window.reCaptchaV3SiteKey, {action: 'popup_form'}).then(function(token) {
              $.post('/wp-admin/admin-ajax.php', 'action=recaptcha_validation&captcha_action=popup_form&token=' + token).done(function(response) {
                  var data = JSON.parse(response);
                  if(!data) {
                    form.find('.error').html('Something went wrong');
                  } else {
                    isPopUpFormValidated = true; 
                    form.submit();
                    $('.exitpopup-modal-window .close_icon').click();
                  }
              });
          });
        } else {
           isPopUpFormValidated = false;
        }
    });
  })
})(jQuery);
