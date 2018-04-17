var widthClassOptions = [];
var widthClassOptions = ({
		bestseller       : 'bestseller_default_width',		
		featured         : 'featured_default_width',
		special          : 'special_default_width',
		latest           : 'latest_default_width',
		related          : 'related_default_width',
		additional       : 'additional_default_width',
		tabbestseller    : 'tabbestseller_default_width',		
		tabfeatured      : 'tabfeatured_default_width',
		tabspecial       : 'tabspecial_default_width',
		tablatest        : 'tablatest_default_width',
		module           : 'module_default_width',
		mainslider		 : 'mainslider_default_width',
		testimonial		 : 'testimonial_default_width',
		blog			 : 'blog_default_width'
});


$(document).ready(function(){
	/*$('.breadcrumb').insertAfter('#content h2');*/
	$('ul.breadcrumb').before($('#content h2'));
	//$('#content > h1').prependTo('.content_top_bredcum .container');
	$('ul.breadcrumb').before($('#content > h1'));
	$('#content select').customSelect();
	
	$(".search").click(function() {
			$('.searchtoggle').toggle('fast', function() {
			});
			$('#search .input-lg').attr('autofocus', 'autofocus').focus();
		});
	
	$('.write-review').on('click', function() {
	$('html, body').animate({scrollTop: $('#tabs_info').offset().top}, 'slow');
	});
	
	//toggle closed when other open
		
		$(".header_search").click(function(){
           	$(".myaccount-menu").slideUp("slow");
		   	$(".cart-menu").slideUp("slow");
        	return false;
    	});
		
        $(".myaccount > .dropdown-toggle").click(function(){
			if ($("#form-currency.active")[0]){
					$(".currency-menu").css('display', 'none');
				}
			if ($("#form-language.active")[0]){
					$(".language-menu").css('display', 'none');
				}
		   	$(".cart-menu").slideUp("slow");
       		$('.searchtoggle').css('display', 'none');
			$(".myaccount-menu").slideToggle("slow");
			$(this).toggleClass("active");
        	return false;
    	});
	
	
		$("#cart .dropdown-toggle").click(function(){
            $(this).toggleClass("active");
			$(".cart-menu").slideToggle("slow");
		   	$(".myaccount-menu").slideUp("slow");
			$(".language-menu").slideUp("slow");
			$(".currency-menu").slideUp("slow");
            $(".myaccount .dropdown-toggle").removeClass('active');
			$(".menu_toggle").slideUp("slow");
        	return false;
    	});
	
	 	$("#form-currency .dropdown-toggle").click(function(){
			$('#form-currency').addClass("active");
           	$(".language-menu").slideUp("slow");
        	$(".currency-menu").slideToggle("slow");
			$(".cart-menu").slideUp("slow");
			/*$(".myaccount-menu").slideUp("slow");
			/*$(".myaccount .dropdown-toggle").removeClass('active');*/
			$(".menu_toggle").slideUp("slow");
        	return false;
    	});
		
        $("#form-language .dropdown-toggle").click(function(){
			$('#form-language').addClass("active");
            $(".currency-menu").slideUp("slow");
        	$(".language-menu").slideToggle("slow");
			$(".cart-menu").slideUp("slow");
			/*$(".myaccount-menu").slideUp("slow");
			$(".myaccount .dropdown-toggle").removeClass('active');*/
			$(".menu_toggle").slideUp("slow");
        	return false;
    	});	
	
});

$(document).click(function(){
	$(".cart-menu").hide('slow');
	$(".myaccount-menu").hide('slow');
	$('.searchtoggle').hide('slow');
	$(".language-menu").slideUp("slow");
	$(".currency-menu").slideUp("slow");
});


/* JS FOR FILTER */

function leftFilter(){
if ($(window).width() <= 767) {
$('#column-left .filterbox').appendTo('.row #content .category_list');
$('#column-right .filterbox').appendTo('.row #content .category_list');
} else {
$('.row #content .category_list .filterbox').appendTo('#column-left .sidebarFilter');
$('.row #content .category_list .filterbox').appendTo('#column-right .sidebarFilter');
}
}
$(document).ready(function(){leftFilter();});
$(window).resize(function(){leftFilter();});

