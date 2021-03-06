(function($) { $(function() { 
    var validateFunctions = {
        bulk: function (params, functionNames, glue) {
            var errors = [];
            
            functionNames.forEach(function(functionName) { 
                if (functionName.indexOf('|') !== -1) {
                    var orErrors = [];
                    var passed = false;
                    functionName.split('|').forEach(function(orFunctionName) {
                        var orErrorMessage = validateFunctions[orFunctionName](params);
                        if (typeof orErrorMessage !== 'undefined') {                            
                            orErrors.push(orErrorMessage);
                        } else {
                            passed = true;
                        }
                    });                    
                    if (!passed) {
                        errors.push(orErrors.join(' or '));
                    }
                } else {                    
                    if (typeof validateFunctions[functionName](params) !== 'undefined') {
                        errors.push(validateFunctions[functionName](params));
                    }
                }           
            });

            if (errors.length > 0) {
                return errors.join(glue);
            }
        },
        className: function(params) {
            if (typeof params.className === 'undefined') {
                return 'Class Name not specified';
            }
        },
        target: function(params) {
            if (typeof params.target === 'undefined') {
                return 'Target not specified';
            }     
            if ($(params.target).length === 0) {
                return 'Target does not exist';
            }
        },
        slide: function(params) {
            if (typeof params.slide === 'undefined') {
                return 'Slide not specified';
            }            
        },
        slideContains: function(params) {
            var target = $(params.target);
            
            if (typeof params.slideContains === 'undefined') {
                return '"Slide Contains" not specified';
            }             
            if (target.find(params.slideContains).length === 0) {
                return 'Slide contains element "' + params.slideContains + '" not found' ;
            }
        }
    };
    var validators = {
        setClass: function(params) {
            return validateFunctions.bulk(params, ['className', 'target'], '. ');
        },
        scrollTo: function(params) {
            return validateFunctions.target(params);
        },
        slideTo: function (params) {
            return validateFunctions.bulk(params, ['target', 'slide|slideContains'], '. ');
        },
        openModal: function(params) {
            return validateFunctions.target(params);
        },
        startEmbeddedVideo: function(params) {
            return validateFunctions.target(params);
        },
        startVideo: function(params) {
            return validateFunctions.target(params);
        }
    };
    
    var handlers = {
        setClass: function(params) {
            var target = $(params.target);
            var className = params.className;
            
            target.addClass(className);
        },         
        scrollTo: function(params) { 
            var target = $(params.target);
            var speed = Number(params.speed) || 1000;
            var upper = Number(params.upper) || 70+10;
            
            setTimeout(function() {
                $('html, body').animate(
                    {'scrollTop': $(target).offset().top - upper},
                    speed
                );
            }, 300);
        },
        slideTo: function(params) {
            var target = $(params.target);
            var slide = typeof params.slide !== 'undefined' 
                ? Number(params.slide) 
                : target.find(params.slideContains).closest('.slick-slide').data('slick-index')
            ;

            target.slick('slickGoTo', slide);            
        },
        openModal: function(params) {
            var target = $(params.target);
            
            target.modal('show');         
        },
        startEmbeddedVideo: function(params) {
            var target = $(params.target);
            var originalSrc = target.attr('src');
            
            if (originalSrc.indexOf('?') === -1) {
                target[0].src += '?autoplay=1';
            } else {
                target[0].src += '&autoplay=1';
            }
            
            target.attr('original-src', originalSrc);
        },
        startVideo: function(params) {
            var video = $(params.target)[0];
            video.play();
        }        
    };
    
    function execute(sequence) {
        sequence.forEach(function(action) { 
            var params = action.params || {};
                        
            if (typeof action.name === 'undefined') {
                console.log('Action Name is not defined. Action skipped');
                console.log(action);
                return false;
            }
            
            if (typeof handlers[action.name] === 'undefined') {
                console.log('There is no handler for action "' + action.name + '". Action skipped');
                return false;            
            }

            if (typeof validators[action.name] !== 'undefined') {
                var errorMessage = validators[action.name](params);
                if (typeof errorMessage !== 'undefined') {
                    console.log(errorMessage);
                    return false;
                }
            }
            
            if (typeof action.platform !== 'undefined') {
                var currentPlatform = $(window).width() < 992 ? 'mobile' : 'desktop';
                var platforms = $.isArray(action.platform) ? action.platform : [action.platform];
                
                if (platforms.indexOf(currentPlatform) === -1) {
                    console.log('Action "' + action.name + '" is not for current platform. Action skipped.');
                    return false;
                }
            }

            if (typeof action.delay !== 'undefined') {
                var delay = Number(action.delay);
                setTimeout(function() { 
                    handlers[action.name](params);
                }, delay);
            } else {
                handlers[action.name](params);
            }
        });  
    }
    
    
    
    
    
    if ($('.app-startup').length > 0) {
        var sequence = JSON.parse(decodeURIComponent($('.app-startup').data('sequence')));
        execute(sequence);
    } else if ($('.app-startups').length > 0 && window.location.hash.length > 0) {
        var sequenceHash = window.location.hash;
        var sequences = JSON.parse(decodeURIComponent($('.app-startups').data('sequences'))); 
      
        if (typeof sequences[sequenceHash] === 'undefined') {
            console.log('Sequence ' + sequenceHash + ' not found');
            return false;
        }
        
        var sequence = sequences[sequenceHash];    
        execute(sequence);
    }
}) })(jQuery);
