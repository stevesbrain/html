// ui-animations.js

$(document).ready(function(){
	// Blurs out the links that are not being hovered over on the currently
	// hovered over .main-nav-row. by adding the .has-focus class to them 
	// dynamically.
	$('.main-nav-link').mouseover(function() {
		$(this).siblings(':not(span)').addClass('has-focus');
	});
	// Removes the blur from the links that are not being hovered over on the 
	// currently hovered over .main-nav-row. by removing the .has-focus class 
	// from them dynamically.
	$('.main-nav-link').mouseleave(function() {
		$(this).siblings(':not(span)').removeClass('has-focus');
	});

	var main_nav_rows = document.getElementsByClassName('main-nav-row');
			
	for(var i = 0; i < main_nav_rows.length; i++) {
		// Lengthens the horizontal rule at the bottom of each .main-nav-row
		// to a width of 100% from it's initial width of 30%;. 
		main_nav_rows[i].onmouseover = function() {
			var elem_hr = this.getElementsByTagName('hr')[0];
			elem_hr.style.width = '100%';
			elem_hr.style.transition = 'all .26s ease';
		};
		
		// Shortens the horizontal rule at the bottom of each .main-nav-row
		// to its initial width of 30% from 100%. 
		main_nav_rows[i].onmouseleave = function() {
			var elem_hr = this.getElementsByTagName('hr')[0];
			elem_hr.style.width = '30%';
			elem_hr.style.transition = 'all .26s ease';
		
		};
	}

});