$(function(){

  $.ajax({
		url: 'https://www.instagram.com/explore/tags/hike/?__a=1',
		dataType: 'json',
		type: 'get',
		cache: false,
		success: function(data) {
			$(data.graphql.hashtag.edge_hashtag_to_media.edges).each(function(index, value) {
	      $('.owl-carousel').append('<div class="insta-js"><a href="https://www.instagram.com/p/'+value.node.shortcode+'/" target="_blank"><img class="img-fluid" src="'+value.node.thumbnail_resources[4].src+'" ><span class="fab fa-instagram"></span><div class="bg-bl"></div></a></div>');
        console.log(value);
        return index<20-1;
			});
      $('.owl-carousel').owlCarousel({
        items:6,
        loop:true,
        margin:5,
        autoplay:true,
        autoplayTimeout:4500,
        autoplayHoverPause:true,
        dots: false,
        autoplaySpeed:1000,
        responsiveClass:true,
        nav: true,
        navText: ["<div class='owl-custom-prev'><i class='fas fa-chevron-left'></i></div>","<div class='owl-custom-next'><i class='fas fa-chevron-right'></i></div>"],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1200:{
                items:5,
            },
            1400:{
                items:6,
            }
        }
      });
		}
	});


});