function mobileToggleMenu(){
	//alert($(window).width());
	if ($(window).width() < 980)
	{
		$("#footer .mobile_togglemenu").remove();
		$("#footer .column h5").append( "<a class='mobile_togglemenu'>&nbsp;</a>" );
		$("#footer .column h5").addClass('toggle');
		$("#footer .mobile_togglemenu").click(function(){
			$(this).parent().toggleClass('active').parent().find('ul').toggle('slow');
		});

	}else{
		$("#footer .column h5").parent().find('ul').removeAttr('style');
		$("#footer .column h5").removeClass('active');
		$("#footer .column h5").removeClass('toggle');
		$("#footer .mobile_togglemenu").remove();
	}	
}
$(document).ready(function(){mobileToggleMenu();});
$(window).resize(function(){mobileToggleMenu();});


function menuResponsive(){
	//alert($(window).width());
	if ($(window).width() < 980)
	{
		$('.nav.navbar-nav').css('display','none');
		$("#menu").addClass('responsive-menu');
		$("#menu").removeClass('main-menu');
		$('.nav-responsive').css('display','block');
		$("#menu .mobile_togglemenu").remove();
		$("#menu ul li.dropdown").append( "<a class='mobile_togglemenu'>&nbsp;</a>" );
		$("#menu ul li.dropdown").addClass('toggle');
		
		$("#menu .nav > li.dropdown .mobile_togglemenu").click(function(){
			 $(this).parent().toggleClass('active');
			 $(this).siblings("li .dropdown-menu").slideToggle('slow');
		});

	}else{
		$("#menu").addClass('main-menu');
		$("#menu").removeClass('responsive-menu');
		$("#menu ul li.dropdown").parent().find('li .dropdown-menu').removeAttr('style');
		$("#menu ul li.dropdown").removeClass('active');
		$("#menu ul li.dropdown").removeClass('toggle');
		$("#menu ul li.dropdown").removeClass('expandable');
		$("#menu .mobile_togglemenu").remove();
		$('.nav-responsive').css('display','none');
		$('.nav.navbar-nav').css('display','block');
	}	
}
$(document).ready(function(){menuResponsive();});
$(window).resize(function(){menuResponsive();});


$(document).ready(function(){
  $(".dropdown-toggle").click(function(){
    $("ul.dropdown-toggle").toggle('slow');
  });
});


function LangCurDropDown(selector,subsel){
	var main_block = new HoverWatcher(selector);
	var sub_ul = new HoverWatcher(subsel);
	$(selector).click(function() {
		$(selector).addClass('active');
		$(subsel).slideToggle('slow');
		setTimeout(function() {
			if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
				$(subsel).stop(true, true).slideUp(450);
				$(selector).removeClass('active');
		}, 3000);
	});
	
	$(subsel).hover(function() {
		setTimeout(function() {
			if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
				$(subsel).stop(true, true).slideUp(450);
		}, 3000);
	});	
}


$(document).ready(function(){

	LangCurDropDown('.myaccount','.myaccount-menu');
	LangCurDropDown('#currency','.currency-menu');
	LangCurDropDown('#language','.language-menu');
	LangCurDropDown('#cart','.cart-menu');

});



function leftright()
{
	if ($(window).width() < 980){
			if($('.category_filter .col-md-3, .category_filter .col-md-2, .category_filter .col-md-1').hasClass('text-right')==true){
			$(".category_filter .col-md-3, .category_filter .col-md-2, .category_filter .col-md-1").addClass('text-left');
			$(".category_filter .col-md-3, .category_filter .col-md-2, .category_filter .col-md-1").removeClass('text-right');
			}
	}
}

$(document).ready(function(){leftright();});
$(window).resize(function(){leftright();});


$(document).ready(function(){
	jQuery(function($){
	
		var max_elem = 4 ;
		if($(window).width() >1400){ max_elem = 4;}
		if($(window).width() <=1400){ max_elem = 3;}
		if($(window).width() <=1250){ max_elem = 3;}
		if($(window).width() <=1023){ max_elem = 2;}
		$('.main-navigation li').first().addClass('home_first');
		var items = $('.main-navigation  li.level0');
		var surplus = items.slice(max_elem, items.length);
		surplus.wrapAll('<li class="level0 hiden_menu"><div class="dropdown-inner">');
		$('.hiden_menu').prepend('<a class="level-top">More</a>');
	
	});
});


	 
//LEFT-RIGHT COLUMN RESPONSIVE TOOGLE

