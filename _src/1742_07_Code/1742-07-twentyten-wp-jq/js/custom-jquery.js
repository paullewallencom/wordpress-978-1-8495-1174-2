jQuery(function(){

/*
  Chapter 7 AJAX examples.
  Uncomment any code you'd like to work with:
*/
    /*------colorbox code from chapter 4------*/
	jQuery(".entry a:has(img)").colorbox({height: '97%'});
	jQuery("a[href*='register']").colorbox({iframe:true, width:"500px", height: "600px"});
	
	
	/*----------initial .ajax call----------*/
	
	/*jQuery(".ajaxIt").click(function(){
	//.ajaxIt is a class assigned to link in the top post
	
		jQuery.ajax({
			url: "/about-2/",
			data: "html",
			success: function(data){
			            //limit the overflow and height on the first post
			       		jQuery('.post:first')
			       		    .css({overflow: "hidden", height: "310px"})
			       		    .html(data);
    			   		alert('loaded up content');
			          }
		});
	
	});*/
	
	/*--------------using .load function--------------*/
	
	//jQuery('.post:first').load('about-2/ #post-104');
	
	/*jQuery('.post:first').load('about-2/ #post-104', function(){
				jQuery('h3').css("color","#ff6600");
				jQuery('p:first').css("font-weight","bold");
	});*/
	
	/*-------------------Ajaxed Posts-------------*/
	jQuery('.home #content').append('<div class="displayPost"></div>');
	
	jQuery('#content li a').click(function(event){
	   //keeps the href from reloading the page:
	   event.preventDefault();	
	   //grab the page link
	   var page = jQuery(this).attr('href');
		
	   jQuery('.displayPost')
		   //use the grabbed link in the load function
		   .load(page+' .post')
		   .fadeOut()//fade out the previous content
		   .slideDown(2000);//slide in the new content
	
	});
	
	/*-----------------using .getJSON and twitter-------------------*/
	//we'll want to make sure we add our div to the home page only, referencing the WordPress body class .home (make sure your theme is using the template tag body_class() in the body HTML tag!)
	/*
	
	jQuery('.home #content').append('<div class="tweets"><h2>Our Tweets:</h2><ul><li></li><li></li><li></li></ul><p><a href="http://twitter.com/ozoopa">Follow Us!</a></p></div>');

	jQuery('.tweets').css({padding:'0px 30px'});
        
	var tweetURL = 'http://api.twitter.com/1/statuses/user_timeline/ozoopa.json?callback=?';
	
	jQuery.getJSON(tweetURL, function(twitter){
     //'twitter' is the callback function that returns the tweets
     //for each li in the twees class we'll drop in the text
     jQuery('.tweets li').each(function(i){
        //we only want the tweet text, nothing else
			jQuery(this).html(twitter[i].text);
		});
	});
	
	*/
	
	/*----------------using .getJSON and flickr----------------*/
	/*
	
	jQuery('.home #content').append('<div class="flickr"><h2>Latest Flickr:</h2></div>');
	//(again, make sure your theme is using the template tag: body_class() in the body HTML tag!)
	
	//add in a list with 6 lis
	jQuery('.flickr').append('<ul><li></li><li></li><li></li><li></li><li></li><li></li></ul>');
	
	var flickrURL = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=wordpress,themes,dark&tagmode=all&format=json&jsoncallback=?';
	
	jQuery.getJSON(flickrURL, function(flickrImgs){
		jQuery('.flickr li').each(function(i){
		    jQuery(this).html('<img src='+flickrImgs.items[i].media.m+' width="100" height="100" />');
		});
	});
	
	*/
	
	/*---------------ajaxing the comment form------------*/
	
	jQuery('#commentform input').css({border: '1px solid #ccc', padding: '5px'});
	jQuery('#commentform textarea').css({border: '1px solid #ccc', padding: '5px'});
	
	jQuery('#commentform').submit(function(){

		jQuery('#commentform input').css({border: '1px solid #ccc', padding: '5px'});
		jQuery('#commentform textarea').css({border: '1px solid #ccc', padding: '5px'});
		jQuery('#respond .message').remove();
		
		var formData = jQuery("#commentform").serialize();
		var comment = jQuery('textarea#comment').val();
		
		jQuery.ajax({
			type: "POST",
			url: "/wp-comments-post.php",
			data: formData,
			success: function(){
				
				//create the div that the message goes in
				jQuery('#respond').prepend('<div class="message"></div>');
							
				jQuery('#respond .message')
				      .html("<div style='border: 1px solid #ccc; padding: 5px 10px'><b>Thank you.</b><br/><span style='font-size: 90%;'><b><i>Your comment may be pending moderation.<i></b></span><br/> "+comment+"</div>")
				      .hide() //then hide it!
				      .fadeIn(2000); //then fade it in nicely

			},
			error: function(){
	
				
				jQuery('#respond').prepend('<div class="message"></div>');
                jQuery('#respond .message').html("<h3>Sorry, Please fill out all the <span style='color:#cc0000; font-weight:bold'>required</span> fields</h3>").hide().fadeIn(2000);
                if (!jQuery('textarea#comment').val()){
                	jQuery('textarea#comment').hide().css('border','2px solid #cc0000').fadeIn(2000);
                }
                jQuery('#commentform input:not(#url)').each(function(){
                	if(!jQuery(this).val()){
                		jQuery(this).hide().css('border','2px solid #cc0000').fadeIn(2000);
                	}
                });
			}
			
		
		});
		return false;
		
	});
	
						
});//end jQ function

