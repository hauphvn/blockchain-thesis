var main={bigImgEl:null,numImgs:null,init:function(){$(window).scroll(function(){if($(".navbar").offset().top>50){$(".navbar").addClass("top-nav-short");$(".navbar-custom .avatar-container").fadeOut(500);}else{$(".navbar").removeClass("top-nav-short");$(".navbar-custom .avatar-container").fadeIn(500);}});$('#main-navbar').on('show.bs.collapse',function(){$(".navbar").addClass("top-nav-expanded");});$('#main-navbar').on('hidden.bs.collapse',function(){$(".navbar").removeClass("top-nav-expanded");});$('#main-navbar').on("click",".navlinks-parent",function(e){var target=e.target;$.each($(".navlinks-parent"),function(key,value){if(value==target){$(value).parent().toggleClass("show-children");}else{$(value).parent().removeClass("show-children");}});});var menus=$(".navlinks-container");if(menus.length>0){var navbar=$("#main-navbar ul");var fakeMenuHtml="<li class='fake-menu' style='display:none;'><a></a></li>";navbar.append(fakeMenuHtml);var fakeMenu=$(".fake-menu");$.each(menus,function(i){var parent=$(menus[i]).find(".navlinks-parent");var children=$(menus[i]).find(".navlinks-children a");var words=[];$.each(children,function(idx,el){words=words.concat($(el).text().trim().split(/\s+/));});var maxwidth=0;$.each(words,function(id,word){fakeMenu.html("<a>"+word+"</a>");var width=fakeMenu.width();if(width>maxwidth){maxwidth=width;}});$(menus[i]).css('min-width',maxwidth+'px')});fakeMenu.remove();}
main.initImgs();},initImgs:function(){if($("#header-big-imgs").length>0){main.bigImgEl=$("#header-big-imgs");main.numImgs=main.bigImgEl.attr("data-num-img");var imgInfo=main.getImgInfo();var src=imgInfo.src;var desc=imgInfo.desc;main.setImg(src,desc);var getNextImg=function(){var imgInfo=main.getImgInfo();var src=imgInfo.src;var desc=imgInfo.desc;var prefetchImg=new Image();prefetchImg.src=src;setTimeout(function(){var img=$("<div></div>").addClass("big-img-transition").css("background-image",'url('+src+')');$(".intro-header.big-img").prepend(img);setTimeout(function(){img.css("opacity","1");},50);setTimeout(function(){main.setImg(src,desc);img.remove();getNextImg();},1000);},6000);};if(main.numImgs>1){getNextImg();}}},getImgInfo:function(){var randNum=Math.floor((Math.random()*main.numImgs)+1);var src=main.bigImgEl.attr("data-img-src-"+randNum);var desc=main.bigImgEl.attr("data-img-desc-"+randNum);return{src:src,desc:desc}},setImg:function(src,desc){$(".intro-header.big-img").css("background-image",'url('+src+')');if(typeof desc!==typeof undefined&&desc!==false){$(".img-desc").text(desc).show();}else{$(".img-desc").hide();}}};document.addEventListener('DOMContentLoaded',main.init);