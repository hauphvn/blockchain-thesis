(function($) { $(function() {  
    $(document).on('click', '.app-blog-banner-button', function(ev) { 
        if (
            $(ev.target).attr('role') !== 'close-blog-banner' && 
            $(ev.target).closest('[role="close-blog-banner"]').length === 0
        ) {
            var isSubscribe = $(this).find('.app-subscribe').length > 0;
            var title = decodeURIComponent($(this).data('banner-title'));
            var eventData = {
                hitType: 'event',
                eventCategory: 'Blog Banner',
                eventAction: isSubscribe ? 'subscription-modal-open' : 'redirect',
                eventLabel: 'Banner "' + title + '"'
            };
            
            ga('send', eventData);
        }    
    });
    
    
    
    
    
    /* Track the source of registration */
    $(document).on('click', 'header a[href*=get_started]', function(ev) { 
        ga('send', 'event', 'form', 'getStartedhead');
    });
    
    $(document).on('click', '.top-head-banner a[href*=get_started]', function(ev) { 
        ga('send', 'event', 'form', 'getStartedfirstscreen')
    });
    
    $(document).on('click', '.developer-card-section a[href*=get_started]', function(ev) {
        ga('send', 'event', 'form', 'getStartedfirstscreen')
    });
    
    $(document).on('click', '.footer-section a[href*=get_started]', function(ev) {
        ga('send', 'event', 'form', 'getStartedfirstscreen')
    });

    
    

    
    /* Set User Id */
    $.ajax({
        url: '/wp-admin/admin-ajax.php',
        method: 'POST',
        dataType: 'json',
        data: {action: 'get_current_dashboard_user_id'}
    }).done(function(response) {      
        if (response.result == 1) {
            var userId = response.data.userId;
            gtag('set', {'user_id': userId});
            ga('set', 'userId', userId);
        }
    });
}) })(jQuery)