function mobileToggleColumn(){
	if ($(window).width() < 980)
	{
		$('#column-left,#column-right').appendTo('.home_row');
		$('#column-left,#column-right').insertAfter('#content');
		$("#column-left .box-heading .mobile_togglemenu,#column-right .box-heading .mobile_togglemenu").remove();
		$("#column-left .box-heading,#column-right .box-heading").append( "<a class='mobile_togglemenu'>&nbsp;</a>" );
		$("#column-left .box-heading,#column-right .box-heading").addClass('toggle');
		$("#column-left .box-heading .mobile_togglemenu,#column-right .box-heading .mobile_togglemenu").click(function(){
			$(this).parent().toggleClass('active').parent().find('.box-content,.filterbox,.list-group , .news , .box-content').slideToggle('slow');
		});

	}else{
		$('#column-left').prependTo('.home_row');
		$('#column-right').appendTo('.home_row');
		$('#column-left').insertBefore('#content');
		$("#column-left .box-heading,#column-right .box-heading").parent().find('.box-content,.filterbox,.list-group , .news , .box-content').removeAttr('style');
		$("#column-left .box-heading,#column-right .box-heading").removeClass('active');
		$("#column-left .box-heading,#column-right .box-heading").removeClass('toggle');
		$("#column-left .box-heading .mobile_togglemenu,#column-right .box-heading .mobile_togglemenu").remove();
	}
}
$(document).ready(function(){mobileToggleColumn();});
$(window).resize(function(){mobileToggleColumn();});



/*function productCarouselAutoSet() { 
	$("#content .product-carousel, .banners-slider-carousel .product-carousel, #featured .product-carousel, #latest .product-carousel, #bestseller .product-carousel, #special .product-carousel, .homepage-testimonials-inner .product-carousel").each(function() {
		var objectID = $(this).attr('id');
		var myObject = objectID.replace('-carousel','');
		if(myObject.indexOf("-") >= 0)
			myObject = myObject.substring(0,myObject.indexOf("-"));		
		if(widthClassOptions[myObject])
			var myDefClass = widthClassOptions[myObject];
		else
			var myDefClass= 'grid_default_width';
		var slider = $("#content #" + objectID + ",  .banners-slider-carousel #"+ objectID + ",  #featured #"+ objectID + ",  #latest #"+ objectID + ",  #bestseller #"+ objectID + ",  #special #"+ objectID + ", .homepage-testimonials-inner #" + objectID);
		slider.sliderCarousel({
			defWidthClss : myDefClass,
			subElement   : '.slider-item',
			subClass     : 'product-block',
			firstClass   : 'first_item_tm',
			lastClass    : 'last_item_tm',
			slideSpeed : 200,
			paginationSpeed : 800,
			autoPlay : false,
			stopOnHover : false,
			goToFirst : true,
			goToFirstSpeed : 1000,
			goToFirstNav : true,
			pagination : false,
			paginationNumbers: false,
			responsive: true,
			responsiveRefreshRate : 200,
			baseClass : "slider-carousel",
			theme : "slider-theme",
			autoHeight : true
		});
		
		var nextButton = $(this).parent().find('.next');
		var prevButton = $(this).parent().find('.prev');
		nextButton.click(function(){
			slider.trigger('slider.next');
		})
		prevButton.click(function(){
			slider.trigger('slider.prev');
		})
	});
}
//$(window).load(function(){productCarouselAutoSet();});
$(document).ready(function(){productCarouselAutoSet();});


function productListAutoSet() { 
	$("#content .productbox-grid, #featured .productbox-grid, #latest .productbox-grid, #bestseller .productbox-grid, #special .productbox-grid").each(function(){
		var objectID = $(this).attr('id');
		if(objectID.length > 0){
			if(widthClassOptions[objectID.replace('-grid','')])
				var myDefClass= widthClassOptions[objectID.replace('-grid','')];
		}else{
			var myDefClass= 'grid_default_width';
		}	
		$(this).smartColumnsRows({
			defWidthClss : myDefClass,
			subElement   : '.product-items',
			subClass     : 'product-block'
		});
	});		
}
$(window).load(function(){productListAutoSet();});
$(window).resize(function(){productListAutoSet();});

*/


