function toggleFab(isClients) {
    var prime = document.getElementById("dv-prime");
    prime.classList.toggle("is-float");
    var chat = document.getElementsByClassName("dv-chat");
    var cNode = chat[0];
    cNode.classList.toggle("is-visible");

    var fab = document.getElementsByClassName("dv-fab");
    var fNode = fab[0];
    fNode.classList.toggle("is-visible");
    var closechatbot = document.getElementById("dv-close-chat-bot");
    closechatbot.classList.toggle("is-float");
}

function playChatAudio() {
    var chatAudio = document.createElement("audio");
    chatAudio.src = '/wp-content/themes/dazzling/inc/chat.mp3';
    chatAudio.play();
}

function openChat(isClients) {
    if(!jQuery.cookie('viewed_cookie_policy') || jQuery.cookie('viewed_cookie_policy') !== 'yes' || jQuery(document).find('#dv-prime').hasClass('is-visible')) {
        return false;
    }

    toggleFab(isClients);

    sessionStorage.setItem('chat_showed' + (isClients ? '_clients' : ''), 1);

    playChatAudio();
}

jQuery(document).ready(function($){
    var isClients = document.title.indexOf('Clients') !== -1;
    var fabTimeout = null;

    jQuery('#dv-prime').on("click",function () {
        sessionStorage.setItem('chat_showed' + (isClients ? '_clients' : ''), 1);
        
        toggleFab(isClients);

        $(document).find('.help-video-popup-link').find('video').trigger('play');
    });
    jQuery('#dv-close-chat-bot').on("click",function () {
        sessionStorage.setItem('chat_closed' + (isClients ? '_clients' : ''), 1);

        toggleFab(isClients);
    });

    if(!sessionStorage.getItem('chat_closed' + (isClients ? '_clients' : '')) && !sessionStorage.getItem('chat_showed' + (isClients ? '_clients' : ''))) {
        setTimeout(function() {
            if($(document).find('.footer-blog-banner') === undefined || !$(document).find('.footer-blog-banner').length) {
                openChat(isClients);
            }
        }, isClients ? 5000 : 15000);

        jQuery(document).on('click', "[role='close-blog-banner']", function() {
            clearTimeout(fabTimeout);
            
            setTimeout(function() {
                openChat(isClients);
            }, 5000);
        });
    }
});
// Search widget script
jQuery(document).ready(function($){
    jQuery('.search-widget-form').on("click",function () {
        jQuery('.search-widget-form').addClass('active-form');
    })
});
