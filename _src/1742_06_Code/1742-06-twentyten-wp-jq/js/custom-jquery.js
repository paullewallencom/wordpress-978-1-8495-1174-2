jQuery(function(){

/*
  Chapter 6 UI plugin Examples.
  Uncomment any code you'd like to work with:
*/
    /*------colorbox code from chapter 4------*/
	jQuery(".entry a:has(img)").colorbox({height: '97%'});
	jQuery("a[href*='register']").colorbox({iframe:true, width:"500px", height: "600px"});
	
	/*----UI Effect examples:---- */
	/*jQuery(".post h2").hover(function(){
		jQuery(this).effect('shake', 200);
	}, function(){
	    jQuery(this).effect('shake', 200);
	});*/
	
	/*jQuery(".post h2").hover(function(){
		jQuery(this).animate({'backgroundColor':'#ccccff'}, 2000, 'easeOutBack');
	}, function(){
	    jQuery(this).animate({'backgroundColor': '#999999'}, 2000, 'easeOutBack');
	});*/
	
	/*-------UI Tabs--------*/
	jQuery("#ourStructure").tabs();
	


	//add in a ul list on the About page only
	jQuery("#post-104 h3:first").before("<ul></ul>");
	
	//select the ul, the h3's AND the h3's p tags and wrap them in a new div
	//use the .add() function to make sure everything is selected
	jQuery("#post-104 ul").add("#post-104 h3").add("#post-104 h3+p").wrapAll("<div id='aboutUs'></div>");
	
	
	//for each h3 item:
	jQuery("#post-104 h3").each(function(i){
			//add text to the ul list w/ anchor links
			var titleTxt = jQuery(this).text();
			var htmlTxt = "<li><a href='#name-"+i+"'>"+titleTxt+"</a></li>";
			jQuery("#post-104 ul").append(htmlTxt);
			
			//wrap each h3 AND p in a div with anchor names
			//this time, use .andSelf to make sure everything is selected
			jQuery(this).next("p").andSelf().wrapAll("<div id='name-"+i+"'></div>");		
	});
	
	//remove content styles from new list
	jQuery("#post-104 .entry-content").removeClass('entry-content');


	//create the tabs widget
	jQuery("#post-104 #aboutUs").tabs();
	
	
	/*--------UI Accordion-------*/
	//select the proper li level and exclude the inner ul lists then wrap in a targetable div
	jQuery(".xoxo ul li:gt(10)").not(".xoxo ul li ul li").wrapAll('<div id="sideAccordion"></div>');
	
	//select the new target and assign the widget with parameters
	jQuery('.xoxo')
	    //options for the accordion
	    .accordion({header: 'h3', collapsible: true, active: -1});
	   
	
	//last, some extra styles to the headers and ul lists to line them up
	jQuery(".xoxo h3").css({'padding':'5px 0 5px 25px', 'height':'15px'});
	jQuery(".xoxo ul").css({'height': 'auto', 'margin': '0px', 'paddingLeft': '25px', 'paddingTop': '5px', 'paddingBottom': '5px'});
	
	
	/*-----------UI Button----------*/
	//select the p that contains the disclaimer text
	jQuery("#post-98 p:contains(Disclaimer:)").wrapAll("<div id='disclaimer' style='text-align:justify;'></div>");
	//create the disclaimer dialog widget
	jQuery("#disclaimer").dialog({
		 //set the dialog to close	 
	     autoOpen: false,
	     //set the title
	     title: 'Download Agreement',  
	     // set up 2 buttons
	     buttons: { 
	            //activates the url placed in the a href
	     		"I Agree": function() { 
	     						//get the url of the pdf
	     						var pdfFile = jQuery("#post-98 a").attr('href');
	     						//direct the browser to that url
	     						window.location.href = pdfFile;
	     					}, 
	     		 //closes the dialog box			
	             "Close" : function() { 
	               				jQuery(this).dialog("close"); 
	             			}
	              },
	 });
	 
	 jQuery("#post-98 a")
	    //set up a click function on the link
	    .click(function(evnt){
	      //open the dialog box
	      jQuery("#disclaimer").dialog("open");
	      //ensures that the link to the href is disabled
	      evnt.preventDefault();
	 
	      })
	    //add the button widget  
	    .button({
	       //add the icons  
	       icons: {primary:'ui-icon-circle-arrow-s',secondary:'ui-icon-document'} 
	    });
	
						
});//end jQ function

