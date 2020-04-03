/**
 * This file adds some LIVE to the Theme Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. Your javascript should grab settings from customizer controls, and 
 * then make any necessary changes to the page using jQuery.
 */
( function( $ ) {
    
        var api = wp.customize;
        
       
           
        
	/* Site Identify */
	api( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).text( to );
                        $( '.logo-box a h1' ).text( to );
                        
		} );
	} );
        
	api( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
                        $( '.logo-box a span' ).text( to );
		} );
	} );
        
        /* Logo */
	api( 'logo_image', function( value ) {
		value.bind( function( to ) {
			if(to) {
                            
                            $( '.logo-box .logo' ).addClass('logo-img');
                            $( '.logo-box a' ).html( '<img src="'+to+'" class="img-responsive">' );
                            
                        }else{
                            
                            $( '.logo-box .logo' ).removeClass('logo-img');
                            $( '.logo-box a' ).html( '<h1></h1><span></span>' );                          
                        }
		} );
	} );
        
        api( 'logo_style', function( value ) {
		value.bind( function( to ) {
			$( 'nav .logo' )
                        .removeClass('logo-v1')
                        .removeClass('logo-v2')
                        .addClass( to );
		} );
	} );
        
        
             
        // Layout 
        api( 'layout_boxedwide', function( value ) {
		value.bind( function( to ) {
			$( 'body' )
                        .removeClass('boxed')
                        .addClass( to );
		} );
	} );
        

       /* Colors */
       api( 'color_default', function( value ) {
		value.bind( function( to ) {
                        var url = $( 'link#euforia-theme-css' ).attr("href").split("theme-");
			$( 'link#euforia-theme-css' ).attr("href", url['0']+"theme-" + to + ".css");  
		} );
	} );
        
	api( 'color_bg', function( value ) {
		value.bind( function( to ) {
			$( 'body' ).removeClass('bg-white')
                        .removeClass('bg-dark')
                        .removeClass('bg-gray-light')
                        .removeClass('bg-gray')
                        .removeClass('bg-black')
                        .addClass( to );
		} );
	} );
        
	api( 'color_nav_bg', function( value ) {
		value.bind( function( to ) {
                    
			$( 'body > .wrap > nav' )
                        .removeClass('nav-white')
                        .removeClass('nav-graylight')
                        .removeClass('nav-gray')
                        .removeClass('nav-dark')
                        .removeClass('nav-black')
                        .addClass( to );
                        
		} );
	} );
        
        api( 'color_sidebar_bg', function( value ) {
		value.bind( function( to ) {
                    
			$( '.sidebar' )
                        .removeClass('sidebar-white')
                        .removeClass('sidebar-graylight')
                        .removeClass('sidebar-gray')
                        .removeClass('sidebar-dark')
                        .removeClass('sidebar-black')
                        .addClass( to );
                        
		} );
	} );
        
	api( 'color_page_bg', function( value ) {
		value.bind( function( to ) {
			$( '.page-wrapper' )
                        .removeClass('page-white')
                        .removeClass('page-dark')
                        .removeClass('page-gray-light')
                        .removeClass('page-metalic')
                        .addClass( to );
		} );
	} );
        
        api( 'color_heading', function( value ) {
		value.bind( function( to ) {
			$( 'section header > h2' )
                          .removeClass('color-default')
                         .removeClass('color-red')
                         .removeClass('color-blue')
                         .removeClass('color-orange')
                         .removeClass('color-yellow')
                         .removeClass('color-green')
                         .removeClass('color-purple')
                         .removeClass('color-navy')
                         .removeClass('color-gray-lighter')
                         .removeClass('color-gray-light')
                         .removeClass('color-gray')
                         .removeClass('color-dark')
                         .removeClass('color-black')
                         .addClass('color-'+ to );
                 
		} );
	} );
        
        api( 'color_loader', function( value ) {
		value.bind( function( to ) {
			$( '.anim-loader' )
                         .removeClass('bg-default')
                         .removeClass('bg-red')
                         .removeClass('bg-blue')
                         .removeClass('bg-orange')
                         .removeClass('bg-yellow')
                         .removeClass('bg-green')
                         .removeClass('bg-purple')
                         .removeClass('bg-navy')
                         .removeClass('bg-gray-lighter')
                         .removeClass('bg-gray-light')
                         .removeClass('bg-gray')
                         .removeClass('bg-dark')
                         .removeClass('bg-black')
                         .addClass( 'bg-'+to );
                 
                         $('.page-ajax-preloader').addClass('activ');
                         setTimeout(function () { $( '.page-ajax-preloader' ).removeClass( 'activ' ); },2000 );
                 
		} );
	} );
        
        
        api( 'color_social', function( value ) {
		value.bind( function( to ) {
			$( 'ul.social-icons li a i' )
                         .removeClass('color-default')
                         .removeClass('color-red')
                         .removeClass('color-blue')
                         .removeClass('color-orange')
                         .removeClass('color-yellow')
                         .removeClass('color-green')
                         .removeClass('color-purple')
                         .removeClass('color-navy')
                         .removeClass('color-gray-lighter')
                         .removeClass('color-gray-light')
                         .removeClass('color-gray')
                         .removeClass('color-dark')
                         .removeClass('color-black')
                         .addClass('color-'+ to );
		} );
	} );
        
       
        
        
        /* Menu */
        api( 'menu_style_active', function( value ) {
		value.bind( function( to ) {
			$(".dl-menu")
                .removeClass('menu-active-v1')
                .removeClass('menu-active-v2')
                .removeClass('menu-active-v3')
                        .addClass( to );
		} );
	} );
        
        api( 'menu_style_hover', function( value ) {
		value.bind( function( to ) {
			$(".dl-menu")
                .removeClass('menu-hover-v1')
                .removeClass('menu-hover-v2')
                        .addClass( to );
		} );
	} );
        
        api( 'menu_position', function( value ) {
		value.bind( function( to ) {
			$(".dl-menu")
                .removeClass('menu-left')
                .removeClass('menu-right')
                .removeClass('menu-center')
                        .addClass( to );
		} );
	} );
        
        api( 'menu_weight', function( value ) {
		value.bind( function( to ) {
			$(".dl-menu")
                .removeClass('menu-weight300')
                .removeClass('menu-weight400')
                .removeClass('menu-weight700')
                .removeClass('menu-weight900')
                        .addClass( to );
		} );
	} );
        
        api( 'social_style', function( value ) {
		value.bind( function( to ) {
			$("footer .social-icons")
                .removeClass('social-v1')
                .removeClass('social-v2')
                .removeClass('social-v3')
                        .addClass( to );
		} );
	} );
        
        
        api( 'footer_copyright', function( value ) {
		value.bind( function( to ) {
			$( 'footer  .copyright' ).html( to );
                                               
		} );
	} );
        
        
        
        
	

	
} )( jQuery );


