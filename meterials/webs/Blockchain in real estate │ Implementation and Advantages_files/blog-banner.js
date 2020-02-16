jQuery(document).ready(function() {
	var blogBanner = jQuery(document).find('.content-blog-banner');

	if(!jQuery.cookie('viewed_cookie_policy') || jQuery.cookie('viewed_cookie_policy') !== 'yes' || jQuery(document).find('#page').hasClass('hide-blog-banner')) {
		return false;
	}

	if(blogBanner.length) {
		var sessionStorage = window.sessionStorage;
		var bannerShowStatus = sessionStorage.getItem('banner_showed_status');
		if(bannerShowStatus == 2) {
			blogBanner.removeClass('hidden');
		}
		else {
			sessionStorage.setItem('banner_showed_status', 1);
			setTimeout(function() {
				blogBanner.removeClass('hidden');
				sessionStorage.setItem('banner_showed_status', 2);
				jQuery.post('/wp-admin/admin-ajax.php', {
					'action': 'update_banner_session',
					'banner_id': blogBanner.attr('data-id'),
					'banner_type': blogBanner.attr('data-type'),
					'post_id': blogBanner.attr('data-post-id'),
				});
			}, (bannerShowStatus !== null && bannerShowStatus == 1 ? 3000 : 15000));
		}
	}

	jQuery(document).on('click', "[role='close-blog-banner']", function() {
		var ths = jQuery(this);
		jQuery.post('/wp-admin/admin-ajax.php', {
			'action': 'hide_banner'
		}).done(function() {
			ths.parents('.content-blog-banner').remove();
		});
		return false;
	});
});