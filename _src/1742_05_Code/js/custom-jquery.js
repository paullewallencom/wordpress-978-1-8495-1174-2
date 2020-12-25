jQuery(function(){ /*<- shortcut for document ready*/

/*----Read Me:

Chapter 5, jQuery Basics examples.

Read through chapter 5 and just un-comment and re-comment 
each line (or block!) of code to experiement with jQuery's 
basic functionality in WordPress. 

Have fun!

------------*/

/*------colorbox code from chapter 4------*/
	jQuery(".entry-content a:has(img)").colorbox({height:"98%"});	
	//jQuery("a[href*='register']").colorbox({iframe:true, width:"700px", height: "550px"});

	/*------Chaining commands------*/
	/*
	jQuery('.post:first').hide().slideDown('slow', 'linear').delay(3000).fadeTo('slow', .5);
	
	jQuery('.post p').css({'backgroundColor':'#ff9900'}).animate({'backgroundColor':'#99ccff'
	}, 2000, 'linear');
	*/
	
	/*------Animate function optional properties------*/
	
	/*
	jQuery('.post:first')
		.hide()
		.fadeTo(0, .1)
		.css("height","5px")
		.animate({ 
		    height: '+=500px',
		 },
		 {
		    duration: 8000,
		    easing: 'swing',
		    queue: false,
            step: function() {alert('step done!');},
            complete: function() {alert('completely done!');},
		 }
		)
		.fadeTo(8000, 1);
		*/
		
		
		/*------Alert Sticky Animation------*/
	
		/*jQuery('.home .sticky')
			.animate({'backgroundColor':'#ff6600'}, 'slow')
			.animate({'backgroundColor':'#ffff99'}, 'slow')
			.animate({'backgroundColor':'#ff6600'}, 'slow')
			.animate({'backgroundColor':'#ffff99'}, 'slow');*/
			
			
 /*------Easy Animated Graphs------*/
   	    //initial test:  jQuery('.post h2:contains(Monthly Stats)').siblings('.entry-content').children('ul').css({background: '#ccffee'});
   	    
   	    //add the background image and fix the default theme's settings
   	    /*
   	    jQuery('.post h2:contains(Monthly Stats)').siblings('.entry-content').children('ul:first').addClass('greenStats');
   	    
   	    
   	    jQuery('.post h2:contains(Monthly Stats)').siblings('.entry-content').children('ul:first').children('li').each(function(){
   	    
   	    		var string1 = jQuery(this).text().replace(': ',':<div class="nVal">');
   	    		var string2 = string1.replace('</li>','</div></li>');
   	    		
   	    		//place back into the li element as html markup and text:
   	    		jQuery(this).html(string2);
   	    		
   	    		jQuery(this).children('.nVal').css({width: '0', padding: '10px 0 10px 20px', fontSize: '130%', color: '#ffffff', marginBottom: '5px'});
   	    		
   	    		//retrieve the numeric text inside the nVal div:
   	    		var nVar = jQuery(this).children('.nVal').text();
   	    		jQuery(this).children('.nVal').delay(600).animate({backgroundColor: '#006600', width: nVar*(3.8)}, 9000);	
   	    
   	    });//end jQ li
   	    
   	     */

			
			
			
   	    /*------Navigation Animation------*/
   	    //floating point div
   	       	    
   	    jQuery('.menu-header').prepend('<div id="shipSlide"> </div>');
   	    jQuery('#shipSlide').fadeTo('slow', 0.4);
   	    
   	    jQuery('li.menu-item')
   	    .hover(function() {
   	    	jQuery(this).animate({paddingLeft: '+=25px'}, 400, 'swing');
			//jQuery(this).find('a').animate({backgroundColor: '#67A9E3'});
			jQuery(this).find('a').css('background','none');
			
			 var p = jQuery(this);
			 var position = p.position();
			 jQuery("#shipSlide").fadeTo('slow', 1).animate({marginLeft: position.left-175}, {duration: 600, easing: 'easeOutBack', queue: false});
			
   	    }, function(){
   	    
   	    	jQuery(this).animate({paddingLeft: '-=25px'}, 400, 'swing');
			// jQuery(this).find('a').animate({backgroundColor: '#000'});
			
			//jQuery("#shipSlide").fadeTo('slow', .4).animate({marginLeft: '-5px'}, {duration: 600, easing: 'easeOutBack', queue: false});
   	    
   	    
   	    });//hover
   	    
   	    jQuery('.menu-header').hover(function(){
			jQuery("#shipSlide").fadeIn(1000);
		}, function(){
			//jQuery("#shipSlide").fadeOut(1000);
			jQuery("#shipSlide").fadeTo('slow', .4).animate({marginLeft: '-5px'}, {duration: 600, easing: 'easeOutBack', queue: false});
		
		});
		
		/*Extra: If you're using the default theme from 2.9.2 or older, this script *should* work (no guarantees) with the page menu on the side*/
   	   
   	   /* jQuery('ul li.menu_item').wrapAll('<div id="mainNav"></div>');
		jQuery('#mainNav').prepend('<div id="shipSlide"> </div>');
		 //jQuery('#shipSlide').hide();
   	    
   	    jQuery('li.menu_item')
   	    .hover(function() {
 
			 jQuery(this).animate({paddingLeft: '+=35px'}, 400, 'swing');
			 jQuery(this).find('a').animate({backgroundColor: '#67A9E3'});
			 
			 var p = jQuery(this);
			 var position = p.position();
			 jQuery("#shipSlide").animate({marginTop: position.top-285}, {duration: 600, easing: 'easeOutBack', queue: false});
			 
			}, function() {
			 
			 jQuery(this).animate({paddingLeft: '-=35px'}, 400, 'swing');
			 jQuery(this).find('a').animate({backgroundColor: '#dddddd'});
			 
		});
		
		jQuery('#mainNav').hover(function(){
			jQuery("#shipSlide").fadeIn(1000);
		}, function(){
			jQuery("#shipSlide").fadeOut(1000);
		
		});
		
		*/
		
		
		/*------Slideshow Animation------*/
		
		jQuery(".sticky")
		   .css({
		   position: 'absolute',
		   top: '0',
		   margin: '0',
		   width: '650px',
		   height: '320px',
		   overflow: 'hidden'
		   });
		   
		//move the header back over if it's affected by the css - you could also do this in the CSS directly   		   
		jQuery('.sticky h2').css({margin: '0', padding: '0'});
		
		//move the margin over a bit, you could also do this in the CSS directly
		jQuery('.sticky img').css('marginRight','30px');
		   
		//this pushes the other posts down out of the way   
		jQuery('.post:not(.sticky):first').css('margin-top','360px');
		
		//set the stickies in a wrapper
		jQuery('.sticky').wrapAll('<div id="stickyRotate" style="position: absolute; padding: 0; top: 400px; width: 650px; height: 320px; border: 2px solid #000; overflow:hidden;"></div>');
		
		//add in labels
		jQuery('.sticky:last').after('<div id="stickyNav" style="position: absolute; padding: 10px 0 0 0; margin-top: 265px; height: 35px; width: 650px; color: #eee; background: #000; text-align: center"></div>');
		
		jQuery('.sticky')
		   .each( function (i){ 
		      jQuery('#stickyNav').fadeTo(0, 0.8).append("<div class='sN' style='display:inline; margin: 0 5px; border: 1px solid #999; padding: 2px 5px;'>"+(i+1)+"</div> ");
		});
		
		
		
		//make sure the first .sticky post fades in
        jQuery('.sticky:first').fadeIn();
		
		//set the "duration" length to 6seconds for each slide:
		var duration = 6000;
		
		//creates the interval duration length:
		var intervalDuration = duration * jQuery('.sticky').length;
		
		//the function will need to run once before the setInterval kicks in
		loopStickies(duration);
		//the setInterval will kick off in 18 seconds: (6secs x number of sticky posts)
   	    setInterval( 'loopStickies("'+duration+'")', intervalDuration );
   	    
   	      
   	  
		

});//end docReady

/*------Slideshow Animation place outside of jQuery document ready------*/

function loopStickies(duration){
     //make sure all posts except the first post fade out
     jQuery('.home .sticky:not(:first)').fadeOut();
     
     
     jQuery('.home .sticky')
		   .each( function (i){ 
		      //i = numeric value that will increase with each loop
		      
		      jQuery(this)
		      //make sure each div is on it's own z-index
		      .css('z-index','i+10')
		      //using the animate function for timing
		      .animate({'backgroundColor': '#000000'}, i*duration, function(){
		      	jQuery(this).fadeIn('slow');
		      	
		      	//interactivity
		      	jQuery("#stickyNav .sN").css('color','#666666');
		      	jQuery('#stickyNav .sN:eq('+i+')').css('color','#ffffff');
		      }
		      );//end animate
		   }); //end each
					
}//end loopStickies

