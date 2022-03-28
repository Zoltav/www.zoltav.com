window.addEvent('load', function() {
				new JCaption('img.caption');
			});
jQuery( document ).ready(function() {
jQuery( ".item-102" ).mouseover(function() {
jQuery( "#about_us_menu" ).slideDown({ },"slow");
//jQuery( "header" ).css("background","#ffffff");
jQuery( "#nav_close" ).show({ },"slow");
jQuery( "#investor_menu" ).slideUp({ },"slow");
jQuery( "#csr_menu" ).slideUp({ },"slow");
jQuery( "#operations_menu" ).slideUp({ },"slow");
});
});

jQuery( document ).ready(function() {
jQuery( "#nav_close" ).mouseover(function() {
jQuery( "#about_us_menu" ).slideUp({ },"slow");
jQuery( "#nav_close" ).hide({ },"slow");
});
});

jQuery( document ).ready(function() {
jQuery( ".item-104" ).mouseover(function() {
jQuery( "#investor_menu" ).slideDown({ },"slow");
jQuery( "#nav_close" ).show({ },"slow");
jQuery( "#about_us_menu" ).slideUp({ },"slow");
jQuery( "#csr_menu" ).slideUp({ },"slow");
jQuery( "#operations_menu" ).slideUp({ },"slow");
});
});

jQuery( document ).ready(function() {
jQuery( "#nav_close" ).mouseover(function() {
jQuery( "#investor_menu" ).slideUp({ },"slow");
jQuery( "#nav_close" ).hide({ },"slow");
});
});

jQuery( document ).ready(function() {
jQuery( ".item-103" ).mouseover(function() {
jQuery( "#operations_menu" ).slideDown({ },"slow");
jQuery( "#nav_close" ).show({ },"slow");
jQuery( "#about_us_menu" ).slideUp({ },"slow");
jQuery( "#investor_menu" ).slideUp({ },"slow");
jQuery( "#csr_menu" ).slideUp({ },"slow");
});
});

jQuery( document ).ready(function() {
jQuery( "#nav_close" ).mouseover(function() {
jQuery( "#operations_menu" ).slideUp({ },"slow");
jQuery( "#nav_close" ).hide({ },"slow");
});
});

jQuery( document ).ready(function() {
jQuery( "#main_nav_button" ).click(function() {
jQuery( "#mobile_menu" ).show({ },"slow");
//jQuery( "#search" ).show({ },"slow");
jQuery( "#mobile_menu_close" ).show({ },"slow");
});
});

jQuery( document ).ready(function() {
jQuery( "#mobile_menu_close" ).click(function() {
jQuery( "#mobile_menu" ).hide({ },"slow");
jQuery( "#about_us_menu" ).slideUp({ },"slow");
jQuery( "#investor_menu" ).slideUp({ },"slow");
jQuery( "#operations_menu" ).slideUp({ },"slow");
jQuery( "#csr_menu" ).slideUp({ },"slow");
//jQuery( "#search" ).slideUp({ },"slow");
jQuery( "#mobile_menu_close" ).hide({ },"slow");
});
});

/**
* This funciton dispalys a director description
*
* @param {String} description_id Html element id which has to be displayed
* @return void
*/
function show_director_description(description_id){

	jQuery(".new_description").hide();

	if(description_id.indexOf('senior_director') >= 0) {
			jQuery('#right_col2').show();
			jQuery('#' + description_id).show();
		}
		else{
			jQuery('#left_col').show();
			jQuery('#' + description_id).show();
		}
}


function setZoltavCookie(cname, cvalue) {	
	document.cookie = cname + "=" + cvalue + "; path=/" ;
}

function redirectDoc(doc) {
	if( doc == 'protected 1'){
		window.location.href = "/disclaimer?doc=circular";
	} else if( doc == 'protected 2'){
		window.location.href = "/disclaimer?doc=tender_form";
	}
}

function checkReferrer(doc) {
	if( doc === 'protected 1') {
		setZoltavCookie('ZoltavDisclaimer', 'yes');
		window.location.href = "/wp-content/uploads/protected/Delisting-and-Tender-Offer-Circular_Final.pdf";
	} else if( doc === 'protected 2') {
		setZoltavCookie('ZoltavDisclaimer', 'yes');
		window.location.href = "/wp-content/uploads/protected/Zoltav-Tender-Form.pdf";
	} else {
		window.location.href = "/documents";
	}	
}
