$(function(){
	
    $('.mosaico .container .mosaico-wraper').slick({
		centerMode: false,
		slidesToShow:6,
		arrows:false,
		responsive:[

		{
			breakpoint:768,
			settings:{
				arrows: false,
				centerMode:true,
				slidesToShow:3

			}
		},

		{
			breakpoint:580,
			settings:{
				arrows:false,
				centerMode:true,
				slidesToShow:2
			}
		},

		{
			breakpoint:380,
			settings:{
				arrows:false,
				centerMode:true,
				slidesToShow:1

			}
		}

		]
		});
		


    	$('.informativo .list-block ').slick({
		centerMode:false,
		slidesToShow:1,
		arrows:false,
		dots:true,
		infinite:true,

	
		});



		$('.informativo2 .list-block2 ').slick({
		centerMode:false,
		slidesToShow:1,
		arrows:false,
		dots:true,
		infinite:true,
		autoplay:true,
		autoplaySpeed:2000,

	
		});




	
})