function productCarouselAutoSet() { 
	$("#content .product-carousel, .banners-slider-carousel .product-carousel, #featured .product-carousel, #latest .product-carousel, #bestseller .product-carousel, #special .product-carousel, .homepage-testimonials-inner .product-carousel").each(function() {
		var objectID = $(this).attr('id');
		var myObject = objectID.replace('-carousel','');
		if(myObject.indexOf("-") >= 0)
			myObject = myObject.substring(0,myObject.indexOf("-"));		
		if(widthClassOptions[myObject])
			var myDefClass = widthClassOptions[myObject];
		else
			var myDefClass= 'grid_default_width';
		var slider = $("#content #" + objectID + ",  .banners-slider-carousel #"+ objectID + ",  #featured #"+ objectID + ",  #latest #"+ objectID + ",  #bestseller #"+ objectID + ",  #special #"+ objectID + ", .homepage-testimonials-inner #" + objectID);
		slider.sliderCarousel({
			defWidthClss : myDefClass,
			subElement   : '.slider-item',
			subClass     : 'product-block',
			firstClass   : 'first_item_tm',
			lastClass    : 'last_item_tm',
			slideSpeed : 200,
			paginationSpeed : 800,
			autoPlay : false,
			stopOnHover : false,
			goToFirst : true,
			goToFirstSpeed : 1000,
			goToFirstNav : true,
			pagination : false,
			paginationNumbers: false,
			responsive: true,
			responsiveRefreshRate : 200,
			baseClass : "slider-carousel",
			theme : "slider-theme",
			autoHeight : true
		});
		
		var nextButton = $(this).parent().find('.next');
		var prevButton = $(this).parent().find('.prev');
		nextButton.click(function(){
			slider.trigger('slider.next');
		})
		prevButton.click(function(){
			slider.trigger('slider.prev');
		})
	});
}
//$(window).load(function(){productCarouselAutoSet();});
$(document).ready(function(){productCarouselAutoSet();});

function productListAutoSet() { 
$("#content .productbox-grid").each(function(){
		var objectID = $(this).attr('id');
		if(objectID.length > 0){
			if(widthClassOptions[objectID.replace('-grid','')])
				var myDefClass= widthClassOptions[objectID.replace('-grid','')];
		}else{
			var myDefClass= 'grid_default_width';
		}	
		$(this).smartColumnsRows({
			defWidthClss : myDefClass,
			subElement   : '.product-items',
			subClass     : 'product-block'
		});
	});		
}
$(window).load(function(){productListAutoSet();});
$(window).resize(function(){productListAutoSet();});


function HoverWatcher(selector){
	this.hovering = false;
	var self = this;

	this.isHoveringOver = function() {
		return self.hovering;
	}

	$(selector).hover(function() {
		self.hovering = true;
	}, function() {
		self.hovering = false;
	})
}

function LangCurDropDown(selector,subsel){
	var main_block = new HoverWatcher(selector);
	var sub_ul = new HoverWatcher(subsel);
	$(selector).click(function() {
		$(selector).addClass('active');
		$(subsel).slideToggle('slow');
		setTimeout(function() {
			if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
				$(subsel).stop(true, true).slideUp(450);
				$(selector).removeClass('active');
		}, 3000);
	});
	
	$(subsel).hover(function() {
		setTimeout(function() {
			if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
				$(subsel).stop(true, true).slideUp(450);
		}, 3000);
	});	
}

$(document).ready(function(){

	LangCurDropDown('#currency','.currency_div');
	LangCurDropDown('#language','.language_div');

	$('.nav-responsive').click(function() {
        $('.responsive-menu .nav.navbar-nav').slideToggle();
		$('.nav-responsive div').toggleClass('active');
		
    }); 

	$(".treeview-list").treeview({
		animated: "slow",
		collapsed: true,
		unique: true		
	});
	$('.treeview-list a.active').parent().removeClass('expandable');
	$('.treeview-list a.active').parent().addClass('collapsable');
	$('.treeview-list .collapsable ul').css('display','block');
});

 
$(document).ready(function(){
  $(".tm_headerlinks_inner").click(function(){
    $(".header_links").toggle('slow');
  });
  
});

/*For Grid and List View Buttons*/
function gridlistactive(){
$('.btn-list-grid button').on('click', function() {
if($(this).hasClass('grid')) {
  $('.btn-list-grid button').addClass('active');
  $('.btn-list-grid button.list').removeClass('active');
}
  else if($(this).hasClass('list')) {
$('.btn-list-grid button').addClass('active');
  $('.btn-list-grid button.grid').removeClass('active');
  }
});
}
$(document).ready(function(){gridlistactive()});
$(window).resize(function(){gridlistactive()});



/*For Back to Top button*/
$(document).ready(function(){
$("body").append("<a class='top_button' title='Back To Top' href=''>TOP</a>");

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 70) {
			$('.top_button').fadeIn();
		} else {
			$('.top_button').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('.top_button').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});
});

/*For Parallex*/

jQuery(window).load(function(){
			
					 
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
	if(!isMobile) {
		if($(".parallex").length){  $(".parallex").sitManParallex({  invert: false });};    
	}else{
		$(".parallex").sitManParallex({  invert: true });
		
		}	
});

